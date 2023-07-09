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
 * @param {Object} [options={uppercase: true, lowercase: true, numbers: true}] Options that can be passed to customize the output
 * @param {boolean} options.uppercase Allow uppercase strings
 * @param {boolean} options.lowercase Allow lowercase strings
 * @param {boolean} options.numbers Allow numbers
 * @returns {string} A random alphanumeric string of a specified length
 */
export const generateRandomString = (
    length,
    options = { uppercase: true, lowercase: true, numbers: true }
) => {
    let generatedCharacters = "";
    let optionKeys = Object.keys(options);
    if (options.uppercase || !optionKeys.includes("uppercase")) {
        generatedCharacters += characters.slice(0, 26);
    }
    if (options.lowercase || !optionKeys.includes("lowercase")) {
        generatedCharacters += characters.slice(26, 52);
    }
    if (options.numbers || !optionKeys.includes("numbers")) {
        generatedCharacters += characters.slice(52);
    }

    let result = "";
    const charactersLength = generatedCharacters.length;
    for (let i = 0; i < length; i++) {
        result += generatedCharacters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }

    return result;
};
