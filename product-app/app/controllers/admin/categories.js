import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default class AdminCategoriesController extends Controller {
    categorySorting = ['products.length'];
    @sort('model', 'categorySorting') categories;
}
