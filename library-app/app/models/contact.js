import Model, { attr } from '@ember-data/model';

export default class ContactModel extends Model {
  @attr('string') msg;
  @attr('string') email;
}
