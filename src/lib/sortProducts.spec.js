import {
  sampleAscData,
  sampleAscSorted,
  sampleDescData,
  sampleDescSortedData,
  sampleAscSortedData,
} from './sampleData.js';
import sortProducts from './sortProducts';

describe('sortProducts', () => {
  it('should return an empty array if `params.productList` is falsy', () => {
    const input = {};
    const result = sortProducts(input);
    expect(result).to.deep.equal([]);
  });

  it('should return `params.productList` if `params.currentSort` is falsy', () => {
    const input = { productList: sampleAscData };
    const result = sortProducts(input);
    expect(result).to.deep.equal(input.productList);
  });

  it('should return expected results for `price` scenario', () => {
    const result = sortProducts({ currentSort: { sortBy: 'price' }, productList: sampleAscData });
    expect(result).to.deep.equal(sampleAscSortedData);
  });

  it('should return expected results for `promotes` scenario', () => {
    const result = sortProducts({ currentSort: { sortBy: 'promotes' }, productList: sampleDescData });
    expect(result).to.deep.equal(sampleDescSortedData);
  });
});
