//Так приятней :)
window.onload = function(){
  var mainMenu = document.getElementById('main-nav'),
      buttonBurg = document.getElementById('button-burg');

      function toggleMenu(){
        console.log("Ky!");
        mainMenu.classList.toggle('open');
      }

      buttonBurg.addEventListener('click',toggleMenu,false);



  $('#pagepiling').pagepiling(
    {
      loopTop: true,
      loopBottom: true,
      navigation: false
    }
  );

  function main(ctx, next) {
    console.log('main Page');
    next();
  }
};
