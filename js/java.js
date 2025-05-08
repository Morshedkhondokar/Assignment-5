const pathName = window.location.pathname;
const pageName = pathName.split('/').pop();

if(pageName === 'index.html'){
    document.querySelector('.home').classList.add('active')
}
if(pageName === 'history.html'){
    document.querySelector('.history').classList.add('active')
}