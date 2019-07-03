//---- Navbar resizing ----//
// $(function() {
//   $(document).scroll(function() {
//     var $nav = $("#mainNavbar");
//     $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//   });
// });

var $nav = $("#mainNavbar");

//---- Navbar collapse on click ----//
$(document).ready(function() {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse("hide");
  });
});

// ---- Navbar scroll animation logic ----//
$(window).scroll(scrollChange);
function scrollChange() {
  if ($(document).scrollTop() > $nav.height()) {
    $("#mainNavbar").addClass("scrolled");
  } else {
    $("#mainNavbar").removeClass("scrolled");
  }
}

$(document).ready(function() {
  scrollChange();
});
