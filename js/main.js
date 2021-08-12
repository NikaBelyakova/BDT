$(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        dots:false,
        navText: ['<img src="images/arrow-left.svg">', '<img src="images/arrow-right.svg">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1,
            },
            1000:{
                items:1
            }
        }
    });
});

$(function() {
    $('nav a').each(function() {
      $(this).on('click', function(e) {
        e.preventDefault()
        var scrollTo = $(this).attr('href')
        var whitespace = scrollTo == '#h1-about' ? 120 : 80
        $('html,body').animate({
          scrollTop: $(scrollTo).offset().top - whitespace
        }, 1000)
      })
    })
  })
  


$('.nonloop').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    dots: false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
});

$(document).ready(function() {
    $('.header-burger').click(function(event){
        $('.header-burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});