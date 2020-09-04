import FirestoreSerializer from 'emberfire/serializers/firestore';

export default class ApplicationSerializer extends FirestoreSerializer {
  normalizeCreateRecordResponse(_store, _primaryModelClass, payload, id) {
    return { data: { id: id || payload.doc.id, attributes: payload.data, type: _primaryModelClass.modelName } };
  }
}