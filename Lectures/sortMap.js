var unsortedMap = new Map();
unsortedMap.set('2-1', 'foo');
unsortedMap.set('0-1', 'bar');

// Initialize your keys array
var keys = [];
// Initialize your sorted maps object
var sortedMap = new Map();

// Put keys in Array
unsortedMap.forEach(function callback(value, key, map) {
    keys.push(key);
});

// Sort keys array and go through them to put in and put them in sorted map
keys.sort().map(function(key) {
    sortedMap.set(key, unsortedMap.get(key));
});

// View your sorted map
console.log(sortedMap);
