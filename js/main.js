$(document).ready(function(){

// Init====================================================
  $(function(){

    $('#brandCarousel').owlCarousel({
      stagePadding: 10,
      loop:true,
      margin:30,
      nav:true,
      navText: ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>","<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
      dots: false,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
    })

    $('header nav.navbar-fixed-top').animate({top: '0px'},1000);
    checkActive();
    if($(window).scrollTop()>0){
      $('.navbar-fixed-top').addClass('shadow');
    }
    if($(window).scrollTop()>=0) {
      doAnimation();
    }

    $("#portfolio .square-box").slice(0, 2).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("#portfolio .square-box:hidden").slice(0, 2).slideDown();
        if ($("#portfolio .square-box:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
  });
// End init====================================================

// Parallax====================================================
  $(function(){
    $window = $(window);
    $('.parallax').each(function() {
      var $scroll = $(this);
      $(window).scroll(function() {
        var yPos = -(($window.scrollTop() - $scroll.position().top) / 6);
        var coords = '50% ' + yPos + 'px';
        $scroll.css({ backgroundPosition: coords });
      });
    });
  });
//End Parallax===================================================

//Smooth Scroll===================================================
  $(".animscroll a[href^='#']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  })
//End smooth scrollTop===================================================

// Contact tabs===================================================
function checkActive () {
  $(".contact-item").each(function() {
    if(!$(this).hasClass("activeLayer")){
      $($(this).data("show")).not('#map-container').hide();
    }
  })
}

$(".contact-item").click(function(){
  if(!$(this).hasClass('activeLayer')) {
    var hide = $('.activeLayer').data('show');
    $(".contact-item").removeClass("activeLayer");
    $(this).addClass("activeLayer");
    $(hide).not("#map-container").fadeOut();
    var activeTab = $(this).data('show');
    $(activeTab).fadeIn();
    return false;
  }
});
//End contact tabs===================================================

// Animation on scroll=====================================
$(window).scroll(function() {
  if($(window).scrollTop()>0) {
    $('.navbar-fixed-top').addClass('shadow');
  }
  else {
    $('.navbar-fixed-top').removeClass('shadow');
  }
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    $('#mainFooter').addClass('index');
  }
  else {
    $('#mainFooter').removeClass('index');
  }
  doAnimation();
});


function doAnimation() {
  $(".animated").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    var animation = $(this).data('animation');
      if (pos < winTop + 500) {
        $(this).addClass('visible '+animation);
      }
  });
}
// End animation on scroll=====================================

//Modal
$('.open-modal').click(function(e){
  if(this.hash){
    e.preventDefault();
    var hash = this.hash;
  }
  else {
    var hash = $(this).data('open');
  }
  $('.modal-container:visible').hide();
  $('body').addClass('body-overflow');
  $(hash).fadeIn(300);
  $('.modal-container').scrollTop(0);
});

$('.pre, .next').click(function(e){
  if(this.hash){
    e.preventDefault();
    var hash = this.hash;
  }
  else {
    var hash = $(this).data('open');
  }
  $('.modal-container:visible').hide();
  $(hash).show();
  $('.modal-container').scrollTop(0);
});


$('.close').click(function(e){
  closeModal(e);
});

$(document).keyup(function(e) {
    if (e.keyCode == 27) closeModal(e);
});

function closeModal(e){
  if(this.hash){
    e.preventDefault();
  }
  $('.modal-container:visible').fadeOut(300);
  $('body').removeClass('body-overflow');
}
//End Modal

});
