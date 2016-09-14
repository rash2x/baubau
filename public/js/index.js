$(function(){
    var parallax = (function(){
        $('.about-cover').parallax({
            imageSrc: 'public/images/about-cover.jpg',
            speed: 0.2
        });
    }());

    var royalSlider = (function(){
        var gallery = $("#product-gallery");
        var thumbnails = gallery.find(".product-gallery-thumbnails");

        var slider = $(".royalSlider").royalSlider({
            // options go here
            // as an example, enable keyboard arrows nav
            keyboardNavEnabled: true,
            imageScaleMode: 'fill',
            autoHeight: true,
            autoPlay: {
                enabled: true,
                pauseOnHover: true
            }
        }).data('royalSlider');

        thumbnails.on('click', 'li', function(){
            var thumb = $(this);
            var data = thumb.data();

            slider.goTo(data.slideTo - 1);

            thumbnails.find("li").removeClass('active').eq(data.slideTo - 1).addClass('active');
        });

        slider.ev.on('rsAfterSlideChange', function(event, s, d) {
            thumbnails.find("li").removeClass('active').eq(event.target.currSlideId).addClass('active');
        });
    }());

    $(".promo-continue").on('click', function(){
        var h =  $(window).height();
        $("body").animate({scrollTop:h}, 1200, 'easeOutQuart');
    });
});