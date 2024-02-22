//filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.

const numbers = [2, 5, 7, 12, 13];
const players = [72, 65, 67,72, 55, 59];

// const selectedPlayers = players.filter(p => p > 60);
// const selectedPlayers = players.filter(p => p > 70);
// const selectedPlayers = players.filter(p => p > 80);
const selectedPlayers = players.filter(p => p % 2 === 1);
// console.log(selectedPlayers);

const friends = ['Fahad', 'Tamim', 'Sakib', 'Tipu'];

const oddFriends = friends.filter(friendName => friendName.length % 2 ===1);

console.log(oddFriends);