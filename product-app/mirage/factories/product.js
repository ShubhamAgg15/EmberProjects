import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({
    name(i) { return `Product ${i}`},
    sku(i) { return `Stock Units ${i}`},
    unitPrice(i) { return i},
    category: association()
});
