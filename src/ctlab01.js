import fetch from 'node-fetch';

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

export async function fetchQuote() {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes')
    .then(response => response.json())
    .then(data => ({
      name: data[0].character,
      text: data[0].quote,
      image: data[0].image
    }));
} 
