export const chiSiamoDiv: HTMLElement|null = document.getElementById('chiSiamo');
export const catalogoAutoDiv: HTMLElement|null = document.getElementById('catalogoAuto');

let pagesArray=[chiSiamoDiv, catalogoAutoDiv];

export function showPage(e: HTMLElement){
    pagesArray.forEach(page=>{
        page==e ? page!.style.display='' : page!.style.display='none'     
    })
}
