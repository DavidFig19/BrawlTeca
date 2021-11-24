const menu= document.querySelector('.header-menu');
const btnActive=document.querySelector('#btnMenu');

btnActive.addEventListener("click",()=>{

    menu.classList.toggle("active");

});