// js function for the sticy navbar
window.onscroll = function () {
  myFunction()
};

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
$(".wlc").click(function () {
  var wlc = $(".wlc");
  wlc.animate({
    left: '100px'
  }, "slow");
  wlc.animate({
    fontSize: '3em'
  }, "slow");
});

//   codes for the slide show
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// .box-underline 
var mainBox = document.querySelector('.main-box');
var boxC = document.querySelector('.box-c');
var boxD = document.querySelector('.box-b');


// txt-box
let txtBox = document.querySelector('txt-box');
txtBox.addEventListener('mouseover', cleanBorder);
// Adding an eventlinster to the boxD variable
boxD.addEventListener('click', ChangeboxD);


// Functions
function cleanBorder(){
// txtBox.cleanBorder.remove('main-box-c');
alert(2);
};

function ChangeboxD() {
  var mainBox = document.querySelector('.main-box');
  mainBox.classList('main-box-c');
}

mainBox.addEventListener('mouseover', mainBoFunction);



function mainBoFunction(){
  mainBox.classList.add('main-box-c');
}


boxC.addEventListener('click', doSomeThing);

function doSomeThing() {
  document.querySelector('.box-underline').style.display = "block";
}


function changeText(id) {
  id.innerHTML = 'This is a new through the function';
}

// supper-str
document.getElementById('supper-str').addEventListener('click', fireFunction);
// console.log(fireFunction());


//fireFunction
function fireFunction() {
  document.getElementById('supper-str').className = 'newStyle';
}



const number = 20;
var outPut;

outPut = number;
outPut = Math;
outPut = Math.PI;

console.log(outPut);
// alert(outPut);


let today = new Date();
console.log(typeof today);



// Some codes for testing
const product1 = 'Pizza';
const price1 = 30;
const product2 = 'Hamburger';
const price2 = 40;

// Old Method
let html;

// html  = '<ul>'+
//         '<li>Item: ' + product1 + '</li>' +
//         '<li>Price: $ ' + price1 + '</li>' +
//         '<li>Item: ' + product2 + '</li>' +
//         '<li>Price: $ ' + price2 + '</li>' +
//         '<li>Total: $' + (price1 + price2) + '</li>';
//         '</ul>';

// Template Strings

html = `
    <ul>
        <li>Item: ${product1}</li>
        <li>Price: ${price1}</li>
        <li>Item: ${product2}</li>
        <li>Price: ${price2}  </li>
        <li>Total: ${total(price1, price2)}</li>
    </ul>
`;

function total(param1, param2) {
    return param1 + param2;
}

// HTML to inject the code

let app = document.querySelector('#app');
app.innerHTML = html ;