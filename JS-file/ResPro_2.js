
let menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.nav_bar');

menu.onclick = () => {
    menu.classList.toggle('bx-x') ;
    navbar.classList.toggle('active') ;
}


window.onscroll =() =>{
    menu.classList.remove('bx-x') ;
    navbar.classList.remove('active') ;
}




    var typed = new Typed('.multiple-text', {
      strings: ['Front-end Developer', 'Back-end Developer', 'Web Designer'],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1200,
      loop: true ,
    });



