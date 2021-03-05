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


var myClasses = document.getElementsByClassName("box2");

for (var i = 0; i < myClasses.length; i++) {
  myClasses[i].innerHTML = "<img class="efootlog" src="../efootlogo.png"><p class="europeshead">uroPES Super League</p>";
  }

