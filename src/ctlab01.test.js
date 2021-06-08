import { getName, copyAndPush, capitalizeAndFilter } from './ctlab01';

describe('getName function', () => {

  it('gets the name spot from an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    expect(getName(spot)).toEqual('spot');
  });

  it('gets the name Aang from an object', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    expect(getName(character)).toEqual('Aang');
  });

});

describe('copyAndPush function', () => {

  const numbers = [1, 2, 3];

  it('returns an array with all the items from the original array and a new item pushed to the end', () => {
    expect(copyAndPush(numbers, 4)[0]).toEqual([1, 2, 3, 4]);
  });
  
  it('confirms original array is unchanged', () => {
    expect(copyAndPush(numbers, 4)[1]).toEqual([1, 2, 3]);
  });
  
});

describe('capitalizeAndFilter', () => {
  it('takes an array of strings, capitalizes all strings, and filters out any string that starts with the letter F/f', () => {
    const arrayOfStrings = [
      'Funny',
      'array',
      'of',
      'strings',
      'function'
    ];
    expect(capitalizeAndFilter(arrayOfStrings)).toEqual(['ARRAY', 'OF', 'STRINGS']);
  });
});
