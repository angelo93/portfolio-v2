//---- Navbar resizing ----//
$(function() {
  $(document).scroll(function() {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

//---- Navbar collapse on click ----//
$(document).ready(function() {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse("hide");
  });
});
