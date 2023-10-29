// Define a function to simulate rolling a six-sided die and return a random value between 1 and 6
const die1 = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const die2 = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const die3 = () => {
  return Math.floor(Math.random() * 6) + 1;
};

// Define a function to roll three dice and determine the outcome
function rollDice() {
  // Roll three dice and store their values in variables
  const dieOne = die1();
  const dieTwo = die2();
  const dieThree = die3();
  const diceValues = [dieOne, dieTwo, dieThree]; // Store the values in an array for easier processing

  // Check if the first and second dice have matching values
  if (dieOne === dieTwo) {
    console.log(
      `Your matching values are ${dieOne} ${dieTwo}, which means your point is ${dieThree}`
    );
    return [dieThree]; // Return the point value
  }

  // Check if the first and third dice have matching values
  if (dieOne === dieThree) {
    console.log(
      `Your matching values are ${dieOne} ${dieThree}, which means your point is ${dieTwo}`
    );
    return [dieTwo]; // Return the point value
  }

  // Check if the second and third dice have matching values
  if (dieTwo === dieThree) {
    console.log(
      `Your matching values are ${dieTwo} ${dieThree}, which means your point is ${dieOne}`
    );
    return [dieOne]; // Return the point value
  }

  // Check if all three dice have the same value (a triple)
  if (dieOne === dieTwo && dieOne === dieThree) {
    console.log(`Matching values: ${dieOne} ${dieTwo} ${dieThree}`);
    return [dieOne, dieTwo, dieThree]; // Return all values in the order rolled
  }

  // Check for an automatic loss condition (1, 2, 3)
  if (
    diceValues.includes(1) &&
    diceValues.includes(2) &&
    diceValues.includes(3)
  ) {
    console.log(`Automatic Loss: Rolled 1, 2, 3`);
    return [1, 2, 3]; // Return the specific values for an automatic loss
  }

  // Check for an automatic win condition (4, 5, 6)
  if (
    diceValues.includes(4) &&
    diceValues.includes(5) &&
    diceValues.includes(6)
  ) {
    console.log(`Automatic Win: Rolled 4, 5, 6`);
    return [4, 5, 6]; // Return the specific values for an automatic win
  }

  // If none of the special conditions are met, return the values of the dice
  return [dieOne, dieTwo, dieThree];
}

// Call the rollDice function and store the result
const result = rollDice();

// Print the result to the console
console.log(result);
