const { default: axios } = require('axios');

const getCocktail = async () => {
    const { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
    const drink = data.drinks[0];
    return drink;
};

function mungeCocktail(drink) {

    // const drinkObj = {
    //     drinkName: drink.strDrink,
    //     ing1: drink.Ingredient1,
    //     ing1amt: drink.strMeasure1,
    //     directions: drink.strInstructions
    // }

    // if (drink.strIngredient2) {
    //     drinkObj.ing2 = drink.strIngredient2,
    //         drinkObj.ing2amt = drink.strMeasure2
    // }
    // if (drink.strIngredient3) {
    //     drinkObj.ing3 = drink.strIngredient3,
    //         drinkObj.ing3amt = drink.strMeasure3
    // }
    // if (drink.strIngredient4) {
    //     drinkObj.ing4 = drink.strIngredient4,
    //         drinkObj.ing4amt = drink.strMeasure4
    // }
    // if (drink.strIngredient5) {
    //     drinkObj.ing5 = drink.strIngredient5,
    //         drinkObj.ing5amt = drink.strMeasure5
    // }
    // if (drink.strIngredient6) {
    //     drinkObj.ing6 = drink.strIngredient6,
    //         drinkObj.ing6amt = drink.strMeasure6
    // }
    // if (drink.strIngredient7) {
    //     drinkObj.ing7 = drink.strIngredient7,
    //         drinkObj.ing7amt = drink.strMeasure7
    // }
    // if (drink.strIngredient8) {
    //     drinkObj.ing8 = drink.strIngredient8,
    //         drinkObj.ing8amt = drink.strMeasure8
    // }
    // if (drink.strIngredient9) {
    //     drinkObj.ing9 = drink.strIngredient9,
    //         drinkObj.ing9amt = drink.strMeasure9
    // }
    // if (drink.strIngredient10) {
    //     drinkObj.ing10 = drink.strIngredient10,
    //         drinkObj.ing10amt = drink.strMeasure10
    // }
    // if (drink.strIngredient11) {
    //     drinkObj.ing11 = drink.strIngredient11,
    //         drinkObj.ing11amt = drink.strMeasure11
    // }

    // return drinkObj;
    const drinkNAME = drink.strDrink.toUpperCase();

    const drinkStr = `\n\nNew Drink Recipe: ${drinkNAME}\n\nDirections: ${drink.strInstructions}\n\nIngredients:\n${drink.strMeasure1} ${drink.strIngredient1}\n${drink.strMeasure2 ? drink.strMeasure2 + ' ' + drink.strIngredient2 + '\n' : ''}${drink.strMeasure3 ? drink.strMeasure3 + ' ' + drink.strIngredient3 + '\n' : ''}${drink.strMeasure4 ? drink.strMeasure4 + ' ' + drink.strIngredient4 + '\n' : ''}${drink.strMeasure5 ? drink.strMeasure5 + ' ' + drink.strIngredient5 + '\n' : ''}${drink.strMeasure6 ? drink.strMeasure6 + ' ' + drink.strIngredient6 + '\n' : ''}${drink.strMeasure7 ? drink.strMeasure7 + ' ' + drink.strIngrediene7 + '\n' : ''}${drink.strMeasure8 ? drink.strMeasure8 + ' ' + drink.strIngredient8 + '\n' : ''}${drink.strMeasure9 ? drink.strMeasure9 + ' ' + drink.strIngredient9 + '\n' : ''}${drink.strMeasure10 ? drink.strMeasure10 + ' ' + drink.strIngredient10 + '\n' : ''}${drink.strMeasure11 ? drink.strMeasure11 + ' ' + drink.strIngredient11 + '\n' : ''}${drink.strMeasure12 ? drink.strMeasure12 + ' ' + drink.strIngredient12 + '\n' : ''}${drink.strMeasure13 ? drink.strMeasure13 + ' ' + drink.strIngredient13 + '\n' : ''}${drink.strMeasure14 ? drink.strMeasure14 + ' ' + drink.strIngredient14 + '\n' : ''}${drink.strMeasure15 ? drink.strMeasure15 + ' ' + drink.strIngredient15 + '\n' : ''}\n`;

    return drinkStr;
}

module.exports = { getCocktail, mungeCocktail };
