

import { ROLES } from "./roles";

// public pages
export const home: HTMLElement = document.getElementById('home')!;
export const chiSiamo: HTMLElement = document.getElementById('chiSiamo')!;
export const catalogoAuto: HTMLElement = document.getElementById('catalogoAuto')!;
export const login: HTMLElement = document.getElementById('login')!;
export const registrazione: HTMLElement = document.getElementById('registrazione')!;

// customer pages
export const prenotazione : HTMLElement = document.getElementById('prenotazione')!;
export const profilo : HTMLElement = document.getElementById('profilo')!;

/**
 * TODO: aggiungere le altre pagine seguendo la logica esistente !!
 */


// staff pages

// admin pages


export class Pages{
    pagesThatCanBeSeen =[home, chiSiamo, catalogoAuto, login, registrazione]; // pages that the user can see
    userRoles: ROLES[]=[ROLES.USER]; // array of roles of current user

    constructor(){
            this.setPagesPerRole('USER');
    }

    setPagesPerRole(userRole: 'USER' | 'CUSTOMER' | 'STAFF' | 'ADMIN'){
        this.setUserRoles(userRole);
        this.addPages();
        this.setNavbarOptions();
        this.show(this.pagesThatCanBeSeen[0]);
    }

    private setUserRoles(userRole:string){
        switch(userRole){
            case 'USER': break;
            case 'CUSTOMER': this.userRoles=[...this.userRoles, ROLES.CUSTOMER];  break;
            case 'STAFF':   this.userRoles=[...this.userRoles, ROLES.STAFF]; break;
            case 'ADMIN':     this.userRoles=[...this.userRoles, ROLES.STAFF, ROLES.ADMIN]; break;
            default : console.error('this user role is not permitted: ', userRole);
        }
    }

    /**
     * add pages to pagesThatCanBeSeen based on the user roles
     */
    private  addPages(){
        if(this.userRoles.includes(ROLES.CUSTOMER)) this.pagesThatCanBeSeen = [...this.pagesThatCanBeSeen, prenotazione, profilo];
        
        //TODO: aggiungere la logica analoga per gli altri ruoli !!

    }

    /**
     * set navbar list-items based on pagesThatCanBeSeen
     */
    setNavbarOptions(){
        let nav = document.getElementById('nav-ul');
        nav!.innerHTML=''; // clean inner html 

        this.pagesThatCanBeSeen.forEach(page=>{
            if(page.id!='login' && page.id!='registrazione'){
                nav!.innerHTML+=`
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" id='nav-${page.id}'>${page.id}</a>
              </li>
                `    
            }    
        })

        this.pagesThatCanBeSeen.forEach(page=>{
            document.getElementById(`nav-${page.id}`)?.addEventListener('mousedown',()=>{
                this.show(page)
                })
        })
        




    }
    /**
     * Set the element 'e' be the currently visualized page
     */
    show(e: HTMLElement){
        if(!this.pagesThatCanBeSeen.find(page=>page==e)) console.error("PAGE TO SHOW ", e," NOT FOUND AMONG THE PAGES THAT CAN BE SEEN!")
        else{ // if the elment exists in the array    
            this.pagesThatCanBeSeen.forEach(page=>{
                // console.log("THE PAGE EXISTS : ", e.id)
                // console.log("The current page: ", page.id)
                page===e ? page!.style.display='' : page!.style.display='none'     
            })
        }
    }
}

