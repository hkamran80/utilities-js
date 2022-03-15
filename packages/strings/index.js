/**
 * Format a number with commas
 * @param {number|string} number - The number to format
 * @returns Formatted number
 */
export const numberWithCommas = (number) => {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};

/**
 * Prefix numbers less than ten with a leading zero
 * @param {number|string} number - The number to pad
 * @returns The padded number
 */
export const padNumber = (number) => {
    return Number(number < 10)
        ? "0" + Number(number).toString()
        : Number(number).toString();
};
