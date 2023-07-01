/**
 * Format a number with commas
 * @param {number|string} number - The number to format
 * @returns {string} Formatted number
 */
export function numberWithCommas(number: number | string): string;
/**
 * Prefix numbers less than ten with a leading zero
 * @param {number|string} number - The number to pad
 * @returns {string} The padded number
 */
export function padNumber(number: number | string): string;
/**
 * Capitalize the first letter of a string
 * @param {string} string - The string to capitalize the first letter of
 * @returns {string} The string with the first character capitalized
 */
export function capitalizeFirstLetter(string: string): string;
/**
 * Generate a "slugified" version of a string
 *
 * Strips a string of non-alphanumeric characters, and replaces spaces with dashes
 * @param {string} string - The string to "slugify"
 * @returns {string} The "slugified" string
 */
export function slugify(string: string): string;
/**
 * Generate a random alphanumeric string of a specified length
 * @param {number} length The length of the string to generate
 * @returns {string} A random alphanumeric string of a specified length
 */
export function generateRandomString(length: number): string;
