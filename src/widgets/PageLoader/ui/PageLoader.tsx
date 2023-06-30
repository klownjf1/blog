import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/className';
import {Loader} from 'shared/ui/Loader/Loader';
import s from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

export const PageLoader:FC<PageLoaderProps> = ({className}) => {

    return (
        <div className={classNames(s.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );

};
