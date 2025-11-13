$(document).ready(function(){
  // navbar collapse auto close on click (mobile)
  $(".nav-link").on("click", function(){ $(".navbar-collapse").collapse("hide"); });

  // hero CTA animate
  $(".btn-cta").on("mouseenter", function(){ $(this).animate({scale:1.02},100) });
  // simple pulse effect
  setInterval(function(){
    $(".hero-left h1").fadeOut(800).fadeIn(800);
  }, 10000);
});
