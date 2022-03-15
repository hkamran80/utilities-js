/**
 * Format a number with commas
 * @param {number | string} number - The number to format
 * @returns Formatted number
 */
export const numberWithCommas = (number) => {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};
