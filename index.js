burger = document.querySelector('.burger')
nav = document.querySelector('.nav')
navbar = document.querySelector('.navbar')
right = document.querySelector('.right')

burger.addEventListener('click',()=>{
    nav.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    right.classList.toggle('v-class');
})
