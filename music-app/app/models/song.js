import Model, { attr, belongsTo } from '@ember-data/model';

export default class SongModel extends Model {
    @attr('string') name;
    @belongsTo('artist') artist;
}
