import {useEffect, useState} from "react";
import classes from './styles.module.scss';
import {COCKTAIL_NAMES} from "consts";
import {IDrinks} from "./types";
import AppLink from '../../shared/AppLink';

export default () =>{

    const [cocktailData, cocktailDataSet] = useState(null);

    useEffect(() =>{
        const a = cocktailData;
        debugger
    },[cocktailData])

    async function getCocktailData(url: string) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json());
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }

    return <div className={classes['menu-page']}>
        {
            COCKTAIL_NAMES.map(({name, code}) =>{
                return(

                  <AppLink to={code}>
                    <div key={name} onClick={() => getCocktailData(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`)} className={classes['menu-page-item']}>
                        <span className={classes['menu-page-text']}>
                            {name}
                        </span>
                    </div>
                  </AppLink>
                )
            })
        }
    </div>
}