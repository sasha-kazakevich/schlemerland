//Так приятней :)
window.onload = function(){
  var mainMenu = document.getElementById('main-nav'),
      buttonBurg = document.getElementById('button-burg');

      function toggleMenu(){
        console.log("Ky!");
        mainMenu.classList.toggle('open');
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
