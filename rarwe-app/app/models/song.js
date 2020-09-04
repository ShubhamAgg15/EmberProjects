import { tracked } from '@glimmer/tracking';

export default class Song { 
    title = '';
    @tracked rating = 0;
  
    constructor({id, title, rating}, rels={}) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.rels = rels;
    } 
}