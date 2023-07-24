import {Auth} from './auth';
import * as routing from './routing';


Array.from(document.getElementById('router-outlet')!.children).forEach(child=>(child as HTMLElement).style.display='none');
let pages = new routing.Pages();
let auth = new Auth(pages);

console.log("pages that can be seen ", pages.pagesThatCanBeSeen)

