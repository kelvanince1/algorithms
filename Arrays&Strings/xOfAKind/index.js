function gcd(a, b) {
        if ( ! b) {
            return a;
        }

        return gcd(b, a % b);
    };

var hasGroupsSizeX = function(deck) {
    const map = {};

    for (let ele of deck) {
        if (map[ele]) {
            map[ele]++;
        } else {
            map[ele] = 1;
        }
    }

    let count = map[Object.keys(map)[0]];
    for (let ele in map) {
        if(gcd(map[ele],count) < 2) {
            return false;
        }
    }
    return true;
};
