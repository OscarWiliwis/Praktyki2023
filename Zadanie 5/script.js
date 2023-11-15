const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

//Podpunkt 1
const concat = arr1.concat(arr2);

//Podpunkt 2
const reverseArray = concat.reverse();
const last = reverseArray[0];

//Podpunkt 3
const filterArray = (array, length) => array.filter(word => word.length === length);
const filter = filterArray(arr2, 5);

//Podpunkt 4
const sumArray = (array) => array.reduce((value, number) => value + number, 0);
const sum = sumArray(numbers);

//Podpunkt 5
const mapArray = (array) => array.map(number => Math.pow(number,2) + 3);
const map = mapArray(numbers);

console.log(concat);
console.log(last);
console.log(filter);
console.log(sum);
console.log(map);