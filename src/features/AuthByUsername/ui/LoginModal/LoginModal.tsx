import {FC, Suspense} from 'react';
import {Modal} from 'shared/ui/Modal/Modal';
import {LoginFormAsync} from 'features/AuthByUsername/ui/LoginForm/LoginForm.async';
import {Loader} from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal:FC<LoginModalProps> = ({className, isOpen, onClose}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
