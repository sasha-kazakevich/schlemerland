window.onload = function(){

  var mainNavigation = document.getElementById('main-navigation'),
      buttonBurg = document.getElementById('button-burg');

      function toggleMenu(){
        console.log("Ky!");
        mainNavigation.classList.toggle('main-navigation--closed');
        mainNavigation.classList.toggle('main-navigation--opened');

      }

      buttonBurg.addEventListener('click',toggleMenu,false);
};

function animation(){
  $('.animated').removeClass('slideInRight');
  $('.animated').addClass('slideOutLeft');
}

function main(ctx, next) {
  $('#pagepiling').pagepiling(
    {
      loopTop: true,
      loopBottom: true,
      navigation: false
    }
  );
}

function menu(ctx, next) {
  console.log("Menu Page");
}

function about(ctx, next) {
  console.log("about Page");

  $('#pagepiling').pagepiling(
    {
      loopTop: true,
      loopBottom: true,
      navigation: false
    }
  );
  $('#feedback-button').click(function(){
    $('#feedback-form').css('right','0');
  })

  $('#questions-button').click(function(){
    $('#questions-form').css('right','0');
  })

  $('#feedback-title').click(function(){
    $('#feedback-form').css('right','-380px');
  })

  $('#questions-title').click(function(){
    $('#questions-form').css('right','-380px');
  })

  $('#da-slider').cslider({
    autoplay: true,
    bgincrement: 450
  });
}
function exitPage(cts, next) {
  animation();
  setTimeout(next,400);
}

function clients(ctx, next) {
  console.log("client Page");
  // $('#clients').customScroll();
}

function contacts(ctx, next) {
  console.log("contact Page");
}
