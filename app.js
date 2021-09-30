$(function(){
    var header = $("#header"),
        introH = $("#intro").innerHeight();
        scrollOffset = $(window);
    checkScroll(scrollOffset, introH);


    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset, introH);
    });
    function checkScroll(){
        scrollOffset = $(this).scrollTop();
            if(scrollOffset >= introH){
            header.addClass("fixed");
            } else{header.removeClass("fixed");
        }
    }

// smooth scrool
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;

            $("#nav a").removeClass("active");
            $("#nav").removeClass("active")
            $("#nav__toggle").removeClass("active")
            $this.addClass("active");


        $("html, body").animate({
            scrollTop: blockOffset - 32
        }, 500);

    });

    $("#nav__toggle").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("active")
        $("#nav").toggleClass("active");

    })

    // collaps
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();
        var $this = $(this),
            blockId = $this.data('collapse');
        $(this).toggleClass("active");
    });
});
$('[data-slider]').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });