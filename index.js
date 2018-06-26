/*************************************************************
 *                  Simple Color Printer
 *
 * Prints out different colors to the console. Use this for
 * console printing in the backend.
 *
 * created by Sean Maxwell June 25, 2018
 *************************************************************/


var colors = require('colors/safe');
var util   = require('util');


colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red',
    important: ['cyan', 'underline']
});


function cerr(content)
{
    console.error(colors.error(util.inspect(content)))
}

function cinfo(content)
{
    console.info(colors.info(util.inspect(content)))
}

function cwarn(content)
{
    console.warn(colors.warn(util.inspect(content)))
}

function cimp(content)
{
    console.log(colors.important(util.inspect(content)))
}


module.exports = {
    cerr: cerr,
    cinfo: cinfo,
    cwarn: cwarn,
    cimp: cimp
};