searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}

window.onscroll = () =>{
    
    searchform.classList.remove('active');
    
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 200,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});