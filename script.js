let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll= () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active'); 
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active'); 
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 170,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });
  var swiper = new Swiper(".review-slider", {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });

