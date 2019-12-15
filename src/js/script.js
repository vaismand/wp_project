$(document).ready(function(){
    $('.main_events_list').slick({
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 3,
        prevArrow: '<div class="slick-prev"><img src="../icons/left.png"></div>',
        nextArrow: '<div class="slick-next"><img src="../icons/right.png"></div>',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.reviews_slider').slick({
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<div class="slick-prev"><img src="../icons/left2.png"></div>',
        nextArrow: '<div class="slick-next"><img src="../icons/right2.png"></div>',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.clients_slide').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 700,
        slidesToShow: 6,
        slidesToScroll: 2,
        prevArrow: '<div class="slick-prev"><img src="../icons/left2.png"></div>',
        nextArrow: '<div class="slick-next"><img src="../icons/right2.png"></div>',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
});