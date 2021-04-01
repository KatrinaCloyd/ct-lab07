const Users = require('../models/Users');
const { sendSms } = require('../utils/twilio');
const { getCocktail, mungeCocktail } = require('../utils/random-drink');

module.exports = class UserService {
    static async create({ userName, phoneNumber, favDrink }) {
        const drink = await getCocktail();
        const cocktail = mungeCocktail(drink);

        const newUser = await Users.insert({ userName, phoneNumber, favDrink });

        await sendSms(
            newUser.phoneNumber,
            `New profile created for ${userName}! ${userName}'s current favorite cocktail is: ${favDrink}! `
        );

        await sendSms(
            newUser.phoneNumber,
            `Welcome ${userName}! Here is your first random cocktail suggestion: ${cocktail.drinkName}. Give it a try, it may just beat out a ${favDrink}.`
        );

        return newUser;
    }
};
