import {FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import './Loader.scss'

interface LoaderProps {
    className?: string
}

export const Loader = memo(({className}: LoaderProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            <div className="loadingio-spinner-eclipse-n2l53445u">
                <div className="ldio-ox9b2dniixm">
                    <div />
                </div>
            </div>
        </div>
    );
});
