// js function for the sticy navbar
window.onscroll = function(){ myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// jQuery section
$(".wlc").click(function(){
    var wlc = $(".wlc");  
    wlc.animate({left: '100px'}, "slow");
    wlc.animate({fontSize: '3em'}, "slow");
  });