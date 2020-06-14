// Check Tic Tac Toe board for a winner

function ticTacToeWin(board) {
    const WINNING_COMBINATIONS = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ];
    
    for (let i = 0; i < board.length; i++) {
        const [a,b,c] = board[i];
        
        if (a === b && b === c) {
            return `Winner is ${a}`;
        }
    }
}
