export interface IDrink{
    strDrink: string,
    strCategory: string,
    strGlass: string,
    strDrinkThumb: string,
    strInstructions: string,
    strIngredient1: string,
    strIngredient2: string | null,
    strIngredient3: string | null,
    strIngredient4: string | null,
    strIngredient5: string | null,
    strIngredient6: string | null,
    strIngredient7: string | null,
    strIngredient8: string | null,
    strIngredient9: string | null,
    strIngredient10: string | null,
    strIngredient11: string | null,
    strIngredient12: string | null,
    strIngredient13: string | null,
    strIngredient14: string | null,
    strIngredient15: string | null,
}

export interface IDrinkRecord{
    key: string,
    data: IDrink,
}

export interface IDrinksState{
    drinks: IDrinkRecord[],
}