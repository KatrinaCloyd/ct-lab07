const { default: axios } = require('axios');

const getCocktail = async () => {
    const { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
    return data.drinks[0];
};

module.exports = { getCocktail };