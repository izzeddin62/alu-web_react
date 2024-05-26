import { getIn } from 'immutable';
export default function accessImmutableObject(object, array) {
  return getIn(object, array);
}


const res = accessImmutableObject({
    name: {
         first: "Guillaume",
         last: "Salva"
    }
}, ['name', 'first'])


console.log(res)