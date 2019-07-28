import compose from 'ramda/src/compose';
import descend from 'ramda/src/descend';
import path from 'ramda/src/path';
import reverse from 'ramda/src/reverse';
import sortBy from 'ramda/src/sortBy';

import isFalsy from './isFalsy';

/**
 * Sort Collection by Property Key, Given Through Collection of Keys
 * @param {Array.<Object>} data - Collection to be Sorted
 * @param {Array.<String>} path - Keys to Get to Key to sortBy
 * @return {Array.<Object>} - Sorted Collection
 */
const sortByNestedDescNumberProp = (data, pathArray) => {
  if (isFalsy(data)) return [];
  if (isFalsy(pathArray)) return data;
  return compose(reverse, sortBy(path(pathArray)))(data);
};

export default sortByNestedDescNumberProp;
