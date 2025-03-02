import React from 'react';
import { Link, LinkProps} from 'react-router-dom'
import classes from './styles.module.scss'

interface AppLinkProps extends LinkProps{
    className?: string,
    to: string,

}
export default (props: AppLinkProps ) =>{
   const {className, to, children, ...otherProps} = props;

    return <Link className={classes['app-link']} to={to} {...otherProps}>
            {children}
        </Link>
}