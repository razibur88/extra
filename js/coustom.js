$(function(){

    // loading start

    $(window).on("load",function(){
        $(".loading").delay(1000).fadeOut(500);
    })

    new WOW().init();
    
    // banner start
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 50){
            $(".menu").addClass("bg")
        }else{
            $(".menu").removeClass("bg")
        }
        if(scrolling > 50){
            $(".back2top i").fadeIn(1000)
        }else{
            $(".back2top i").fadeOut(1000)
        }
    })

     // back1top start

     $(".back2top i").click(function(){
        $('html,body').animate({
            scrollTop:0,
        })
    })






    $('.banner_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        prevArrow:".next",
        nextArrow:".prve",
        autoplay: true,
    });
    
    $(".nav-icon .oneee").click(function(){
        $(".inputtt").toggleClass("addmnav")
    })
    // banner end


    // explore start

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1200,
    delay: 400
});


ScrollReveal().reveal('.ser_text');
ScrollReveal().reveal('.tagline', { delay: 600, origin:'left' });
ScrollReveal().reveal('.punchline', { delay: 600, origin:'bottom' });


ScrollReveal().reveal('.ser-item1', { delay: 600, origin:'left' });
ScrollReveal().reveal('.ser-item3', { delay: 600, origin:'bottom' });
ScrollReveal().reveal('.ser-item2', { delay: 600, origin:'right' });


ScrollReveal().reveal('.item2', { delay: 600, origin:'bottom' });
ScrollReveal().reveal('.item3', { delay: 600, origin:'left' });
ScrollReveal().reveal('.item1', { delay: 600, origin:'top' });
ScrollReveal().reveal('.item4', { delay: 600, origin:'right' });

ScrollReveal().reveal('.tower-text', { delay: 600, origin:'top' });
ScrollReveal().reveal('.tower-button1', { delay: 900, origin:'left' });
ScrollReveal().reveal('.tower-button2', { delay: 600, origin:'bottom' });
ScrollReveal().reveal('.tower-button3', { delay: 600, origin:'right' });

ScrollReveal().reveal('.more-about-main1', { delay: 600, origin:'left' });
ScrollReveal().reveal('.more-about-main2', { delay: 600, origin:'right' });

ScrollReveal().reveal('.career-head', { delay: 600, origin:'top' });
ScrollReveal().reveal('.career-img', { delay: 600, origin:'bottom' });

ScrollReveal().reveal('.memory-item1', { delay: 600, origin:'left' });
ScrollReveal().reveal('.memory-item2', { delay: 600, origin:'bottom' });
ScrollReveal().reveal('.memory-item3', { delay: 600, origin:'top' });
ScrollReveal().reveal('.memory-item4', { delay: 600, origin:'right' });

ScrollReveal().reveal('.business-text', { delay: 600, origin:'right' });
ScrollReveal().reveal('.business-img', { delay: 600, origin:'left' })

ScrollReveal().reveal('.icon-inner1', { delay: 600, origin:'right' });
ScrollReveal().reveal('.icon-inner2', { delay: 600, origin:'top' })
ScrollReveal().reveal('.icon-inner3', { delay: 600, origin:'left' })

// explore end

    // brand-slider start
$(".brand-slider").slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
            }
        }
    ]
});

    
})
// brand-slider end


// testimonial part slider
$(".img-slider").slick({
    slidesToShow: 3,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    asNavFor: ".details-slider",
    focusOnSelect: true,
    prevArrow: '<i class="fas fa-angle-up prev"></i>',
    nextArrow: '<i class="fas fa-angle-down next"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })
  
  $(".details-slider").slick({
    arrows: false,
    asNavFor: ".img-slider",
    fade: true,
    focusOnSelect: true,
  })


// video part start

  $(".brand-slider1").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
     vertical: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
            }
        }
    ]
});

    
