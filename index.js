"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zfill = exports.center = exports.title = exports.capitalize = void 0;
function capitalize(str) {
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        result += str[i];
    }
    return result;
}
exports.capitalize = capitalize;
function title(str) {
    const splitted = str.split(" ").map(str => capitalize(str));
    let result = "";
    for (let i = 0; i < splitted.length; i++) {
        result += `${splitted[i]}${i == splitted.length - 1 ? "" : " "}`;
    }
    return result;
}
exports.title = title;
function center(str, symbol, count) {
    count = !count ? 3 : count;
    return `${symbol.repeat(count)}${str}${symbol.repeat(count)}`;
}
exports.center = center;
function zfill(str, fixed_len) {
    return `${("0").repeat(fixed_len - str.length)}${str}`;
}
exports.zfill = zfill;
