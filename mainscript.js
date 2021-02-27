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

var hams = document.getElementsByClassName('ham');
window.onscroll = function () {     
    if (document.body.scrollTop >= 200 ) {   
      hams.classList.add("fixed");
        hams.classList.remove("relative");       
    } 
    else {
      hams.classList.add("relative");
        hams.classList.remove("fixed");
    }
};


var close = document.getElementsByClassName('showClose');
window.onscroll = function () {     
    if (document.body.scrollTop >= 200 ) {   
      close.classList.add("fixed");
        close.classList.remove("relative");       
    } 
    else {
      close.classList.add("realtive");
        close.classList.remove("fixed");
    }
};
