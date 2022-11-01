export function convertShortWeekdayToLong(shortWeekday: string): string | null;
export function convertLongWeekdayToShort(longWeekday: string): string | null;
export function addDays(date: Date, days: number): number;
export function dateRange(start: Date, end: Date): Date[];
export function convert24HourTo12Hour(time: string): string;
export type Weekday = {
    [shortName: string]: string;
};
