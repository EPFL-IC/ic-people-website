//Script for the publications-more block
var pub1 = document.getElementById('pub-1');
var pub1Btn = document.getElementById('nav-pub-btn-1');
var pub2 = document.getElementById('pub-2');
var pub2Btn = document.getElementById('nav-pub-btn-2');
var pub3 = document.getElementById('pub-3');
var pub3Btn = document.getElementById('nav-pub-btn-3');
var pub4 = document.getElementById('pub-4');
var pub4Btn = document.getElementById('nav-pub-btn-4');
var pub5 = document.getElementById('pub-5');
var pub5Btn = document.getElementById('nav-pub-btn-5');
function navDiv1() {
  pub1.style.visibility = "visible";
  pub1Btn.style.background = "#ff0000";
  pub1Btn.style.color = "#fff";
  pub2.style.visibility = "hidden";
  pub2Btn.style.background = "none";
  pub2Btn.style.color = "#000";
  pub3.style.visibility = "hidden";
  pub3Btn.style.background = "none";
  pub3Btn.style.color = "#000";
  pub4.style.visibility = "hidden";
  pub4Btn.style.background = "none";
  pub4Btn.style.color = "#000";
  pub5.style.visibility = "hidden";
  pub5Btn.style.background = "none";
  pub5Btn.style.color = "#000";
}
function navDiv2() {
  pub1.style.visibility = "hidden";
  pub1Btn.style.background = "none";
  pub1Btn.style.color = "#000";
  pub2.style.visibility = "visible";
  pub2Btn.style.background = "#ff0000";
  pub2Btn.style.color = "#fff";
  pub3.style.visibility = "hidden";
  pub3Btn.style.background = "none";
  pub3Btn.style.color = "#000";
  pub4.style.visibility = "hidden";
  pub4Btn.style.background = "none";
  pub4Btn.style.color = "#000";
  pub5.style.visibility = "hidden";
  pub5Btn.style.background = "none";
  pub5Btn.style.color = "#000";
}
function navDiv3() {
  pub1.style.visibility = "hidden";
  pub1Btn.style.background = "none";
  pub1Btn.style.color = "#000";
  pub2.style.visibility = "hidden";
  pub2Btn.style.background = "none";
  pub2Btn.style.color = "#000";
  pub3.style.visibility = "visible";
  pub3Btn.style.background = "#ff0000";
  pub3Btn.style.color = "#fff";
  pub4.style.visibility = "hidden";
  pub4Btn.style.background = "none";
  pub4Btn.style.color = "#000";
  pub5.style.visibility = "hidden";
  pub5Btn.style.background = "none";
  pub5Btn.style.color = "#000";
}
function navDiv4() {
  pub1.style.visibility = "hidden";
  pub1Btn.style.background = "none";
  pub1Btn.style.color = "#000";
  pub2.style.visibility = "hidden";
  pub2Btn.style.background = "none";
  pub2Btn.style.color = "#000";
  pub3.style.visibility = "hidden";
  pub3Btn.style.background = "none";
  pub3Btn.style.color = "#000";
  pub4.style.visibility = "visible";
  pub4Btn.style.background = "#ff0000";
  pub4Btn.style.color = "#fff";
  pub5.style.visibility = "hidden";
  pub5Btn.style.background = "none";
  pub5Btn.style.color = "#000";
}
function navDiv5() {
  pub1.style.visibility = "hidden";
  pub1Btn.style.background = "none";
  pub1Btn.style.color = "#000";
  pub2.style.visibility = "hidden";
  pub2Btn.style.background = "none";
  pub2Btn.style.color = "#000";
  pub3.style.visibility = "hidden";
  pub3Btn.style.background = "none";
  pub3Btn.style.color = "#000";
  pub4.style.visibility = "hidden";
  pub4Btn.style.background = "none";
  pub4Btn.style.color = "#000";
  pub5.style.visibility = "visible";
  pub5Btn.style.background = "#ff0000";
  pub5Btn.style.color = "#fff";
}   

if(navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)) { }
const header = document.querySelector('.header');
window.onscroll = function() {makeSticky(header)};
function makeSticky(elem) {
  if (window.pageYOffset > elem.offsetTop) {
    elem.classList.add('sticky');
  } else {
    elem.classList.remove('sticky');
  }
  }
  /*
var heightElem1 = document.querySelector('.about').offsetHeight;
var childsElem1 = document.getElementsByClassName('row')[0].children;
childsElem1.style.height = heightElem1 + "px";
var nodes = document.getElementsByTagName('row').getElementsByTagName("div");
for(var i=0; i<nodes.length; i++) {
    nodes[i].style.background = color;
    console.log(i);
}
var nodes1 = document.querySelector('.row')[0].childNodes;
for(var i=0; i<nodes1.length; i++) {
    if (nodes1[i].nodeName.toLowerCase() == 'div') {
         nodes1[i].style.height = heightElem1 + "px";
     }
} */

//Script for the projects block
var pro1 = document.getElementById('pro-1');
var pro1Btn = document.getElementById('nav-pro-btn-1');
var pro2 = document.getElementById('pro-2');
var pro2Btn = document.getElementById('nav-pro-btn-2');
var pro3 = document.getElementById('pro-3');
var pro3Btn = document.getElementById('nav-pro-btn-3');
var pro4 = document.getElementById('pro-4');
var pro4Btn = document.getElementById('nav-pro-btn-4');
var pro5 = document.getElementById('pro-5');
var pro5Btn = document.getElementById('nav-pro-btn-5');
function navPro1() {
  pro1.style.visibility = "visible";
  pro1Btn.style.background = "#ff0000";
  pro1Btn.style.color = "#fff";
  pro2.style.visibility = "hidden";
  pro2Btn.style.background = "none";
  pro2Btn.style.color = "#000";
  pro3.style.visibility = "hidden";
  pro3Btn.style.background = "none";
  pro3Btn.style.color = "#000";
  pro4.style.visibility = "hidden";
  pro4Btn.style.background = "none";
  pro4Btn.style.color = "#000";
  pro5.style.visibility = "hidden";
  pro5Btn.style.background = "none";
  pro5Btn.style.color = "#000";
}
function navPro2() {
  pro1.style.visibility = "hidden";
  pro1Btn.style.background = "none";
  pro1Btn.style.color = "#000";
  pro2.style.visibility = "visible";
  pro2Btn.style.background = "#ff0000";
  pro2Btn.style.color = "#fff";
  pro3.style.visibility = "hidden";
  pro3Btn.style.background = "none";
  pro3Btn.style.color = "#000";
  pro4.style.visibility = "hidden";
  pro4Btn.style.background = "none";
  pro4Btn.style.color = "#000";
  pro5.style.visibility = "hidden";
  pro5Btn.style.background = "none";
  pro5Btn.style.color = "#000";
}
function navPro3() {
  pro1.style.visibility = "hidden";
  pro1Btn.style.background = "none";
  pro1Btn.style.color = "#000";
  pro2.style.visibility = "hidden";
  pro2Btn.style.background = "none";
  pro2Btn.style.color = "#000";
  pro3.style.visibility = "visible";
  pro3Btn.style.background = "#ff0000";
  pro3Btn.style.color = "#fff";
  pro4.style.visibility = "hidden";
  pro4Btn.style.background = "none";
  pro4Btn.style.color = "#000";
  pro5.style.visibility = "hidden";
  pro5Btn.style.background = "none";
  pro5Btn.style.color = "#000";
}
function navPro4() {
  pro1.style.visibility = "hidden";
  pro1Btn.style.background = "none";
  pro1Btn.style.color = "#000";
  pro2.style.visibility = "hidden";
  pro2Btn.style.background = "none";
  pro2Btn.style.color = "#000";
  pro3.style.visibility = "hidden";
  pro3Btn.style.background = "none";
  pro3Btn.style.color = "#000";
  pro4.style.visibility = "visible";
  pro4Btn.style.background = "#ff0000";
  pro4Btn.style.color = "#fff";
  pro5.style.visibility = "hidden";
  pro5Btn.style.background = "none";
  pro5Btn.style.color = "#000";
}
function navPro5() {
  pro1.style.visibility = "hidden";
  pro1Btn.style.background = "none";
  pro1Btn.style.color = "#000";
  pro2.style.visibility = "hidden";
  pro2Btn.style.background = "none";
  pro2Btn.style.color = "#000";
  pro3.style.visibility = "hidden";
  pro3Btn.style.background = "none";
  pro3Btn.style.color = "#000";
  pro4.style.visibility = "hidden";
  pro4Btn.style.background = "none";
  pro4Btn.style.color = "#000";
  pro5.style.visibility = "visible";
  pro5Btn.style.background = "#ff0000";
  pro5Btn.style.color = "#fff";
}   
