export function minifyJSON(
    basePath: string,
    outputDir: string,
    excludeSchemas?: string,
): Promise<void>;
export function minifyCSS(basePath: string, outputDir: string): Promise<void>;
export const ignoredFilenameContents: string[];
export const ignoredFileExtensions: string[];
export function moveFiles(
    basePath: string,
    outputDir: string,
    _ignoredFilenameContents?: string[],
    _ignoredFileExtensions?: string[],
): Promise<void>;
export function moveFolder(basePath: string, outputDir: string): Promise<void>;
/** @type {string} */
export const basePath: string;
/** @type {string} */
export const baseOutputPath: string;
