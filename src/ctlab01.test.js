import getName from './ctlab01';

describe('Red Green Refactor', () => {
  it('gets the name spot from an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    expect(getName(spot)).toEqual('spot');
  });

  it('gets the name Aang from an object', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    expect(getName(character)).toEqual('Aang');
  });
});
