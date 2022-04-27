let headerMenu = document.querySelector('.header__menu');
let navList = document.querySelector('.nav__list');
let wrapper =  document.querySelector('.wrapper');
let body = document.querySelector('body');
headerMenu.addEventListener("click", () =>{
    navList.classList.add("active");
    body.classList.add("active")
    wrapper.classList.add("active")
})

wrapper.addEventListener("click", () =>{
    navList.classList.remove("active");
    body.classList.remove("active")
    wrapper.classList.remove("active")
})