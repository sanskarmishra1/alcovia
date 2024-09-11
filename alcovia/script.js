$(document).ready(function(){
    // $(window).on('scroll',function(){
    //     var scroll = $(window).scrollTop(); 
    //     // console.log(scroll);
    //     // if (scroll === 450 || scroll === 946) {
    //     //   updateCounters();
    //     // }
    // })
    
    // Loading animation 
    window.addEventListener('load', (event) => {
      // Start fading out the loading page and restore the scrollbar during the fade
      gsap.fromTo(
        ".loading-page",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 3,
          delay: 2,
          onStart: () => {
            // Restore the scrollbar as soon as the fade-out starts
            document.body.style.overflow = "auto";
          },
          onComplete: () => {
            document.querySelector('.loading-page').style.display = "none";
          }
        }
      );
    });
  


    // offcanvas width
    document.getElementById("offcanvasNavbar").style.width = "350px";
    
  // 
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      } 
      // else{
      //   entry.target.classList.remove('show');
      // }
    });
  })
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el)=> observer.observe(el)); 
    
  // new observer for steps
  const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('in');
      } 
      // else{
      //   entry.target.classList.remove('show');
      // }
    });
  })
  const hiddenElements2 = document.querySelectorAll('.out');
  hiddenElements2.forEach((el)=> observer2.observe(el)); 
    

    // new observer for caption
    const observer3 = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
          entry.target.classList.add('unsam');
        } 
        else{
          entry.target.classList.remove('unsam');
        }
      });
    })
    const hiddenElements3 = document.querySelectorAll('.sam');
    hiddenElements3.forEach((el)=> observer3.observe(el)); 
      
    // mouse-hover for button
    const $button = $('.submit');
    $button.on('mouseover', function() {
        $(this).css('background-color', 'green');
    });
    $button.on('mouseout', function() {
        $(this).css('background-color', '');
    });



    
    // for testimonial carousel
const multipleItemCarousel = document.querySelector("#testimonialCarousel");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false,
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}


// copying the school colaboration items
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

})
