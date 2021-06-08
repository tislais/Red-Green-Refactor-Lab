export function getName({ name }) {
  return name;
}

export function copyAndPush(array, number) {
  return [[...array, number], array];
}

export function capitalizeAndFilter(arr) {
  const newArr = [];
  for(const string of arr) {
    if(!string.startsWith('f') && !string.startsWith('F')) {
      newArr.push(string[0].toUpperCase() + string.slice(1));
    }
  }
  return newArr;
}
