 
jQuery(document).ready(function( $ ){


    new WOW().init();

 //hide and show search
  $("#togglesearchbar").click(function (e) {
    e.preventDefault();
    $("#top-search").slideToggle("400");
    $("i.fa.fa-search").toggleClass("fa-close");
  }); 
 
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            $("i.fa.fa-search").removeClass("fa-close");
            $("#top-search").hide("400");
        }
    });

    $(document).click(function (e) {
      var container = $("#masthead");
       if (!container.is(e.target) && container.has(e.target).length === 0) {
            $("i.fa.fa-search").removeClass("fa-close");
            $("#top-search").hide("400");
        }
    });
    // -----scroller---
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".menu-header").css("height","70px");
        $(".menu-header").css("background-color","#fff");
         $(".menu-header").css("box-shadow","0 2px 6px 0 rgba(0,0,0,.12), inset 0 -1px 0 0 #dadce0");
    } else {
      $(".menu-header ").css("height","130px");
      $(".menu-header").css("background-color","#ffffff6e");
      $(".menu-header").css("box-shadow","none");

    }

});
  $(document).ready(function() {
    $("a.fancybox").fancybox()
  });

     // ----smooth-scrollint---
     $(document).on('click', 'a[href^="#page-content"] , a[href^="#feature-section"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

 
  $(".model-craft-slider").slick({
    autoplay: true,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true, 
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
   
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical:false


      }
    },
    {
      breakpoint: 480,
      settings: {
        autoplay:false,
        vertical:false,
        centerMode: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  });