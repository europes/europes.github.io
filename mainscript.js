var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".ham")

ham.addEventListener("click", toggleHamburger)

function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)

var menu = document.getElementById('menu');
window.onscroll = function () {     
    if (document.body.scrollTop >= 200 ) {   
      menu.classList.add("nav-transparent");
        menu.classList.remove("nav-colored");       
    } 
    else {
      menu.classList.add("nav-colored");
        menu.classList.remove("nav-transparent");
    }
};

var list = document.getElementById('list');
window.onscroll = function () {     
    if (document.body.scrollTop >= 200 ) {   
      menu.classList.add("darktxt");
        menu.classList.remove("lighttxt");       
    } 
    else {
      menu.classList.add("lighttxt");
        menu.classList.remove("darktxt");
    }
};
