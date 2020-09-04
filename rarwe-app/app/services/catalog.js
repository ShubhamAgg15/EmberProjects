import Service from '@ember/service';
import { tracked } from 'tracked-built-ins';
import Band from '../models/band';
import Song from '../models/song';
import fetch from 'fetch';
import { isArray } from '@ember/array';
import ENV from '../../config/environment';

function extractRelationship(relationships) {
    let rels = {};
    for(let relationName in relationships) {
        rels[relationName] = relationships[relationName].links.related;
    }
    return rels;
}

export default class CatalogService extends Service {
    storage = {};

    constructor() {
        super(...arguments);
        this.storage.bands = tracked([]);
        this.storage.songs = tracked([]);
    }

    _loadResource(data) {
        let record;
        let { id, type, attributes, relationships } = data;
        let rels = extractRelationship(relationships);
        if (type === 'bands') {
            record = new Band({id, ...attributes}, rels);
            this.add('band', record);    
        }
        if (type === 'songs') {
            record = new Song({id, ...attributes}, rels);
            this.add('song', record);
        }
        return record;
    }

    get bandsURL() {
        return `${ENV.apiHost || ''}/bands`;
    }

    get songsURL() {
        return `${ENV.apiHost || ''}/songs`;
    }

    load(json) {
        return this._loadResource(json.data);
    }

    loadAll(json) {
        let records = [];
        for(let item of json.data) {
            records.push(this._loadResource(item));
        }
        return records;
    }

    async fetchRelated(record, relation) {
        let response = await fetch(record.rels[relation]);
        let json = await response.json();

        if (isArray(json.data)) {
            record[relation] = this.loadAll(json);
        } else {
            record[relation] = this.load(json)
        }
    }

    async update(type, record, attributes) {
        let payload = {
            data: {
                id:record.id,
                type: type === 'band' ? 'bands' : 'songs',
                attributes: attributes
            }
        };

        await fetch(type === 'band' ? `${this.bandsURL}/${record.id}` : `${this.songsURL}/${record.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/vnd.api+json'
            },
            body: JSON.stringify(payload)
        });
    }

    async fetchAll(type) {
        if (type === 'bands') {
            let response = await fetch(this.bandsURL);
            let json = await response.json();
            this.loadAll(json);
            return this.bands;    
        }
        if (type === 'songs') {
            let response = await fetch(this.songsURL);
            let json = await response.json();
            this.loadAll(json);
            return this.songs;   
        }
    }

    async create(type, attributes, relationships= {}) {
        let payload = {
            data : {
                type : type === 'band' ? 'bands' : 'songs',
                attributes : attributes,
                relationships : relationships 
            }
        };
        let response = await fetch(type === 'band' ? this.bandsURL : this.songsURL, {
            method: 'POST',
            headers: { 'Content-Type':'application/vnd.api+json' },
            body: JSON.stringify(payload)
        });

        let json = await response.json();
        return this.load(json);
    }

    add(type, record) {
        let collection = type == 'band' ? this.storage.bands : this.storage.songs;

        let recordIds = collection.map(record => record.id);
        if (!recordIds.includes(record.id)) {
            collection.push(record);
        }
    }

    get bands() {
        return this.storage.bands;
    }

    get songs() {
        return this.storage.songs;
    }

    find(type, filterFn) {
        let collection = type == 'band' ? this.storage.bands : this.storage.songs;
        return collection.find(filterFn);
    }
}
