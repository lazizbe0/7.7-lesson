"use strict";

var headerMenu = document.querySelector('.header__menu');
var navList = document.querySelector('.nav__list');
var wrapper = document.querySelector('.wrapper');
var body = document.querySelector('body');
headerMenu.addEventListener("click", function () {
  navList.classList.add("active");
  body.classList.add("active");
  wrapper.classList.add("active");
});
wrapper.addEventListener("click", function () {
  navList.classList.remove("active");
  body.classList.remove("active");
  wrapper.classList.remove("active");
});