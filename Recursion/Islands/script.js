function islands(grid) {
    let counter = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                helper(grid, i, j);
                counter++;
            }
        }
    }
    
    return counter;
}

function helper(grid, row, col) {
    if (grid[row][col] === 1) {
        grid[row][col] = '*';
        if (col > 0) {
            helper(grid, row, col - 1);
        }
        
        if (col < grid[row].length - 1) {
            helper(grid, row, col + 1);
        }
        
        if (row > 0) {
            helper(grid, row - 1, col);
        }
        
        if (row < grid.length - 1) {
            helper(grid, row + 1, col);
        }
    }
    
}