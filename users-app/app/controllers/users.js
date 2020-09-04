import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default class UsersController extends Controller {
    userSorting = ['name'];
    @sort('model.users', 'userSorting') sortedUsers;
}
