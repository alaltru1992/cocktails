import React from 'react';
import classes from './styles.module.scss';

const NotFoundPage = () => {

    return <div className={classes['not-found-page']}>
        <h1 className={classes['not-found-page__text']}>Page not found</h1>
    </div>;
};
export default NotFoundPage;
