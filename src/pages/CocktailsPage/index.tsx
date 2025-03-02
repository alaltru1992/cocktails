import React, {ReactNode} from 'react';
import classes from './styles.module.scss'

interface IProps{
    children: ReactNode,
}

export default (props: IProps) =>{
    const {children} = props;
    return <div className={classes['cocktails-page']}>
        {children}
    </div>
}