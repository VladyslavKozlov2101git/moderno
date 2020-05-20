$(function(){

    var mixer = mixitup('.products__inner-box');

    $(".rate-star").rateYo({
        rating: 4,
        starWidth: "12px",
        ratedFill: "#ffa726",
        readOnly: true
    });

    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
    });
    
});