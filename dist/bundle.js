(()=>{"use strict";var e;!function(e){e.USER="USER",e.CUSTOMER="CUSTOMER",e.STAFF="STAFF",e.ADMIN="ADMIN"}(e||(e={}));const s=document.getElementById("home"),t=document.getElementById("chiSiamo"),n=document.getElementById("catalogoAuto"),o=document.getElementById("login"),a=document.getElementById("registrazione"),i=document.getElementById("prenotazione"),l=document.getElementById("profilo"),r=document.getElementById("nav-login"),d=document.getElementById("nav-registrazione"),g=document.getElementById("nav-logout");Array.from(document.getElementById("router-outlet").children).forEach((e=>e.style.display="none"));let h=new class{constructor(i){this.pagesThatCanBeSeen=[s,t,n,o,a],this.userRoles=[e.USER],this.setUserRoles(i),this.addPages(),this.setNavbarOptions(),this.show(this.pagesThatCanBeSeen[0])}setUserRoles(s){switch(s){case"USER":break;case"CUSTOMER":this.userRoles=[...this.userRoles,e.CUSTOMER];break;case"STAFF":this.userRoles=[...this.userRoles,e.CUSTOMER,e.STAFF];break;case"ADMIN":this.userRoles=[...this.userRoles,e.CUSTOMER,e.STAFF,e.ADMIN];break;default:console.error("this user role is not permitted: ",s)}}addPages(){this.userRoles.includes(e.CUSTOMER)&&(this.pagesThatCanBeSeen=[...this.pagesThatCanBeSeen,i,l])}setNavbarOptions(){let e=document.getElementById("nav-ul");e.innerHTML="",this.pagesThatCanBeSeen.forEach((s=>{"login"!=s.id&&"registrazione"!=s.id&&(e.innerHTML+=`\n                <li class="nav-item">\n                <a class="nav-link active" aria-current="page" href="#" id='nav-${s.id}'>${s.id}</a>\n              </li>\n                `)})),this.pagesThatCanBeSeen.forEach((e=>{var s;null===(s=document.getElementById(`nav-${e.id}`))||void 0===s||s.addEventListener("mousedown",(()=>{this.show(e)}))}))}show(e){this.pagesThatCanBeSeen.find((s=>s==e))?this.pagesThatCanBeSeen.forEach((s=>{s.style.display=s===e?"":"none"})):console.error("PAGE TO SHOW ",e," NOT FOUND AMONG THE PAGES THAT CAN BE SEEN!")}}("USER");new class{constructor(e){this.pages=e,this.onInit()}onInit(){sessionStorage.removeItem("token"),null==r||r.addEventListener("mousedown",(()=>this.login())),null==g||g.addEventListener("mousedown",(()=>this.logout())),this.btnsDisplayIsLoggedIn()}login(){sessionStorage.setItem("token","qwerty"),this.pages.show(o),this.btnsDisplayIsLoggedIn()}logout(){sessionStorage.removeItem("token"),this.pages.show(s),this.btnsDisplayIsLoggedIn()}btnsDisplayIsLoggedIn(){sessionStorage.getItem("token")?(r.style.display="none",d.style.display="none",g.style.display=""):(r.style.display="",d.style.display="",g.style.display="none")}}(h),console.log("pages that can be seen ",h.pagesThatCanBeSeen)})();