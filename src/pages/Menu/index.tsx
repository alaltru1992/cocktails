import {useState} from "react";
import classes from './styles.module.scss';
import {COCKTAIL_NAMES} from "consts";

export default () =>{

    const [cocktailData, cocktailDataSet] = useState(null);

    async function getCocktailData(url: string, options?: RequestInit): Promise<any> {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            cocktailDataSet(await response.json());
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }

    return <div className={classes['menu-page']}>
        {
            COCKTAIL_NAMES.map(({name, code}) =>{
                return(
                    <div key={name} onClick={() => getCocktailData(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=<${code}>`)} className={classes['menu-page-item']}>
                        <span className={classes['menu-page-text']}>
                            {name}
                        </span>
                    </div>
                )
            })
        }
    </div>
}