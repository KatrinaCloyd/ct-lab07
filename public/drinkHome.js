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
        .then((json) => localStorage.setItem('user', JSON.stringify(json)))
        .then((blah) => window.location = './dostuff.html');
    //this way works becasue it is waiting for the response from the previous line even though we arent doing anything with it


    // redirect to Do Stuff Page - NOT WORKING
    // .then(window.location = './dostuff.html');
    // window.location = './dostuff.html';

    // const user = JSON.parse(localStorage.getItem('user'));
    // if (user) window.location = './dostuff.html';
});

//this is moving the user to the next page before the info is saved to local stroage, how do I wait for the call to finish to send to new page? 
// .then((json) => window.location = `./dostuff.html?id=${json.id}`);