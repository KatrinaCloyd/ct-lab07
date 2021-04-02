export async function dbPOSTuser(userName, favDrink, phoneNumber) {
    const res = await request(app)
        .post('/api/v1/randococktail')
        .send({ userName, favDrink, phoneNumber });
    return res.body;
}

export async function getAllUsers() {
    const res = await request(app)
        .get('/api/v1/randococktail');
    return res.body;
}

export async function dbSendUserNewDrink(id) {
    const res = await request(app)
        .get(`/api/v1/randococktail/${id}`);
    return res.body;
}