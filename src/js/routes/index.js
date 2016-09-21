(function () {

  // private api

  var cache = {};

  function get (url, cb) {
    if (cache[url]) return cb(cache[url]);
    $.ajax({
      url: url,
      success: function(data) {
        cache[url] = data;
        cb(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR, textStatus, errorThrown);
      },
      dataType: 'text'
    });
  }

  // public api
  // var routeArray =  [{name : 'main', url:'views/main.html'}];
  //
  // function createRoute(url) {
  //     return function(ctx, next) {
  //         get(url, function(html) {
  //           $('#content').empty().append(html);
  //           next();
  //         });
  //     }
  // }
  //
  // for(var i = 0, s = routeArray.length; i< s; i++) {
  //   window.route[routeArray[i].name] = createRoute(routeArray[i].url);
  // }

/*function addContent(cta,next,adress) {
  get(adress,functuin(html){
    $('#content').empty().append(html);
    next();
})

var adress = ['views/main.html','views/rent.html','views/service.html','views/contacts.html'];

window.route = {
  main: addContent(cta,next,adress[0]),
  rent: addContent(cta,next,adress[1])
}

/*main: function(cta,next,adress) {
  get(adress,functuin(html){
    $('#content').empty().append(html);
    next();
})
}*/

  window.route = {
    main: function (ctx, next) {
      get('template/main.html', function (html) {
        $('#content').empty().append(html);
        next();
      });
    },
    menu: function (ctx, next) {
      get('template/menu.html', function (html) {
        $('#content').empty().append(html);
        next();
      });
    },
    about: function (ctx, next) {
      get('template/about.html', function (html) {
        $('#content').empty().append(html);
        next();
      });
    },
    contacts: function (ctx, next) {
      get('template/contacts.html', function (html) {
        $('#content').empty().append(html);
        next();
      });
    },
    clients: function (ctx, next) {
      get('template/clients.html', function (html) {
        $('#content').empty().append(html);
        next();
      });
    }

  };

  window.done = null;
}());
