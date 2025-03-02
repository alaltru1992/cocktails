import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { rootState } from 'configuration/store';
import classes from './styles.module.scss';
import { IDrinkRecord, IDrink } from 'types';
import { addDrink } from 'configuration/store/reducers/drinks';
import { DrinkPageLazy as DrinkPage } from '../DrinkPage';

const DrinksPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const drinkName = pathname.replace('/', '') || 'margarita';
  const drinks = useSelector(
    (state: rootState) => state.drinksSlice.drinksArray
  );
  const currentDrinksVariants = useMemo((): IDrink[] | undefined => {
    return drinks.find(({ key }) => key === drinkName)?.drinks;
  }, [drinks, drinkName]);
  async function getCocktailData(url: string, key: string): Promise<void> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const { drinks } = await response.json();
      const res: IDrinkRecord = {
        key,
        drinks
      };
      dispatch(addDrink(res));
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
  useEffect(() => {
    const currentDrinkName = drinkName || 'margarita';
    if (!drinks.find(({ key }) => key === currentDrinkName)) {
      getCocktailData(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${currentDrinkName}`,
          currentDrinkName
      );
    }
  }, [drinkName, drinks]);

  return (
    <div className={classes['drinks-page']}>
      {currentDrinksVariants &&
        currentDrinksVariants.map((elm) => {
          return <DrinkPage key={elm.idDrink} drink={elm} />;
        })}
    </div>
  );
};

export default DrinksPage;
