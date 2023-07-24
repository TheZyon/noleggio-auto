import * as routing from "./routing";

const loginBtn = document.getElementById('nav-login');
const registerBtn = document.getElementById('nav-registrazione');
const logoutBtn = document.getElementById('nav-logout');


export class Auth{

    pages: routing.Pages;

    constructor(pages: routing.Pages){
        this.pages= pages;
        this.onInit();
    }

    /**
    * remove token from local storage
    * add event listeners to login and logout btns
    */
    private onInit(){

        sessionStorage.removeItem('token')
    
        // add Event listeners to login and logout btns   
        loginBtn?.addEventListener('mousedown', ()=>this.login())
        logoutBtn?.addEventListener('mousedown', ()=>this.logout())
        this.btnsDisplayIsLoggedIn()
    }


    login(){
        // aggiungere chiamata a BE 
        sessionStorage.setItem('token', 'qwerty')
        this.pages.show(routing.login)
        this.btnsDisplayIsLoggedIn()       
    }

    logout(){
        sessionStorage.removeItem('token')
        this.pages.show(routing.home)
        this.btnsDisplayIsLoggedIn()      
    }

    /**
    * manages btns display based on wether user is logged in or not
    */
    private btnsDisplayIsLoggedIn(){
        if(!!sessionStorage.getItem('token')){
            loginBtn!.style.display='none';
            registerBtn!.style.display='none';
            logoutBtn!.style.display='';
        }
        else {
            loginBtn!.style.display='';
            registerBtn!.style.display='';
            logoutBtn!.style.display='none';
        }
    
    }
}





