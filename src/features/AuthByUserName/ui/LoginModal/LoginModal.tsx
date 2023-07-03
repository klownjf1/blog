import {FC} from 'react';
import {Modal} from 'shared/ui/Modal/Modal';
import {classNames} from 'shared/lib/classNames/classNames';
import {LoginForm} from '../LoginForm/LoginForm';
import s from './LoginModal.module.scss'

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal:FC<LoginModalProps> = ({className, isOpen, onClose}) => {
    return (
        <Modal
            className={classNames(s.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
