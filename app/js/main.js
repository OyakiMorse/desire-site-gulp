$(function() {
    $('.contact-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
              }
            },
            {
              breakpoint: 1510,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
            {
              breakpoint: 840,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false,
              }
            },
            {
              breakpoint: 376,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            },
            
          ]
    });

    $('.header__btn').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu--close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close');
    })

    $('.header__btn-menu').on('click', function() {
        $('.menu').toggleClass('menu--open')
    })

    if($(window).width() <= 650){
        $('.works-path__item--measure').appendTo($('.works-path__items-box'))
    }
    
});

const mixer = mixitup('.gallery__inner', {
    load: {
        filter: '.bedroom'
    },
    animation: {
        easing: 'ease-in-out'

    }
});


