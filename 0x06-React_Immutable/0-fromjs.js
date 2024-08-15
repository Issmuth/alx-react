/*** Converts a javascript object to an immutable ***/
import { fromJS } from "immutable";

export default function getImmutableObject(obj) {
    return fromJS(obj);
}
