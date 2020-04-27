 
jQuery(document).ready(function( $ ){
setTimeout(function(){
        $('.modal-event').addClass('in');
    }, 400);

  $(".modal-header .close").click(function (e) {
    e.preventDefault();
    $(".modal-event").removeClass("in");
    
  });
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
    $("a.fancybox").fancybox()
  
  });

     // ----smooth-scrollint---
     $(document).on('click', 'a[href^="#page-content"] , a[href^="#feature-section"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});
 var $teamwrapper = $('.modelcraft-team-slider').isotope({
  itemSelector: '.modelcraft-team-single',
  layoutMode: 'fitRows',
   filter: '.dance'
});
// filter functions
var filterFns = {
  // show if number is greater than 50

  // show if name ends with -ium

};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $teamwrapper.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});





// Add , Dlelete row dynamically

     $(document).ready(function(){
      var i=1;
     $("#add_row").click(function(){
      $('#addr'+i).html("<td>"+ (i+1) +"</td><td><input name='name"+i+"' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='sur"+i+"' type='text' placeholder='Surname'  class='form-control input-md'></td><td><input  name='email"+i+"' type='text' placeholder='Email'  class='form-control input-md'></td><td><select type='text' name='gender"+i+"' class='form-control'><option name='male"+i+"' value='male'>Male</option><option name='Female"+i+"' value='Female'>Female</option><option name='3rdgen"+i+"' value='none'>None</option></select></td>");

      $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
      i++; 
  });
     $("#delete_row").click(function(){
       if(i>1){
     $("#addr"+(i-1)).html('');
     i--;
     }
   });

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
    $(".testimonial-slider").slick({
    autoplay: true,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:false, 
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
        
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
     
  $(".video-slider").slick({
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  
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