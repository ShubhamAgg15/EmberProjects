import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    startDate = new Date();

    @action
    dateChanged(value) {
        this.set('startDate', value);
    }
}
