$('.owl-carousel.review').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    dots:false,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>'
    ],
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 800
});
