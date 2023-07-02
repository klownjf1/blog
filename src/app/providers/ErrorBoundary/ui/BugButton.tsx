import {FC, useEffect, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';

interface BugButtonProps {
    className?: string
}
// Компонент для тестирования
export const BugButton:FC<BugButtonProps> = ({className}) => {
    const [error, setError] = useState<boolean>(false)
    const {t} = useTranslation()
    const throwError = () => setError(true)

    useEffect(() => {
        if (error) throw new Error()
    }, [error])

    return (
        <Button onClick={throwError}>
            {t('throw error')}
        </Button>
    );
};
