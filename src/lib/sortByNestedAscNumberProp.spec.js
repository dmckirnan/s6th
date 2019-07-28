import sortByNestedAscNumberProp from './sortByNestedAscNumberProp';

const sampleProductData = [
    {
    artist: { display_name: 'Test2' },
    card: { id: '2', title: 'Test2', image: { src: '', alt: '' } },
    product: { price: 17.99, promote_cnt: 200 },
  },
  {
    artist: { display_name: 'Test' },
    card: { id: '1', title: 'Test', image: { src: '', alt: '' } },
    product: { price: 14.99, promote_cnt: 5 },
  },
];

const sampleSortedProductData = [
  {
    artist: { display_name: 'Test' },
    card: { id: '1', title: 'Test', image: { src: '', alt: '' } },
    product: { price: 14.99, promote_cnt: 5 },
  },
  {
    artist: { display_name: 'Test2' },
    card: { id: '2', title: 'Test2', image: { src: '', alt: '' } },
    product: { price: 17.99, promote_cnt: 200 },
  },
];

describe('sortByNestedAscNumberProp', () => {
  it('should return an empty array if `params.data` is falsy', () => {
    const result = sortByNestedAscNumberProp({});
    expect(result).to.deep.equal([]);
  });

  it('should return `params.data` if `params.pathArray` is falsy', () => {
    const result = sortByNestedAscNumberProp(sampleProductData);
    expect(result).to.deep.equal(sampleProductData);
  });

  it('should return a sorted array when passed valid params', () => {
    const result = sortByNestedAscNumberProp(sampleProductData, ['product', 'promote_cnt']);
    expect(result).to.deep.equal(sampleSortedProductData);
  });
});
