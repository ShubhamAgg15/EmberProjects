import { Factory, trait } from 'ember-cli-mirage';

export default Factory.extend({
    name(i) { return `Artist ${i+1}`},
    withSongs : trait({
        afterCreate(artist, server) {
            server.createList('song', 3, { artist });
        }
    })
});
