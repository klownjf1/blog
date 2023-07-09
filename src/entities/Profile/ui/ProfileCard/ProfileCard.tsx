import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {useSelector} from 'react-redux';
import {getProfileData} from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import {getProfileIsLoading} from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import {getLoginError} from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import {Text} from 'shared/ui/Text/Text';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import s from './ProfileCard.module.scss'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard:FC<ProfileCardProps> = ({className}) => {

    const {t} = useTranslation('profile')
    const data = useSelector(getProfileData)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getProfileIsLoading)

    return (
        <div className={classNames(s.ProfileCard, {}, [className])}>
            <div className={s.header}>
                <Text title={t('Профиль')} />
                <Button theme={ButtonTheme.OUTLINE} className={s.editBtn}>
                    {t('Редактировать')}
                </Button>

            </div>
            <div className={s.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={s.input}

                />

                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={s.input}
                />

            </div>
        </div>
    );
};
