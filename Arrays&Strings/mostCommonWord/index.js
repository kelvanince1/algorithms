var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.replace(/[^a-zA-Z0-9]/g, ' ').toLowerCase().split(' ');
    let max = 0;
	let maxChar = '';
	const map = {};

    for (let ele of words) {
        if (banned.includes(ele) || ele === '') {
            continue;
        }

        if (map[ele]) {
            map[ele]++;
        } else {
            map[ele] = 1;
        }
    }

    for (let char in map) {
        if (map[char] > max) {
          max = map[char];
		  maxChar = char;
        }
  	}

    return maxChar;
}
