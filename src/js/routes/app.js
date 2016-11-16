page('/', route.main,main);
page.exit('/',exitPage);
page('/menu', route.menu,menu);
page.exit('/menu',exitPage);

page('/salad', route.salad,salad);
page.exit('/salad',exitProduct);
page('/pancakes', route.pancakes,pancakes);
page.exit('/pancakes',exitProduct);
page('/beverages', route.beverages,beverages);
page.exit('/beverages',exitProduct);
page('/burger', route.burger,burger);
page.exit('/burger',exitProduct);
page('/garnishes', route.garnishes,garnishes);
page.exit('/garnishes',exitProduct);
page('/pizza', route.pizza,pizza);
page.exit('/pizza',exitProduct);
page('/bakery', route.bakery,bakery);
page.exit('/bakery',exitProduct);
page('/sandwiches', route.sandwiches,sandwiches);
page.exit('/sandwiches',exitProduct);
page('/dessert', route.dessert,dessert);
page.exit('/dessert',exitProduct);
page('/steak', route.steak,steak);
page.exit('/steak',exitProduct);
page('/hotdog', route.hotdog,hotdog);
page.exit('/hotdog',exitProduct);
page('/soups', route.soups,soups);
page.exit('/soups',exitProduct);


page('/about', route.about,about);
page.exit('/about',exitAbout);
page('/clients', route.clients,clients);
page.exit('/clients', exitPage);
page('/contacts', route.contacts,contacts);
page.exit('/contacts', exitPage);

page();
