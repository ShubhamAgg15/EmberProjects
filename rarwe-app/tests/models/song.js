export default class Song { 
    title = '';
  
    constructor({id, title, rating}, rels={}) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.rels = rels;
    } 
}