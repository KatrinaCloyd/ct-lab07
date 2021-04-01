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
            `Welcome ${userName}! Here is your first random cocktail suggestion: ${cocktail}Give it a try, it may just beat out a ${favDrink}.`
        );

        return newUser;
    }

    static async getById(id) {
        const drink = await getCocktail();
        const cocktail = mungeCocktail(drink);

        const userInfo = await Users.get(id);

        await sendSms(
            userInfo.phoneNumber,
            `Here is your random cocktail suggestion: ${cocktail}Give it a try, it may just become your new favorite!`
        );

        return 'done';
    }

    static async updateFav(id, newFav) {
        const userInfo = await Users.update(id, newFav);

        await sendSms(
            userInfo.phoneNumber,
            `You have updated your favorite cocktail to ${userInfo.favDrink}!`
        );

        return userInfo;
    }

};

