const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
/**
 * Format a number with commas
 * @param {number|string} number - The number to format
 * @returns {string} Formatted number
 */
export const numberWithCommas = (number) => {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};

/**
 * Prefix numbers less than ten with a leading zero
 * @param {number|string} number - The number to pad
 * @returns {string} The padded number
 */
export const padNumber = (number) =>
    Number(number < 10)
        ? "0" + Number(number).toString()
        : Number(number).toString();

/**
 * Capitalize the first letter of a string
 * @param {string} string - The string to capitalize the first letter of
 * @returns {string} The string with the first character capitalized
 */
export const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

/**
 * Generate a "slugified" version of a string
 *
 * Strips a string of non-alphanumeric characters, and replaces spaces with dashes
 * @param {string} string - The string to "slugify"
 * @returns {string} The "slugified" string
 */
export const slugify = (string) =>
    string
        .replace(/[^A-Za-z0-9\s]/gm, "")
        .replace(/ /gm, "-")
        .toLowerCase();

/**
 * Generate a random alphanumeric string of a specified length
 * @param {number} length The length of the string to generate
 * @returns {string} A random alphanumeric string of a specified length
 */
export const generateRandomString = (length) => {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }

    return result;
};
