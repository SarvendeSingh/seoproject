
  document.addEventListener("DOMContentLoaded", function () {
    let typeJsText = document.querySelector(".typeJsText");
    let textArray = typeJsText.dataset.typetext.split("");
    let counter = -1;
    
    typeJsText.innerHTML = "";
    
    function typeJs() {
      if (counter < typeJsText.dataset.typetext.length) {
        counter++;
        typeJsText.innerHTML += typeJsText.dataset.typetext.charAt(counter);
        textArray = typeJsText.dataset.typetext.split("");
      } else {
        textArray.pop();
        typeJsText.innerHTML = textArray.join("");
        if (textArray.length == 0) {
          counter = -1;
        }
      }
    }
    
    setInterval(() => {
      typeJs();
    }, 200);
  });


      // Initialize Lenis
      const lenis = new Lenis({
        autoRaf: true,
      });
      
      // Listen for the scroll event and log the event data
      lenis.on('scroll', (e) => {});
      
      $('.counter').counterUp({
              delay: 10, // Speed of counting
              time: 2000 // Total duration
          });
      
          new WOW().init();


  $(document).ready(function () {
    $('.marquee').slick({
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      buttons: false,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4
              }
          },
          {
              breakpoint: 768, 
              settings: {
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 480, 
              settings: {
                  slidesToShow: 2
              }
          }
      ]
  });
  
  
  


$(window).scroll(function() {
  var a = $(".main-header");
  if ($(window).scrollTop() >= 100) {
      a.addClass("fixed");
  } else {
      a.removeClass("fixed");
  }
});



$('.testimonialslider').slick({
dots: false,
infinite: true,
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
autoplay: true,
autoplaySpeed: 5000,
pauseOnHover: false,

});
$('.testiright').click(function(){
  $('.testimonialslider').slick('slickPrev');
});

$('.testileft').click(function(){
  $('.testimonialslider').slick('slickNext');
});




$('.enquirebtn').on('click', () => {
  $('.registerform').toggleClass('slideside');
})

$(".scroll_section").click(function () {
  let scdown = location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname;
 
  if (scdown) {
      var $target = $(this.hash);
      $target = ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
      if ($target.length) {
          //console.log($target)
          var offsetAdjustment = $(window).width() < 768 ? 50 : 83; 
          var targetOffset = $target.offset().top - offsetAdjustment;
          $("html,body").animate({ scrollTop: targetOffset }, 200);
          return false;
      }
  }
});

$(function($) {
  $(window).on('scroll', function() {
  if ($(this).scrollTop() >= 100) {    
    $('.navbar').addClass('fixed-top');
  } else if ($(this).scrollTop() == 0) {
    $('.navbar').removeClass('fixed-top');
  }});
});

if ($(window).width() < 991) {
  $('.nav-link').click(function () {
      $('.navbar-collapse').removeClass('show'); 
      $('.navbar-toggler')
          .addClass('collapsed') 
          .attr('aria-expanded', 'false'); 
  });
}

});



  
