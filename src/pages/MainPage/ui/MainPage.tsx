import React, {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Counter} from 'entities/Counter';
import {Input} from 'shared/ui/Input/Input';

interface MainPageProps {
    className?: string
}

const MainPage:FC<MainPageProps> = ({className}) => {

    const {t} = useTranslation('main');
    const [value, setValue] = useState<string>('')

    const onChange = (val: string) => {
        setValue(val)
    }

    return (
        <div>
            {t('Основная страница')}
        </div>
    );
}

export default MainPage;
