import getName from './ctlab01';

describe('Red Green Refactor', () => {
  it('gets a name from an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };

    expect(getName(spot)).toEqual('spot');
    expect(getName(character)).toEqual('Aang');
  });
});
