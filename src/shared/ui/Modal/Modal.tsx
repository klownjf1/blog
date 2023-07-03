import {
    FC, MouseEvent, useCallback, useEffect, useRef, useState,
} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Portal} from 'shared/ui/Portal/Portal';
import {useTheme} from 'app/providers/ThemeProvider';
import s from './Modal.module.scss'

interface ModalProps {
    className?: string,
    isOpen?: boolean,
    onClose?: () => void,
}

const ANIMATION_DELAY = 300

export const Modal:FC<ModalProps> = ({
    className, children, isOpen, onClose,
}) => {

    const [isClosing, setIsClosing] = useState<boolean>(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
        [s.isClosing]: isClosing,
    }

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        // иммитация логики componentWillUnmount,
        // при демонтировки компоненты будет выполняться
        // содержимое return {...}
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return (
        <Portal>
            <div className={classNames(s.Modal, mods, [className, theme])}>
                <div className={s.overlay} onClick={closeHandler}>
                    <div className={s.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
