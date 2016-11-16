(function () {
  // name page
  var namePage = ['main','menu','salad','pancakes','beverages','burger','garnishes','pizza','bakery','sandwiches','dessert','steak','hotdog','soups','about','contacts','clients'];

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

  window.route = {};

  function createMed(name){
    Object.defineProperty(window.route, name, {
        value: function(ctx,next){
          get('template/'+name+'.html', function (html) {
            $('#content').empty().append(html);
            next();
        });
      }
    });
  }

  namePage.forEach(function(el){
    createMed(el);
  });


  window.done = null;
}());
