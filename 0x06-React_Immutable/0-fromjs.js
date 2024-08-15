const { fromJS } = require('immutable');

export function getImmutableObject(obj) {
    return fromJS(obj);
}