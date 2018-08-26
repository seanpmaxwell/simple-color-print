"use strict";
/*************************************************************
 *                  Simple Color Printer
 *
 * Prints out different colors to the console. Use this for
 * console printing in the backend.
 *
 * created by Sean Maxwell June 25, 2018
 *
 *
 * !!TYPESCRIPT SUPPORT ADDED!! Aug 16, 2018
 *************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var colors = require("colors/safe");
var util = require("util");
colors.setTheme({
    important: [
        'cyan',
        'underline'
    ]
});
function cerr(content) {
    console.error(colors.red(util.inspect(content)));
}
exports.cerr = cerr;
function cinfo(content) {
    console.info(colors.green(util.inspect(content)));
}
exports.cinfo = cinfo;
function cwarn(content) {
    console.warn(colors.yellow(util.inspect(content)));
}
exports.cwarn = cwarn;
function cimp(content) {
    console.log(colors.important(util.inspect(content)));
}
exports.cimp = cimp;
//# sourceMappingURL=index.js.map