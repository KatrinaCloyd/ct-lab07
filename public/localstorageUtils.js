const USER = 'user';

export function lsSaveUser(userObj) {
    localStorage.setItem(USER, JSON.stringify(userObj));
}

export function lsGetUser() {
    let stringyUser = localStorage.getItem(USER);
    let parsedUser = JSON.parse(stringyUser);
    return parsedUser;
}