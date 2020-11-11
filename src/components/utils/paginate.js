import _ from 'lodash';

// State state state -> Array
// Returns an array of drinks to map over
export function paginating(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
