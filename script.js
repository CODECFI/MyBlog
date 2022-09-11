//pick ekements
 const selectElement = selector =>{
     const element = document.querySelector(selector);
     if(element) return element;
     throw new Error(`someThing went wrong make sure ${selector} exits or is typed incorrectly`);
 };



//nav styles on scroll

const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');

    }
};

window.addEventListener('scroll', scrollHeader);


//open menu & search from popup



const menuToggleIcon = selectElement('#menu-toggle-icon');


const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
    
};

menuToggleIcon.addEventListener('click', toggleMenu);



//open // close / search pop up

const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormCon = selectElement('#search-form-con');


formOpenBtn.addEventListener('click', () => searchFormCon.classList.add('activated'));


formCloseBtn.addEventListener('click', () => searchFormCon.classList.remove('activated'));



// -- close the search form popup on esc keypress

window.addEventListener('keyup', event => {
    if(event.key === 'Escape') searchFormCon.classList.remove('activated');
});



// switch theme / add to local storage

const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme')

if(currentTheme){
   bodyElement.classList.add('light-theme');
   }


themeToggleBtn.addEventListener('click', () =>{
    bodyElement.classList.toggle('light-theme');
   
});





// swiper 

const swiper = new Swiper('.swiper',{
    slidesPerView: 1,
    spaceBetween: 20,
    navigation{
    nextEl: '.swiper-button-next',
    prevel: '.swiper-button-prev'
},
    pagination: {
                el: '.swiper-pagination'                 
},
  
    breakpoints: {
               700:{
                slidesPerView: 2
  },
    1200:{
          sildesPerView: 3;                
 }                      
                          
 }                 
                          
   });











































































