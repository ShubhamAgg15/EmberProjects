export default function(server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('song', 20);
  server.createList('artist', 10, 'withSongs');
}
