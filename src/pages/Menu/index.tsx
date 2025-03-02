import React from 'react';
import classes from './styles.module.scss';
import { COCKTAIL_NAMES } from 'consts';
import AppLink from '../../shared/AppLink';
import {useDrinkName} from 'shared/hooks';
import cn from 'classnames';

const Menu = () => {
  const drinkName = useDrinkName();
  return (
    <div className={classes['menu-page']}>
      {COCKTAIL_NAMES.map(({ name, code }) => {
        return (
          <AppLink key={name} to={code}>
            <div className={cn(classes['menu-page-item'],{ [classes['menu-page-selected']]: drinkName === code })}>
              <span className={classes['menu-page-text']}>{name}</span>
            </div>
          </AppLink>
        );
      })}
    </div>
  );
};

export default Menu;
