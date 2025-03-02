import React from 'react';
import classes from './styles.module.scss';
import { COCKTAIL_NAMES } from 'consts';
import AppLink from '../../shared/AppLink';

const Menu = () => {
  return (
    <div className={classes['menu-page']}>
      {COCKTAIL_NAMES.map(({ name, code }) => {
        return (
          <AppLink key={name} to={code}>
            <div className={classes['menu-page-item']}>
              <span className={classes['menu-page-text']}>{name}</span>
            </div>
          </AppLink>
        );
      })}
    </div>
  );
};

export default Menu;
