let balance = 0;
let currentRoll = 0;
let totalRolls = 0;

function rollDice() {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const sum = die1 + die2;
    
    // Update dice images - using IDs now
    document.getElementById("die1").src = `images/dice${die1}.png`;
    document.getElementById("die2").src = `images/dice${die2}.png`;
    
    return sum;
}

function calculateResult(sum) {
    if (sum <= 5) {
        balance -= 5;
        return "You lose $5!";
    } else if (sum >= 9) {
        balance += 5;
        return "You win $5!";
    } else {
        return "It's a tie!";
    }
}

function letsPlay() {
    // Reset game state
    balance = 0;
    currentRoll = 0;
    totalRolls = parseInt(prompt("How many times would you like to roll?", "1"));
    
    if (isNaN(totalRolls) || totalRolls < 1) {
        alert("Please enter a valid number greater than 0");
        return;
    }
    
    // Start first roll
    nextRoll();
}

function nextRoll() {
    if (currentRoll >= totalRolls) {
        document.getElementById("diceResult").innerHTML = `
            Game over!<br>
            Final balance: $${balance}
        `;
        return;
    }
    
    currentRoll++;
    const sum = rollDice();
    const result = calculateResult(sum);
    
    document.getElementById("diceResult").innerHTML = `
        Roll ${currentRoll} of ${totalRolls}<br>
        Dice: ${sum}<br>
        ${result}<br>
        Balance: $${balance}
    `;
    
    // Auto-advance to next roll after 1.5 seconds
    if (currentRoll < totalRolls) {
        setTimeout(nextRoll, 1500);
    }
}
    alert("Game complete! Final balance: $" + balance);
}
