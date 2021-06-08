import { getName, copyAndPush } from './ctlab01';

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
  it('that returns a new array with all the items in the original array and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  });
});
