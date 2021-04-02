//get current user from local storage
const user = JSON.parse(localStorage.getItem('user'));
const welcome = document.getElementById('welcome');
const fav = document.getElementById('favInfo');


//show current user info on page
welcome.textContent = `Welcome ${user.userName}!`;
fav.textContent = `You can update your favorite drink from ${user.favDrink} to something new if you have found a new favorite!`


// sendNewDrinkBtn will get (GET /:id) 
const newDrinkBtn = document.getElementById('sendNewDrinkBtn');

newDrinkBtn.addEventListener('click', (event) => {
    event.preventDefault();

    fetch(`/api/v1/randococktail/${user.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
});

// newFavBtn will hit (PUT /:) from url and get input from field to send as new drink
// save new returned user info to local strage 
// refresh page with updated user info

//getUserFavsBtn will hit (GET) all and show all users name & fav in a table
//will need to map through returned array and append table to page in empty div allUserFavsList

//deleteUserBtn will hit (DELETE /:id)
//will append "your account has been removed" line to page with timeout 
//then redirect to home page to sign in 