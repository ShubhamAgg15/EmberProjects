import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class AdminProductsRoute extends Route {
    model() {
        return {
            products: this.store.findAll('product', {include: 'category'}),
            categories: this.store.findAll('category')
        };
    }

    setupController(controller, model) {
        super.setupController(controller, model);
        controller.set('newProduct', this.store.createRecord('product'));
    }

    @action
    addProduct() {
        console.log('category is ' + this.controller.selectedCategory);
        
        this.store.findRecord('category', this.controller.selectedCategory).then((category) => {
            this.controller.newProduct.category = category;

            this.controller.newProduct.save().then(() => {
                console.log('product added successfully');
                this.controller.set('newProduct', this.store.createRecord('product'));
            },
            (error) => {
                console.log('error ' + error);
            });
        });
    }

    @action
    deleteProduct(product) {
        product.destroyRecord();
    }

    @action
    editProduct(product) {
        product.set('isEditing', true);
    }

    @action
    saveChanges(product) {
        product.save();
        product.set('isEditing', false);
    }

    @action
    cancelChanges(product) {
        product.set('isEditing', false);
        if (product.get('hasDirtyAttributes')) {
            product.rollbackAttributes();
        }
    }

}
