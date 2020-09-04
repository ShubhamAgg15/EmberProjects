import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ArtistsSongsRoute extends Route {
    model(params) {
        return this.store.findRecord('artist', params.artist_id, { include: 'songs'});
    }

    setupController(controller, model) {
        super.setupController(controller, model);
        controller.set('newSong', this.store.createRecord('song'));
    }

    @action
    addSong() {
        this.controller.newSong.set('artist', this.controller.model);
        this.controller.newSong.save()
            .then(() => {
                console.log('song added');
                this.controller.set('newSong', this.store.createRecord('song'));
            });
    }
}
