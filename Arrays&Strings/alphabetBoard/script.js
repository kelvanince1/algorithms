// On an alphabet board, we start at position (0, 0), corresponding to character 
// board[0][0].

// Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]


// We may make the following moves:

// 'U' moves our position up one row, if the position exists on the board;
// 'D' moves our position down one row, if the position exists on the board;
// 'L' moves our position left one column, if the position exists on the board;
// 'R' moves our position right one column, if the position exists on the board;
// '!' adds the character board[r][c] at our current position (r, c) to the answer.
// (Here, the only positions that exist on the board are positions with letters on them.)

// Return a sequence of moves that makes our answer equal to target in the 
// minimum number of moves.  You may return any path that does so.

const letters = [
    'a','b','c','d','e','f','g','h','i','j','k',
    'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

// Call to function
// alphabetBoardPath('code', [
//     ['a', 'b','c','d','e'],
//     ['f','g','h','i','j'],
//     ['k', 'l', 'm', 'n','o'],
//     ['p','q','r','s','t'],
//     ['u','v','w','x','y'],
//     ['z']
// ]);


function alphabetBoardPath(target, arr) {
    const obj = {};
    let result = '';
    let objCount = 0;
    let objPlace = 0;
    
    for (let i = 0; i < letters.length; i++) {
        
        if (i % 5 === 0) {
            objCount += 5;
        }
        
        obj[letters[i]] = { arr: objCount, place: objPlace };
        if (objPlace === 4) {
            objPlace = 0;
        } else {
            objPlace++;
        }
    }
    
    let currentPosition = [0,0];

    for (let ele of target) {
        let arrNum = (obj[ele].arr / 5) - 1;
        let arrPlace = obj[ele].place;

        if (currentPosition[0] === arrNum && currentPosition[1] === arrPlace) {
            result += '!';
            continue;
        }

        let yAxis = Math.abs(currentPosition[0] - arrNum);
        let xAxis = Math.abs(currentPosition[1] - arrPlace);


        for (let i = 0; i< yAxis; i++) {
            if (currentPosition[0] > arrNum) {
                result += 'U';
            } else if (currentPosition[0] < arrNum) {
                result += 'D';
            } else {
                break;
            }
        }

        for (let j = 0; j < xAxis; j++) {
            if (currentPosition[1] > arrPlace) {
                result += 'L';
            } else if (currentPosition[1] < arrPlace) {
                result += 'R';
            } else {
                break;
            }
        }

        currentPosition[0] = arrNum;
        currentPosition[1] = arrPlace;

        result+= '!';
    }
    
    return result;
}