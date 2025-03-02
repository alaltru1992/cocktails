import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classes from './styles.module.scss';

interface AppLinkProps extends LinkProps {
  to: string;
}

const AppLink = (props: AppLinkProps) => {
  const { to, children, ...otherProps } = props;

  return (
    <Link className={classes['app-link']} to={to} {...otherProps}>
      {children}
    </Link>
  );
};

export default AppLink;
