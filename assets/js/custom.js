window.addEventListener('scroll', function(){
  var navbar = document.querySelector('header');
  navbar.classList.toggle('sticky', window.scrollY > 200);
});


// ======================== Navigation Responsive 

function toggleMenu() {
  var menu = document.querySelector("#toggleMenu");
  var menuIcon = document.querySelector(".nav-icon");
  menu.classList.toggle("active");
  menuIcon.classList.toggle("active");
}


// ===================== Dropdown Menu
function drop() {
  var drop = document.querySelector(".dropdown-menu");
  drop.classList.toggle("active");
}
function drop2() {
  var drop2 = document.querySelector("#drop2");
  drop2.classList.toggle("active2");
}


// ========================== SEARCH BOX 
var searchBox = document.querySelector(".search-box");
function search() {
  searchBox.classList.add("active");
}
function remove() {
  searchBox.classList.remove("active");
}

//================================= Scroll to top
window.addEventListener('scroll', function(){
  var scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle('active', window.scrollY > 500);
})

function scrollToTop() {
  window.scrollTo({
      top : 0,
      behavior : 'smooth'
  });
};

// =================================== Carousel
$(document).ready(function() {
  $('#owl-carousel').owlCarousel({
    items :1,
    autoPlay:true,
    loop:true,
    dots:true,
    responsive: true,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false, 
    navigation : true,
    navigationText : ['&larr;', '&rarr;'],
    rewindNav : true,
});
})
$(document).ready(function() {
  $('#logo-carousel').owlCarousel({
    items :6,
    autoPlay:true,
    loop:true,
    dots:true,
    responsive: true,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [980,5],
    itemsTablet: [768,3],
    itemsTabletSmall: false,
    itemsMobile : [479,2],
    singleItem : false, 
    navigation : true,
    navigationText : ['&larr;', '&rarr;'],
    rewindNav : true,
});
})

//====================== PRELOADER 
// window.onload = function(){ 
//   document.querySelector("#preLoader").style.display = "none"; 
// }


var myVar;
function myLoader() {
  myVar = setTimeout(showPage, 2000);
}
function showPage() {
  document.getElementById("preLoader").style.display = "none";
  document.querySelector("section").style.display = "block";
}

// ========================== Progress bar
window.addEventListener('load', ()=> {
  var progressBars = document.querySelectorAll(".single-progress");
  var values = [
    '60%',
    '80%',
    '90%',
    '65%'
  ];
  progressBars.forEach((progress, index) => {
    progress.style.width = values[index];
  })
});

// ====================== COUNT AREA 

// ========================= Count Area 
const counters = document.querySelectorAll('.counter');
const speed = 50;

counters.forEach(counter => {
    const updateCount = () => {
        const target = + counter.getAttribute('data-target');
        const count = + counter.innerText;

        const inc = target / speed;
        if(count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    }
    updateCount();
});

//===================== wow
new WOW().init();