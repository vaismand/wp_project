$(document).ready(function(){$(".main_events_list").slick({dots:!1,infinite:!0,speed:700,slidesToShow:1,slidesToScroll:1,prevArrow:'<div class="slick-prev"><img src="../icons/left.png"></div>',nextArrow:'<div class="slick-next"><img src="../icons/right.png"></div>',responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:2}}]})}),$(document).ready(function(){$(".reviews_slider").slick({dots:!1,infinite:!0,speed:700,slidesToShow:2,slidesToScroll:2,prevArrow:'<div class="slick-prev"><img src="../icons/left2.png"></div>',nextArrow:'<div class="slick-next"><img src="../icons/right2.png"></div>',responsive:[{breakpoint:1024,settings:{arrows:!1,dots:!0,slidesToShow:1,slidesToScroll:1}}]})}),$(document).ready(function(){$(".clients_slide").slick({dots:!1,arrows:!0,infinite:!0,speed:700,slidesToShow:4,slidesToScroll:4,prevArrow:'<div class="slick-prev"><img src="../icons/left2.png"></div>',nextArrow:'<div class="slick-next"><img src="../icons/right2.png"></div>',responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,arrows:!1,dots:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})});