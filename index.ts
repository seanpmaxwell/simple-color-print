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

import * as colors from 'colors/safe';
import * as util from 'util';


colors.setTheme({
    important: [
        'cyan',
        'underline'
    ]
});


export function cerr(content: any)
{
    console.error(colors.red(util.inspect(content)));
}

export function cinfo(content: any)
{
    console.info(colors.green(util.inspect(content)));
}

export function cwarn(content: any)
{
    console.warn(colors.yellow(util.inspect(content)));
}

export function cimp(content: any)
{
    console.log((<any>colors).important(util.inspect(content)));
}