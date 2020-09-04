export default class Band {

    constructor({id, name, songs, description}, rels={}) {
        this.id = id;
        this.name = name;
        this.songs = songs ?? [];
        this.description = description;
        this.rels = rels;
    }
}
