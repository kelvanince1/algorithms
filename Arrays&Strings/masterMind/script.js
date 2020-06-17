// The computer has four slots and each slot will contain a ball that is red, 
// yellow, green or blue. 
// The user must guess the solution.

// When the correct color in the correct slot is guessed, they get a hit.
// When a color in the incorrect slot is guessed, they get a pseudo hit.
// A slot with hit cannot have a psuedo hit.

// For example, the solution RGBY and a guess of GGRR has one hit and one pseudo hit.

function masterMind(solution, guess) {
    let hitCount = 0;
    let pseudoHitCount = 0;

    const holder = Array(solution.length).fill(null);
    
    for (let i = 0; i < solution.length; i++) {
        for (let j = 0; j < guess.length; j++) {
            if (guess[j] === solution[i] && i === j) {
                hitCount++;

                if (holder.includes(guess[j])) {
                    pseudoHitCount--;
                } else {
                    holder.push(guess[j]);
                }
            } else if (guess[j] === solution[i] && holder.includes(guess[j])) {
                continue;
            } else if (guess[j] === solution[i]) {
                pseudoHitCount++;
                
                holder.push(guess[j]);
            }
        }
    }
    
    return `Hit count is: ${hitCount}. Pseudo Hit count is: ${pseudoHitCount}.`;
}