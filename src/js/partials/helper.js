$(document).ready(function() {
  $("html").niceScroll();
});


window.onload = function(){

  var mainNavigation = document.getElementById('main-navigation'),
      mainMenu = document.getElementById('main-nav'),
      buttonBurg = document.getElementById('button-burg');

      function toggleMenu(){
        console.log("Ky!");
        mainNavigation.classList.toggle('main-navigation--closed');
        mainNavigation.classList.toggle('main-navigation--opened');

      }

      buttonBurg.addEventListener('click',toggleMenu,false);
};

function main(ctx, next) {
  $('#pagepiling').pagepiling(
    {
      loopTop: true,
      loopBottom: true,
      navigation: false
    }
  );
  console.log('main Page');
}

function menu(ctx, next) {
  console.log("Menu Page");
}

function about(ctx, next) {
  console.log("about Page");
}

function clients(ctx, next) {
  console.log("client Page");

}

function contacts(ctx, next) {
  console.log("contact Page");
}

$(document).ready(function() {
    $(".content").niceScroll({
      cursorcolor: "#cc3333",
      cursorborder: "1px solid #cc3333",
      cursorwidth: "4px",
    });
});
