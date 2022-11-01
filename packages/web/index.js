/**
 * Resize a SVG icon
 * @param {string} icon - The SVG icon
 * @param {number} [newSize=16] - The new size of the icon
 * @returns The resized SVG icon
 */
export const resizeIcon = (icon, newSize = 16) =>
    icon.replace(
        'width="24" height="24"',
        `width="${newSize}" height="${newSize}"`
    );

/**
 * Apply classes that result in a true condition
 * @param {string[]} classes
 * @returns A list of classes
 *
 * @example
 * classNames("block truncate", selected ? "font-medium" : "font-normal")
 */
export const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

/**
 * Choose a light or dark colour depending on a different colour
 * @param {string} testColour - The colour to test
 * @param {string} lightColor - The light colour, used if the tested colour is dark
 * @param {string} darkColor - The dark colour, used if the tested colour is light
 * @returns One of the colours provided, either light or dark
 * 
 * @example
 * chooseContrastingColour("#0A1837", "#FFFFFF", "#000000")
 */
export const chooseContrastingColour = (testColour, lightColor, darkColor) => {
    const colour = testColour.charAt(0) === "#" ? testColour.substring(1, 7) : testColour;

    const r = parseInt(colour.substring(0, 2), 16);
    const g = parseInt(colour.substring(2, 4), 16);
    const b = parseInt(colour.substring(4, 6), 16);

    const hexColours = [r / 255, g / 255, b / 255];
    const c = hexColours.map((colour) => {
        if (colour <= 0.03928) {
            return colour / 12.92;
        }

        return Math.pow((colour + 0.055) / 1.055, 2.4);
    });

    const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
    return L > 0.179 ? darkColor : lightColor;
};
