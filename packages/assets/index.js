import { existsSync } from "fs";
import {
    constants,
    copyFile,
    mkdir,
    readdir,
    readFile,
    writeFile,
} from "fs/promises";
import { join } from "path";

/**
 * Minify all JSON files
 * @param {string} basePath The base path to use
 * @param {string} [excludeSchemas=true] Exclude schemas from the final product (optional, defaults to `true`)
 * @param {string} outputDir The output directory
 */
export const minifyJSON = async (
    basePath,
    outputDir,
    excludeSchemas = true,
) => {
    const files = (await readdir(basePath, { withFileTypes: true }))
        .filter((item) => item.isFile())
        .map((item) => item.name)
        .filter(
            (filename) =>
                !filename.startsWith(".") &&
                !filename.startsWith("_") &&
                (excludeSchemas ? !filename.includes("schema") : true) &&
                filename.endsWith("json") &&
                filename !== "package.json",
        );

    files.forEach(
        async (filename) =>
            await writeFile(
                join(outputDir, filename),
                JSON.stringify(
                    JSON.parse(await readFile(join(basePath, filename))),
                ),
            ),
    );
};

/**
 * Minify all CSS files
 *
 * Minification code courtesy of [@derder56 on Dev.to](https://dev.to/derder56/how-to-build-a-css-minifier-with-8-lines-of-javascript-4bj3)
 *
 * @param {string} basePath The base path to use
 * @param {string} outputDir The output directory
 */
export const minifyCSS = async (basePath, outputDir) => {
    const files = (await readdir(basePath, { withFileTypes: true }))
        .filter((item) => item.isFile())
        .map((item) => item.name)
        .filter(
            (filename) =>
                !filename.startsWith(".") &&
                !filename.startsWith("_") &&
                filename.endsWith("css"),
        );

    files.forEach(
        async (filename) =>
            await writeFile(
                join(outputDir, filename),
                await (
                    await readFile(join(basePath, filename))
                )
                    .toString()
                    .replace(/([^0-9a-zA-Z\.#])\s+/g, "$1")
                    .replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1")
                    .replace(/;}/g, "}")
                    .replace(/\/\*.*?\*\//g, ""),
            ),
    );
};

/**
 * Check if a string contains any ignored contents
 * @param {string} check The string to check
 * @param {string[]} ignoredContents The contents to check against
 * @returns {boolean} Whether the string contains any of the `ignoredContents`
 */
const checkIgnoredContents = (check, ignoredContents) => {
    for (const ignoredContent of ignoredContents) {
        if (check.includes(ignoredContent)) {
            return true;
        }
    }

    return false;
};

/**
 * Check if a string ends with any ignored endings
 * @param {string} check The string to check
 * @param {string[]} ignoredEndings The endings to check against
 * @returns {boolean} Whether the string ends with any of the `ignoredEndings`
 */
const checkIgnoredEndings = (check, ignoredEndings) => {
    for (const ignoredEnding of ignoredEndings) {
        if (check.endsWith(ignoredEnding)) {
            return true;
        }
    }

    return false;
};

export const ignoredFilenameContents = ["schema"];
export const ignoredFileExtensions = ["json", "css", "toml", "md"];

/**
 * Move files
 * @param {string} basePath The base path to use
 * @param {string[]} [ignoredFilenameContents=[schema]] Skip filenames if they include certain snippets (optional, defaults to `["schema"]`)
 * @param {string[]} [ignoredFileExtensions=[json,css,toml,md]] Skip filenames if they have certain extensions (optional, defaults to `["json", "css", "toml", "md"]`)
 * @param {string} outputDir The output directory (optional)
 */
export const moveFiles = async (
    basePath,
    outputDir,
    _ignoredFilenameContents = ignoredFilenameContents,
    _ignoredFileExtensions = ignoredFileExtensions,
) => {
    (await readdir(basePath, { withFileTypes: true }))
        .filter((item) => item.isFile())
        .map((item) => item.name)
        .filter(
            (filename) =>
                !filename.startsWith(".") &&
                !checkIgnoredContents(filename, _ignoredFilenameContents) &&
                !checkIgnoredEndings(filename, _ignoredFileExtensions),
        )
        .forEach(
            async (filename) =>
                await copyFile(
                    join(basePath, filename),
                    join(outputDir, filename),
                    constants.COPYFILE_EXCL,
                ),
        );
};

/**
 * Move a folder and its file
 * @param {string} basePath The base path to use
 * @param {string} outputDir The output directory (optional)
 */
export const moveFolder = async (basePath, outputDir) => {
    if (outputDir && !existsSync(outputDir)) await mkdir(outputDir);

    (await readdir(basePath, { withFileTypes: true })).forEach(async (item) => {
        if (item.isFile()) {
            await copyFile(
                join(basePath, item.name),
                join(outputDir, item.name),
                constants.COPYFILE_EXCL,
            );
        } else if (item.isDirectory()) {
            await moveFolder(
                join(basePath, item.name),
                join(outputDir, item.name),
            );
        }
    });
};

/** @type {string} */
export const basePath = process.cwd();

/** @type {string} */
export const baseOutputPath = join(basePath, "dist");

await mkdir(baseOutputPath);
