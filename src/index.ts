import { createId } from "@paralleldrive/cuid2"
import { getFile, getFileFormat, getFileFromTmp, fileExists, move } from "./files"
import { parseBase, parseCookieData } from "./parsing"


function randomId(prefix?: string) {
    if (prefix) return `${prefix}_${createId()}`

    return createId()
}

export {
    getFile,
    getFileFormat,
    getFileFromTmp,
    fileExists,
    move,
    parseBase,
    parseCookieData,
    randomId,
}
