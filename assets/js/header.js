//menu hamburguer
let menuBurger = document.querySelector('.menu-burger');
let headerMenu = document.querySelector('.header-menu');
//evento click para mostrar e esconder o menu hamburguer
menuBurger.addEventListener('click', ()=>{
    if(headerMenu.style.display==='block'){
        headerMenu.style.display = 'none';
        menuBurger.classList.remove('active');
    }else{
        headerMenu.style.display='block';
        menuBurger.classList.add('active');
    }
});