import isFalsy from './isFalsy';

describe('isFalsy', () => {
  it('should handle null', () => {
    const result = isFalsy(null);
    expect(result).to.equal(true);
  });

  it('should handle false', () => {
    const result = isFalsy(false);
    expect(result).to.equal(true);
  });

  it('should handle undefined', () => {
    const result = isFalsy(undefined);
    expect(result).to.equal(true);
  });

  it('should handle empty objects', () => {
    const result = isFalsy({});
    expect(result).to.equal(true);
  });

  it('should handle empty arrays', () => {
    const result = isFalsy([]);
    expect(result).to.equal(true);
  });

  it('should handle empty strings', () => {
    const result = isFalsy('');
    expect(result).to.equal(true);
  });

  it('should handle 0', () => {
    const result = isFalsy(0);
    expect(result).to.equal(true);
  });

  it('should return false for truthy values', () => {
    let result = isFalsy(1)
    expect(result).to.equal(false);
    result = isFalsy(true);
    expect(result).to.equal(false);
    result = isFalsy([1, 2, 3]);
    expect(result).to.equal(false);
  });
});
