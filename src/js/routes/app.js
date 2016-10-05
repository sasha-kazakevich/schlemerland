page('/', route.main,main);
page.exit('/',exitPage);
page('/menu', route.menu,menu);
page.exit('/menu',exitPage);
page('/about', route.about,about);
page.exit('/about',exitPage);
page('/clients', route.clients,clients);
page.exit('/clients', exitPage);
page('/contacts', route.contacts,contacts);
page.exit('/contacts', exitPage);

page();
