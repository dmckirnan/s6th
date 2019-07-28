import path from 'ramda/src/path';
import sortBy from 'ramda/src/sortBy';

import isFalsy from './isFalsy';

/**
 * Sort Collection by Property Key, Given Through Collection of Keys
 * @param {Object} data - Collection to be Sorted
 * @param {Array.<String>} path - Keys to Get to Key to sortBy
 * @return {Array.<Object>} - Sorted Collection
 */
const sortByNestedAscNumberProp = (data, pathArray) => {
  if (isFalsy(data)) return [];
  if (isFalsy(pathArray)) return data;
  return sortBy(path(pathArray))(data);
};

export default sortByNestedAscNumberProp;
