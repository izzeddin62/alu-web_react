export default function accessImmutableObject(object, array) {
  let result = null;
  array.map((key) => {
    if (result === null) {
      result = object[key];
    } else if (result !== null && typeof result === 'object') {
      result = result[key];
    } else {
      result = undefined;
    }
});
  return result;
}
