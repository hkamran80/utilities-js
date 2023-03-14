export function minifyJSON(
    basePath: string,
    outputDir: string,
    excludeSchemas?: string,
): Promise<void>;
export function minifyCSS(basePath: string, outputDir: string): Promise<void>;
export function moveFiles(
    basePath: string,
    outputDir: string,
    ignoredFilenameContents?: string[],
    ignoredFileExtensions?: string[],
): Promise<void>;
export function moveFolder(basePath: string, outputDir: string): Promise<void>;
/** @type {string} */
export const basePath: string;
/** @type {string} */
export const baseOutputPath: string;
