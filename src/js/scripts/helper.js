window.onload = function(){

  var mainNavigation = document.getElementById('main-navigation'),
      buttonBurg = document.getElementById('button-burg'),
      menu = document.getElementById('menu')

      function toggleMenu(){
        console.log("Ky!");
        mainNavigation.classList.toggle('main-navigation--closed');
        mainNavigation.classList.toggle('main-navigation--opened');

      }

      buttonBurg.addEventListener('click',toggleMenu,false);

      function toggl(event){
        if (document.documentElement.clientWidth < 1024) {
          $('#menu').removeClass('hover');
          console.log("jkjk");
          if(event.target.tagName === "A") {
            toggleMenu();
          }
        }
        return false;
      }

    menu.addEventListener('click', toggl,false)
};

var flag;

function topScroll(){
  console.log("Ky");
  $("#content").scrollTop(0);
  return false;
}

function animation(){
  $('.animated').removeClass('slideInRight');
  $('.animated').addClass('slideOutLeft');
}

function animationProduct(){
  $('.animated').removeClass('.slideInUp');
  $('.animated').addClass('slideOutUp');
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
  topScroll();
  var block = $('.menu__element');

  function addClass (event) {
    // event.stopPropagation();
    this.classList.add('menu__animation');
    this.classList.remove('menu__remove');
  }

  function clearClass (event) {
    // event.stopPropagation();
    this.classList.remove('menu__animation');
    this.classList.add('menu__remove');
  }

  // console.log(block);

  block.on('mouseover',addClass);
  block.on('mouseout',clearClass);

}

function salad (ctx, next) {
  topScroll();
}
function pancakes (ctx, next) {
  topScroll();
}
function beverages (ctx, next) {
  topScroll();
}
function burger (ctx, next) {
  topScroll();
}
function garnishes (ctx, next) {
  topScroll();
}
function pizza (ctx, next) {
  topScroll();
}
function bakery (ctx, next) {
  topScroll();
}
function sandwiches (ctx, next) {
  topScroll();
}
function dessert (ctx, next) {
  topScroll();
}
function steak (ctx, next) {
  topScroll();
}
function hotdog (ctx, next) {
  topScroll();
}
function soups (ctx, next) {
  topScroll();
}

function about(ctx, next) {
  var i = 0;flag = false;

  $('#pagepiling').pagepiling(
    {
      loopTop: true,
      loopBottom: true,
      navigation: {
            'position': 'left',
            'tooltips': ['Page1', 'Page2', 'Page3', 'Page4','Page5','Page6','Page7']
          }
    }
  );

  $('#feedback-button').click(function(){
    $('#feedback-form').css('right','0');
  });

  $('#feedback-title').click(function(){
    $('#feedback-form').css('right','-380px');
  });


  $('.about-slider').unslider({
    infinite: true
  });

  $('.plus__link').on('click', function(){
    var id = $(this).attr('data');
    $('#pp-nav [data-tooltip="'+id+'"] a').click();
  });

  function slider () {
    if (flag) {clearInterval(int);console.log("exit"); return false;}
    console.log("KY!!")
    var arr = ['../img/about/info/bg1.png','../img/about/info/bg2.png','../img/about/info/bg3.png','../img/about/info/bg4.png'];
    i = (i + 1 <= arr.length - 1) ? i + 1 : 0;
    $('#about-slider').css("background","url("+arr[i]+") no-repeat").css("backgroundSize","cover");
  }

  var int = setInterval(slider, 8000);
}

function exitAbout(ctx,next){
  flag = true;
  next();
}

function exitPage(ctx, next) {
  animation();
  next();
  // setTimeout(next,400);
}
function exitProduct(cts, next) {
  animationProduct();
  next();
  // setTimeout(next,400);
}

function clients(ctx, next) {
  topScroll();
}


function contacts(ctx, next) {
}
