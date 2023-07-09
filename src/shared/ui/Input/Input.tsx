import {
    ChangeEvent, FC, InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
    autofocus?: boolean
}

export const Input = memo((
    {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } :InputProps,
) => {

    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [caretPosition, setCaretPosition] = useState<number>(0)
    const ref = useRef() as MutableRefObject<HTMLInputElement>

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            ref.current.focus()
        }
    }, [autofocus])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    // при выходим из инпута
    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    return (
        <div className={classNames(s.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={s.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={s.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={s.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={s.caret}
                        style={{left: `${caretPosition * 8}px`}}
                    />
                )}
            </div>

        </div>
    );
});
