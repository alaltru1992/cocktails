import {useDispatch, useSelector} from "react-redux";
import {useEffect} from 'react';
import {rootState} from 'configuration/store';
import classes from './styles.module.scss';
import {IDrinkRecord, IDrink} from 'types';
import {addDrink} from 'configuration/store/reducers/drinks'

export default () =>{


    const drinks = useSelector((state: rootState) => state.drinksSlice.drinks);
    const dispatch = useDispatch();
    async function getCocktailData(url: string, key: string) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const res:IDrinkRecord  = {
                key,
                data: await response.json()
            } ;
            dispatch(addDrink(res))
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }
    useEffect(() =>{
        const a  = drinks
        const url = new URL(window.location.href);
        const drinkName =  url.pathname.replace(/^\//, '');
        if(!drinks.find(({key}) => key === drinkName )){
            getCocktailData(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`, drinkName)
        }
        debugger
    },[drinks])
    return <div className={classes['drink-page']}>
    </div>
}