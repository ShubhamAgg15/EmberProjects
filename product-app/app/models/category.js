import Model, { attr, hasMany } from '@ember-data/model';

export default class CategoryModel extends Model {
  @attr('string') name;
  @hasMany('product') products;
}
