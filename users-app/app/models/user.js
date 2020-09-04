import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
    @attr('string') name;
    @attr('string') email;
    @attr('string') bio;
    @attr('string') avatarUrl;
    @attr('date') creationDate;
}
