const menu= document.querySelector('.header-menu');
const btnActive=document.querySelector('#btnMenu');

btnActive.addEventListener("click",()=>{

    menu.classList.toggle("active");

});

//para el scroll suave
/*const links = document.querySelectorAll(".header-menu li a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

*/

const links = document.querySelectorAll(".header-menu li a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
 
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}