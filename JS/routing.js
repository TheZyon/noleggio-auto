export const chiSiamoDiv = document.getElementById('chiSiamo');
export const catalogoAutoDiv = document.getElementById('catalogoAuto');
let pagesArray = [chiSiamoDiv, catalogoAutoDiv];
export function showPage(e) {
    pagesArray.forEach(page => {
        page == e ? page.style.display = '' : page.style.display = 'none';
    });
}
