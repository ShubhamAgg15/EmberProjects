import Model, { attr, hasMany } from '@ember-data/model';

export default class ArtistModel extends Model {
    @attr('string') name;
    @hasMany('song') songs;
}
