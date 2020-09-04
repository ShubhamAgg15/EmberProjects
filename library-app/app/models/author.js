import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-data/model';
import Faker from 'faker';
import { empty } from '@ember/object/computed';

export default class AuthorModel extends Model {
    @attr('string') name;
    @hasMany('book', { inverse: 'author', async: true}) books;

    @empty('name') isNotValid;

    randomize() {
        this.set('name', Faker.name.findName());
    
        // With returning the author instance, the function can be chainable,
        // for example `this.store.createRecord('author').randomize().save()`,
        // check in Seeder Controller.
        return this;
      }
}
