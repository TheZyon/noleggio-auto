import { ROLES } from "./roles";
// public pages
export const home = document.getElementById('home');
export const chiSiamo = document.getElementById('chiSiamo');
export const catalogoAuto = document.getElementById('catalogoAuto');
export const login = document.getElementById('login');
export const registrazione = document.getElementById('registrazione');
// customer pages
export const prenotazione = document.getElementById('prenotazione');
export const profilo = document.getElementById('profilo');
/**
 * TODO: aggiungere le altre pagine seguendo la logica esistente !!
 */
// staff pages
// admin pages
export class Pages {
    constructor() {
        this.pagesThatCanBeSeen = [home, chiSiamo, catalogoAuto, login, registrazione]; // pages that the user can see
        this.userRoles = [ROLES.USER]; // array of roles of current user
        this.setPagesPerRole('USER');
    }
    setPagesPerRole(userRole) {
        this.setUserRoles(userRole);
        this.addPages();
        this.setNavbarOptions();
        this.show(this.pagesThatCanBeSeen[0]);
    }
    setUserRoles(userRole) {
        switch (userRole) {
            case 'USER': break;
            case 'CUSTOMER':
                this.userRoles = [...this.userRoles, ROLES.CUSTOMER];
                break;
            case 'STAFF':
                this.userRoles = [...this.userRoles, ROLES.STAFF];
                break;
            case 'ADMIN':
                this.userRoles = [...this.userRoles, ROLES.STAFF, ROLES.ADMIN];
                break;
            default: console.error('this user role is not permitted: ', userRole);
        }
    }
    /**
     * add pages to pagesThatCanBeSeen based on the user roles
     */
    addPages() {
        if (this.userRoles.includes(ROLES.CUSTOMER))
            this.pagesThatCanBeSeen = [...this.pagesThatCanBeSeen, prenotazione, profilo];
        //TODO: aggiungere la logica analoga per gli altri ruoli !!
    }
    /**
     * set navbar list-items based on pagesThatCanBeSeen
     */
    setNavbarOptions() {
        let nav = document.getElementById('nav-ul');
        nav.innerHTML = ''; // clean inner html 
        this.pagesThatCanBeSeen.forEach(page => {
            if (page.id != 'login' && page.id != 'registrazione') {
                nav.innerHTML += `
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" id='nav-${page.id}'>${page.id}</a>
              </li>
                `;
            }
        });
        this.pagesThatCanBeSeen.forEach(page => {
            var _a;
            (_a = document.getElementById(`nav-${page.id}`)) === null || _a === void 0 ? void 0 : _a.addEventListener('mousedown', () => {
                this.show(page);
            });
        });
    }
    /**
     * Set the element 'e' be the currently visualized page
     */
    show(e) {
        if (!this.pagesThatCanBeSeen.find(page => page == e))
            console.error("PAGE TO SHOW ", e, " NOT FOUND AMONG THE PAGES THAT CAN BE SEEN!");
        else { // if the elment exists in the array    
            this.pagesThatCanBeSeen.forEach(page => {
                // console.log("THE PAGE EXISTS : ", e.id)
                // console.log("The current page: ", page.id)
                page === e ? page.style.display = '' : page.style.display = 'none';
            });
        }
    }
}
