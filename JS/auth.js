export const loginBtn = document.getElementById('loginBtn');
export const registerBtn = document.getElementById('registerBtn');
export const logoutBtn = document.getElementById('logoutBtn');
export function login() {
    // aggiungere chiamata a BE 
    sessionStorage.setItem('token', 'qwerty');
    btnsDisplayIsLoggedIn();
}
export function logout() {
    sessionStorage.removeItem('token');
    btnsDisplayIsLoggedIn();
}
/**
 * manages btns display based on wether user is logged in or not
 */
export function btnsDisplayIsLoggedIn() {
    if (!!sessionStorage.getItem('token')) {
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        logoutBtn.style.display = '';
    }
    else {
        loginBtn.style.display = '';
        registerBtn.style.display = '';
        logoutBtn.style.display = 'none';
    }
}
export function onInit() {
    sessionStorage.removeItem('token');
    // add Event listeners to login and logout btns
    loginBtn === null || loginBtn === void 0 ? void 0 : loginBtn.addEventListener('mousedown', login);
    logoutBtn === null || logoutBtn === void 0 ? void 0 : logoutBtn.addEventListener('mousedown', logout);
    btnsDisplayIsLoggedIn();
}
