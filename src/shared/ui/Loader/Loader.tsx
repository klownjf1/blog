import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/className';
import './Loader.scss'

interface LoaderProps {
    className?: string
}

export const Loader:FC<LoaderProps> = ({className}) => {
    return (
        <div className={classNames('', {}, [className])}>
            <div className="loadingio-spinner-eclipse-n2l53445u">
                <div className="ldio-ox9b2dniixm">
                    <div />
                </div>
            </div>
        </div>
    );
};
