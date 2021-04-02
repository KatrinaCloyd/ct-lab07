//sign up user by hitting db POST endpoint
const form = document.getElementById('signUp');
const submitBtn = document.getElementById('formSubmit');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const fd = new FormData(form);
    const newUser = fd.get('name');
    const userNumber = fd.get('number');
    const userFav = fd.get('userFav');

    fetch('/api/v1/randococktail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: newUser,
            phoneNumber: userNumber,
            favDrink: userFav
        }),
    })
        .then((res) => res.json())
        //save returned new user to local storage
        .then((json) => localStorage.setItem('user', JSON.stringify(json)));
    //redirect to Do Stuff Page 
    window.location = './dostuff.html';
});
