function minimumDistance(numRows, numColumns, area) {
    // WRITE YOUR CODE HERE
		// Counter variable to be incremented as loop steps through the driveable areas, represented as 1's.
		let counter = 0;

		// Iterate through the area and assign each element to a variable x
		for (let x = 0; x < area.length; x++) {
			// Create a for loop which will iterate up/down through the arrays
      for (let col = 0; col < numColumns; col++) {
	      // Create a for loop which will iterate left/right through the arrays
      	for (let row = 0; row < numRows; row++) {
        	if (area[x][row] === 9) {
                return counter;
            }

				// If we have a 1 in the rows place and also the columns place, we can increment the counter variable and proceed to the next column
      		if (area[x][row] === 1) {
      			if (area[x][col] === 1) {
      				counter++;
      				continue;
            }
          }
				}
			}
    }
}
