// Global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls;
balance = 0;

function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // Set dice images
    document.querySelector(".img1").src = "images/dice" + die1 + ".png";
    document.querySelector(".img2").src = "images/dice" + die2 + ".png";
}

function whoWon() {
    if (dieSum <= 5) {
        outcome = "Player 2 wins! You lose $5.";
        balance -= 5;
    } else if (dieSum >= 9) {
        outcome = "Player 1 wins! You win $5.";
        balance += 5;
    } else {
        outcome = "It's a tie! No money exchanged.";
    }

    // Display results
    banner = die1 + " + " + die2 + " = " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome + "<br>Current Balance: $" + balance;
}

function letsPlay() {
    // Prompt for number of rolls
    numRolls = parseInt(prompt("How many times would you like to roll the dice?", "1"));
    
    // Validate input
    if (isNaN(numRolls) || numRolls < 1) {
        alert("Please enter a valid number greater than 0");
        return;
    }
    
    // Reset balance
    balance = 0;
    
    // Roll dice specified number of times
    for (let i = 0; i < numRolls; i++) {
        rollDice();
        whoWon();
        
        // Add delay between rolls for visibility (optional)
        if (i < numRolls - 1) {
            alert("Round " + (i + 1) + " complete. Click OK for next roll.");
        }
    }
    
    // Final result
    alert("Game complete! Final balance: $" + balance);
}
