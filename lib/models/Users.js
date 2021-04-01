const { UserList } = require('twilio/lib/rest/conversations/v1/service/user');
const pool = require('../utils/pool');

module.exports = class Users {
    id;
    userName;
    phoneNumber;
    favDrink;

    constructor(row) {
        this.id = row.id;
        this.userName = row.user_name;
        this.phoneNumber = '+1' + row.phone_number;
        this.favDrink = row.fav_drink
    }

    static async insert({ userName, phoneNumber, favDrink }) {
        const { rows, } = await pool.query(
            'INSERT INTO users (user_name, phone_number, fav_drink) VALUES ($1, $2, $3) RETURNING *',
            [userName, phoneNumber, favDrink]
        );
        return new Users(rows[0]);
    }
};
