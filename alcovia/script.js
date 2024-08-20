$(document).ready(function(){
    // $(window).on('scroll',function(){
    //     var scroll = $(window).scrollTop(); 
    //     // console.log(scroll);
    //     // if (scroll === 450 || scroll === 946) {
    //     //   updateCounters();
    //     // }
    // })


    // Loading animation 
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 2,
      }
    );


    // offcanvas width
    document.getElementById("offcanvasNavbar").style.width = "350px";
    
    
    // Counter for Who we are
    const counters = document.querySelectorAll('.count');
    const speed = 200;
  
    const updateCounters = () => {
        counters.forEach((counter) => {
            const updateCount = () => {
                const target = parseInt(counter.getAttribute('data-target'));
                const count = parseInt(counter.innerText);
                const increment = Math.trunc(target / speed);

                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };
    updateCounters();

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
