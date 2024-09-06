/**
 * Generates a random dice roll result based on the number of sides provided.
 * The result will be a random integer between 1 and the number of sides inclusive.
 *
 * @param {number} sides - The number of sides on the dice. Must be a positive integer.
 * @returns {number} A random integer representing the dice roll result.
 *
 * @throws {Error} If the number of sides is not a positive integer.
 *
 * @example
 * const result = randomDiceRoll(6); // Rolls a 6-sided dice, returns a number between 1 and 6.
 */

// Improvement: Linear Congruential Generator (LCG) algorithm

export const randomDiceRoll = (sides: number): number => {
  if (!Number.isInteger(sides) || sides <= 0) {
    throw new Error('Number of sides must be a positive number');
  }

  return Math.ceil(Math.random() * sides);
};
