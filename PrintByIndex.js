// const pets = ['Cat', 'Dog', 'Bird', 'Fish', 'Frog', 'Hamster', 'Pig', 'Horse', 'Lion', 'Dragon'];
// // Print all pets
// console.log(pets[0]);
// console.log(pets[1]);
// console.log(pets[2]);
// console.log(pets[3]);
// ...
// this is not Dry and the following will present it in a better way

// a functiont that will print out any element inside an array according to its index
const pets = ['Cat', 'Dog', 'Bird', 'Fish', 'Frog', 'Hamster', 'Pig', 'Horse', 'Lion', 'Dragon'];

const printByIndex = (arr) => {
  for (i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
  }
};

printByIndex(pets);
