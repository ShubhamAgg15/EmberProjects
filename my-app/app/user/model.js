import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
    @attr('string') userName;
    // @attr('number') numberOfQuotes;
    // @attr('number') numberOfFollowing;
    // @attr('number') numberOfFollowers;


    get numberOfQuotes() {
        return this.quotes.get('length');
    }

    get numberOfFollowing() {
        return this.followings.get('length');
    }

    get numberOfFollowers() {
        return this.followers.get('length');
    }

    @attr('string') aboutMe;
    @hasMany('quote', { async:true }) quotes;
    @hasMany('user', { inverse:'followings', async: true }) followers;
    @hasMany('user', { inverse:'followers', async: true }) followings;
}
