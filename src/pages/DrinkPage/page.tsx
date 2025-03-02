import React from 'react';
import classes from './styles.module.scss'
import {IDrink} from "types";


interface IDrinkProp{
    drink: IDrink
}

const DrinkPage = (props: IDrinkProp) =>{
    const {drink:{strDrink, strDrinkThumb, strCategory,strAlcoholic, strGlass, strIngredient1, strIngredient2, strIngredient3,
        strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10,
        strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15,strMeasure1, strMeasure2,
        strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10,
        strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strInstructions}} = props;

    const RECIEPTS = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6,
        strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13,
        strIngredient14, strIngredient15].filter((elm) => elm);

    const MEASURES = [strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7,
        strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14,
        strMeasure15].filter((elm) => elm);

    return <div className={classes['drink-page']}>
        <div className={classes['drink-page__wrapper']}>
            <span className={classes['drink-page__title-main']}>{strDrink}</span>
        </div>

        <div className={classes['drink-page__wrapper']}>
            <span className={classes['drink-page__title']}>{strCategory}</span>
            <span className={classes['drink-page__title']}>{strAlcoholic}</span>
            <span className={classes['drink-page__title']}>{strGlass}</span>
        </div>

        <div className={classes['drink-page__wrapper']}>
            <span className={classes['drink-page__title']}>Instructions:</span>
            <span className={classes['drink-page__title']}>{strInstructions}</span>
        </div>

        <div className={classes['drink-page__wrapper']}>
            <span className={classes['drink-page__title']}>List of Ingredients</span>
            <div className={classes['drink-page__table-container']}>
                {MEASURES.map((measure, i) =>{
                    return (
                        <div key={i} className={classes['drink-page__row']}>
                            <div className="cell left">{measure}</div>
                            <div className="cell right">{RECIEPTS[i]}</div>
                        </div>
                    )
                })}
            </div>
        </div>

        <img className={classes['drink-page__img']} src={strDrinkThumb}/>

    </div>
}

export default DrinkPage;