$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      $("#navbar-list").toggleClass("mobile-navbar");
    });
  });
  

 