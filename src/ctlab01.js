export function getName({ name }) {
  return name;
}

export function copyAndPush(array, number) {
  return [[...array, number], array];
}

export function capitalizeAndFilter(arr) {
  const newArr = arr.filter(string => !string.match(/^[Ff]/));
  return newArr.map(string => string.toUpperCase());
}
