//get current user from local storage
const user = JSON.parse(localStorage.getItem('user'));
const welcome = document.getElementById('welcome');
const fav = document.getElementById('favInfo');


//show current user info on page
welcome.textContent = `Welcome ${user.userName}!`;
fav.textContent = `You can update your favorite drink from ${user.favDrink} to something new if you have found a new favorite!`


// sendNewDrinkBtn will get (GET /:id) 
const newDrinkBtn = document.getElementById('sendNewDrinkBtn');
const holdMsg = document.getElementById('hold');

newDrinkBtn.addEventListener('click', (event) => {
    event.preventDefault();

    fetch(`/api/v1/randococktail/${user.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    holdMsg.textContent = 'One moment please your new drink is on the way!'
    setTimeout(() => { holdMsg.textContent = '' }, 7000);
});

// newFavBtn will hit (PUT /:) from url and get input from field to send as new drink
const newFavBtn = document.getElementById('newFavBtn');
const form = document.getElementById('updateFav');

newFavBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const fd = new FormData(form);
    const newFavorite = fd.get('newFav');

    fetch(`/api/v1/randococktail/${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newFav: newFavorite }),
    })
        .then((res) => res.json())
        .then((json) => localStorage.setItem('user', JSON.stringify(json)))
        // upadte text with new user fav
        .then((blah) => window.location.reload());
});


//getUserFavsBtn will hit (GET) all and show all users name & fav in a table

//will need to map through returned array and append table to page in empty div allUserFavsList
const showUserFavsBtn = document.getElementById('getUserFavsBtn');
const userFavList = document.getElementById('allUserFavsList');

const appendFavs = (user) => {
    const p = document.createElement('p');
    p.classList = 'fav';
    p.textContent = `${user.userName}'s Favorite Drink: ${user.favDrink}`;
    userFavList.appendChild(p);
};

showUserFavsBtn.addEventListener('click', (event) => {
    event.preventDefault();

    fetch(`/api/v1/randococktail/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((users) => { users.forEach(appendFavs) });

});

//deleteUserBtn will hit (DELETE /:id)
//will append "your account has been removed" line to page with timeout 
//then redirect to home page to sign in 
const deleteAcctBtn = document.getElementById('deleteUserBtn');
const byebye = document.getElementById('byebye');

deleteAcctBtn.addEventListener('click', (event) => {
    event.preventDefault();

    fetch(`/api/v1/randococktail/${user.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((json) => localStorage.setItem('user', JSON.stringify(json)));

    byebye.textContent = 'We are sorry to see you go. You will receive one last text to confirm that your account has been deleted.'
    setTimeout(() => { window.location = './index.html' }, 5000);
});


