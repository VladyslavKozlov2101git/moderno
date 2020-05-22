$(function(){
    $('.icon-th-list').on('click', function(){
        $('.product-page__items>.products__item').addClass('list'),
        $('.icon-th-list').addClass('active'),
        $('.icon-th-large').removeClass('active')

    });
    $('.icon-th-large').on('click', function(){
        $('.product-page__items>.products__item').removeClass('list'),
        $('.icon-th-large').addClass('active'),
        $('.icon-th-list').removeClass('active')
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        prefix: "$",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        grid: false
    });



    $(".rate-star").rateYo({
        rating: 4,
        starWidth: "12px",
        ratedFill: "#ffa726",
        readOnly: true
    });

    var mixer = mixitup('.products__inner-box');

    

    

    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
    });

    
    
    
    
});