$(document).ready(function () {
    var slickOpts = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
  		slidesToScroll: 1,
        speed: 500,
        autoplay: true
    };    
    	$('.carousel').slick(slickOpts);
});
