// for the nav

let hamNav = document.querySelector('.ham--nav');
let listNav = document.querySelector('.list--nav');
let boxNav = document.querySelector('.box--nav');
let imgList = document.querySelector('.img--list');

boxNav.addEventListener("click", function(){
    listNav.classList.toggle('is--active');
    hamNav.classList.toggle('is--active');
    imgList.classList.toggle('is--active');
})
