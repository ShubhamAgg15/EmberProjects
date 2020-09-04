import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminProductsController extends Controller {
    selectedCategory;

    @action
    setSelection(selected) {
        this.selectedCategory = selected;
    }
}
