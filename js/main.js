$(document).ready(function(){
     $("html").niceScroll({
         cursorcolor: "#333333",
         cursorwidth: "10px",                        cursorborder: "1px solid #333333"
     });
     $(".slidebar_menu").niceScroll({
         cursorcolor: "#333333",
         cursorwidth: "3px",
         cursorborder: "1px solid #333333"
     });
    $('#toggle_menu_right').click(function(){
        $('.slidebar_menu').animate({
            right: "+=350px"
        }, {
            queue       : false,
            duration    : 600
        });
        $(this).hide(0);
        $('.inner_menu_title span').show(0);
    });
    $('.inner_menu_title span').click(function(){
        $('.slidebar_menu').animate({
            right: "-=350px"
        }, {
            queue       : false,
            duration    : 600
        });
        $(this).hide(0);
        $('#toggle_menu_right').show(0);
    });
    
    
$("#sticky_menu").sticky({});
/*
  $('li.scroll_toggle a').bind('click', function(event){
  event.preventDefault();
  var anchor = $(this);
  var headerH = '85';
  $('html, body').stop().animate({
    scrollTop : $(anchor.attr('href')).offset().top - headerH + 'px'
  }, 1000, 'easeInQuad');

});
    */

    
 $('.all_portfolio li a').nivoLightbox({
    effect: 'fade',                             // The effect to use when showing the lightbox
    theme: 'default',                             // The lightbox theme to use
    keyboardNav: true,                             // Enable/Disable keyboard navigation (left/right/escape)
    clickOverlayToClose: true,                    // If false clicking the "close" button will be the only way to close the lightbox
    onInit: function(){},                         // Callback when lightbox has loaded
    beforeShowLightbox: function(){},             // Callback before the lightbox is shown
    afterShowLightbox: function(lightbox){},     // Callback after the lightbox is shown
    beforeHideLightbox: function(){},             // Callback before the lightbox is hidden
    afterHideLightbox: function(){},             // Callback after the lightbox is hidden
    onPrev: function(element){},                 // Callback when the lightbox gallery goes to previous item
    onNext: function(element){},                 // Callback when the lightbox gallery goes to next item
    errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
});
    
});

$(function () {
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});
