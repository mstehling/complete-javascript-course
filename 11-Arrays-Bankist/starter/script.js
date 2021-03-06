'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// // CODING CHALLENGE 1

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCopy = dogsJulia.slice(1, -2);
//   const mergedArray = dogsJuliaCopy.concat(dogsKate);
//   mergedArray.forEach(function (age, index) {
//     console.log(
//       age < 3
//         ? `Dog number ${index + 1} is still a puppy`
//         : `Dog number ${index + 1} is an adult, and is ${age} years old`
//     );
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log('----------');
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// CODING CHALLENGE 2

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(dogAge =>
//     dogAge > 2 ? 16 + dogAge * 4 : dogAge * 2
//   );
//   const adultDogs = humanAges.filter(humanAge => humanAge >= 18);
//   const averageAge =
//     adultDogs.reduce((acc, humanAge) => acc + humanAge) / adultDogs.length;
//   return averageAge;
// };

// const calcAverageHumanAge = function (ages) {
//   return ages
//     .map(dogAge => (dogAge > 2 ? 16 + dogAge * 4 : dogAge * 2))
//     .filter(humanAge => humanAge >= 18)
//     .reduce((acc, humanAge, _, array) => acc + humanAge / array.length, 0);
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// CODING CHALLENGE 3

// const calcAverageHumanAge = ages =>
//   ages
//     .map(dogAge => (dogAge > 2 ? 16 + dogAge * 4 : dogAge * 2))
//     .filter(humanAge => humanAge >= 18)
//     .reduce((acc, humanAge, _, array) => acc + humanAge / array.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// CODING CHALLENGE 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Ex1
dogs.forEach(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});

console.log(dogs);

// Ex2
const dogSarah = dogs.find(dog => {
  return dog.owners.includes('Sarah');
});

if (dogSarah.curFood < dogSarah.recommendedFood) {
  console.log('Eating too little amount');
} else if (dogSarah.curFood > dogSarah.recommendedFood) {
  console.log('Eating too large amount');
}

// Ex3
const [ownersEatTooLittle, ownersEatTooMuch] = dogs.reduce(
  (acc, curr) => {
    if (curr.curFood < curr.recommendedFood) {
      acc[0].push(...curr.owners);
    } else if (curr.curFood > curr.recommendedFood) {
      acc[1].push(...curr.owners);
    }
    return acc;
  },
  [[], []]
);

console.log(ownersEatTooLittle, ownersEatTooMuch);

// Ex4
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

// Ex5
const dogsWithExactAmount = dogs.some(
  dog => dog.curFood === dog.recommendedFood
);

console.log(
  dogsWithExactAmount
    ? 'There is/ are dog(s) eating exactly right food amount'
    : 'There are no dogs eating exactly right food amount'
);

// Ex6
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

const dogsWithOkayAmount = dogs.some(checkEatingOkay);

console.log(
  dogsWithOkayAmount
    ? 'There is/ are dog(s) eating okay food amount'
    : 'There are no dogs eating okay food amount'
);

// Ex7
const dogsWithOkayAmountArray = dogs.filter(checkEatingOkay);

console.log(dogsWithOkayAmountArray);

// Ex8
const dogsCopy = [...dogs].sort((dogA, dogB) => {
  return dogA.recommendedFood - dogB.recommendedFood;
});

console.log(dogsCopy);
