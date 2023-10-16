const suitTop = document.querySelector('.suit-top');
const suitBottom = document.querySelector('.suit-bottom');
const number = document.querySelector('.card-number');

const numbers = [
  'A',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

const suits = ['&#9824', '&#9827', '&#9829', '&#9830'];
const randomNumber = Math.floor(Math.random() * numbers.length);
const randomSuit = Math.floor(Math.random() * suits.length);
const suitColor = randomSuit === 2 || randomSuit === 3 ? 'red' : 'black';

suitTop.innerHTML = suits[randomSuit];
suitBottom.innerHTML = suits[randomSuit];
suitTop.style.color = suitColor;
suitBottom.style.color = suitColor;

number.innerHTML = numbers[randomNumber];
