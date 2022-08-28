gsap.to('.navbarCp', {y:0, delay:.5});
gsap.to('.centerJumbotron', {y:0, delay:.8});
gsap.to('.littleSosmed', {x:0, delay:1});
gsap.to('.rightJumbotron', {x:0, delay:1});

$('.owl-carousel').owlCarousel({
    items:4,
    loop:false,
    center:false,
    margin:10,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
});


var prev = document.querySelectorAll('.prevs');
var next = document.querySelectorAll('.nexts');
var products = document.querySelectorAll('.products');
var slides = document.querySelectorAll('.slides-cont');
var slideContent = document.querySelector('.bungkus');

$(window).scroll(function(){
    var height = $(window).scrollTop();
    console.log(height);
    if (height > 100) {
        gsap.to('.buildWeb', {x:0, opacity:1})
        gsap.to('.uxui', {x:0, opacity:1})
    }
    if (height > 700) {
        gsap.to(".products", {
            x: 0,
            stagger: .4
          });
          gsap.to('.ourworksText', {opacity:1, y:0, delay:1.5})
          gsap.to('.buttons', {opacity:1, y:0, delay:1.5})
    }
    if (height > 1435) {
        gsap.to(".cardcp", {
            x: 0,
            stagger: .4
          });
          gsap.to('.gstext', {opacity:1, y:0, delay:1.5})
    }
    if (height > 1730) {
        gsap.to(".footerslide", {
            x: 0,
            stagger: .4
          });
        //   gsap.to('.gstext', {opacity:1, y:0, delay:1.5})
    }
})
    

var prevValue = [1];
slides.forEach((item, i) => {
    var slideWidth = 320;
    var slidePrevWidths;
    var slideNextWidths;
    var defaultWidth = 0;
    var defaultClass = 2;
    prev[i].addEventListener('click', function(){
        // defaultWidth > -640 ? slidePrevWidths = defaultWidth - slideWidth : slidePrevWidths = -640;
        if (defaultWidth > -640) {
            slidePrevWidths = defaultWidth - slideWidth;
            $('.products').removeClass('zoom')
            defaultClass += 1;
        } else {
            slidePrevWidths = -640;
        }
        defaultWidth = slidePrevWidths;
        var product = document.querySelector('.s-'+defaultClass);
        product.classList.add('zoom');
        slideContent.style.transform = "translateX("+ slidePrevWidths +"px)";
    });
    next[0].addEventListener('click', function(){
        // defaultWidth < 320 ? slideNextWidths = defaultWidth + slideWidth : slideNextWidths = 320;
        if (defaultWidth < 320) {
            slideNextWidths = defaultWidth + slideWidth;
            $('.products').removeClass('zoom')
        defaultClass -= 1;

        } else {
            slideNextWidths = 320;
        }
        defaultWidth = slideNextWidths;
        var product = document.querySelector('.s-'+defaultClass);
        product.classList.add('zoom');
        slideContent.style.transform = "translateX("+ slideNextWidths +"px)";
    })


})
