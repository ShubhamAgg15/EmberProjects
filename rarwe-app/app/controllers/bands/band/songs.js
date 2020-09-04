import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { sort } from '@ember/object/computed';
import { computed } from '@ember/object';

export default class BandsBandSongsController extends Controller {
    @service catalog;
    @tracked showAddSong = true;
    @tracked title = "";

    @computed('model.songs', 'searchParam', function() {
        return this.model.songs.filter(song => {
            return this.searchParam ? song.title.toLowerCase().includes(this.searchParam.toLowerCase()) : true;
        });
    }) matchingSongs;

    sortBy = 'title';
    @computed('sortBy', function() { 
        return [this.sortBy]
    }) songSorting;

    @sort('matchingSongs', 'songSorting') sortedSongs;

    @action
    async updateRating(song, rating) {
        song.rating = rating;
        this.catalog.update('song', song, { rating });
    }

    @action
    async saveSong() {
        let attributes = { title: this.title, rating: 3};
        let relationship = {
            band : {
                data : {
                    id : this.model.id,
                    type : 'bands'
                }
            }
        }
        let record = await this.catalog.create('song', attributes, relationship);
        this.model.songs = [...this.model.songs, record];

        this.title = '';
        this.showAddSong = true;
    }

    @action
    cancelProcess() {
        this.showAddSong = true;
        this.title = '';
    }
}
