import Model, { attr, belongsTo } from '@ember-data/model';

export default class QuoteModel extends Model {
    @belongsTo('user') user;
    @attr('string') text;
    @attr('date') createdDate;
}
