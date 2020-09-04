import Model from '@ember-data/model';
import { attr, belongsTo } from '@ember-data/model';
import Faker from 'faker';

export default class BookModel extends Model {
    @attr('string') title;
    @attr('date') releaseDate;

    @belongsTo('author', { inverse: 'books', async: true}) author;
    @belongsTo('library', { inverse: 'books', async: true}) library;

    randomize(author, library) {
        this.set('title', this._bookTitle());
        this.set('author', author);
        this.set('releaseYear', this._randomYear());
        this.set('library', library);
    
        return this;
      }
    
      _bookTitle() {
        return `${Faker.commerce.productName()} Cookbook`;
      }
    
      _randomYear() {
        return new Date(this._getRandomArbitrary(1900, 2015).toPrecision(4));
      }
    
      _getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
}
