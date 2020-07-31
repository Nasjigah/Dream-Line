(function ($) {
    'use strict';
   
    
            // add smooth scrolling

          $('body a').on('click', function(e) {
          //check for a hash value
          if(this.hash !== '') {
              //Prevent default behavior
              e.preventDefault();
              
              // Store hash
             const hash= this.hash;
              
              // Animate Smooth Scroll
              
              $('html, body').animate({
                  scrollTop: $(hash).offset().top
              },900, function() {
                  // Add hash to URL after scroll
                  window.location.hash= hash;
              });
              
              
          }
      });
    
    
             // mobile nav
    
        $(document).on('click', '.mobile-nav-toggle', function() {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle .toggler-icon').toggleClass('fa-bars fa-times');
        });
    
        // MOBILE NAV COLLAPSE
        $(document).click(function(e) {
            var container = $(".mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
              if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-toggle .toggler-icon').toggleClass('fa-bars fa-times');
              }
            }
          });
    
               
    
    // Navigation active state on scroll
          var nav_sections = $('section');
          var main_nav = $('#side-nav, #mobile-nav');

          $(window).on('scroll', function() {
            var cur_pos = $(this).scrollTop() + 300;

            nav_sections.each(function() {
              var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

              if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                  main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
              }
              if (cur_pos < 200) {
                $("#side ul:first li:first").addClass('active');
              }
            });
          });
    
    
    
    
            // OWL CAROUSEL
                $('.owl-carousel').owlCarousel({
                loop:true,
                autoplay: true,
                margin:20,
                arrows: false,
                dots:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:3
                    }
                }
            });
        
    
            // EKKO LIGHTBOX

              $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                  event.preventDefault();
                  $(this).ekkoLightbox();
                });
    
    
            // Story toggle

           $('.story-item').click(function() {
                $('.collapse').collapse('hide'); 
           });
    
    
    
    
            // Back to top button

            
             $('.back-to-top').on('click', function() {
                $('html, body').animate({
                  scrollTop: 0
                }, 1500);
                return false;
              });
    
    
    
})(jQuery);





 