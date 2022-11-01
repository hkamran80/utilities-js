/** @typedef {{ [shortName: string]: string }} Weekday */

/**
 * @type {Weekday}
 */
const weekdays = {
    SUN: "Sunday",
    MON: "Monday",
    TUE: "Tuesday",
    WED: "Wednesday",
    THU: "Thursday",
    FRI: "Friday",
    SAT: "Saturday",
};

/**
 * Get the long name of a short (three-letter code) weekday
 * @param {string} shortWeekday - The short weekday
 * @returns {string|null} The long weekday or `null`
 */
export const convertShortWeekdayToLong = (shortWeekday) => {
    if (Object.keys(weekdays).indexOf(shortWeekday) !== -1) {
        return weekdays[shortWeekday];
    } else {
        return null;
    }
};

/**
 * Get the short (three-letter code) name of a long weekday
 * @param {string} longWeekday - The long weekday (first letter must be capitalized)
 * @returns {string|null} The short weekday or `null`
 */
export const convertLongWeekdayToShort = (longWeekday) => {
    const value = Object.values(weekdays).indexOf(longWeekday);

    if (value !== -1) {
        return Object.keys(weekdays)[value];
    } else {
        return null;
    }
};

/**
 * Add an amount of days to a Date object
 * @param {Date} date
 * @param {number} days
 * @returns {number} A date with the specified number of days added
 */
export const addDays = (date, days) => date.setDate(date.getDate() + days);

/**
 * Generate a date range, given two dates
 * @param {Date} start
 * @param {Date} end
 * @returns {Date[]} A range of dates
 */
export const dateRange = (start, end) => {
    let dates = [];

    const date = new Date(start);
    while (date <= end) {
        dates = [...dates, new Date(date)];
        // TODO: Switch to `addDays` function
        date.setDate(date.getDate() + 1);
    }

    return dates;
};

/**
 * Convert 24-hour time to 12-hour
 * @param {string} time - A time in the format of `HH:MM` or `HH:MM:SS`
 * @returns {string} The 12-hour version of the time
 */
export const convert24HourTo12Hour = (time) => {
    const baseTime = time.split(":").slice(0, 2);
    let hour =
        Number(baseTime[0]) > 12 ? Number(baseTime[0]) - 12 : baseTime[0];

    if (hour.toString().startsWith("0")) {
        hour = hour.toString().slice(1);
    }

    return (
        hour + `:${baseTime[1]} ` + (Number(baseTime[0]) >= 12 ? "PM" : "AM")
    );
};
