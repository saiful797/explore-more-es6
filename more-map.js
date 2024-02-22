const numbers = [12, 13, 14, 15, 16];

const doubled = numbers.map(num => num * 2);
//console.log(doubled);

const fiveBonus = numbers.map(num => num + 5);
//console.log(fiveBonus);

const halves = numbers.map(num => num / 2);
// console.log(halves);

const friends = ['Fahad', 'Tamim', 'Sakib', 'Tipu'];
const friendsLengths = friends.map(friendName => friendName.length);
// console.log(friendsLengths);

const firstLetter = friends.map(friend => friend[0]);
//console.log(firstLetter);
