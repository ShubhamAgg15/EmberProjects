import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class AdminCategoriesRoute extends Route {
    model() {
        return this.store.findAll('category');
    }

    setupController(controller, model) {
        super.setupController(controller, model);
        controller.set('newCategory', this.store.createRecord('category'));
    }

    @action
    addCategory() {
        this.controller.newCategory.save()
            .then((data) => {
                    console.log('record added');
                    this.controller.set('newCategory', this.store.createRecord('category'));
                },
                (error) => {
                    console.log('record not added');
                }
            );
    }

    @action
    deleteCategory(category) {
        category.destroyRecord();
    }
}
