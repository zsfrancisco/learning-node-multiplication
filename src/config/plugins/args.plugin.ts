import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base of multiplication table'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table on console'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'table',
        describe: 'Name of the file'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'Destination of the file'
    })
    .check(({b, l}) => {
        if (isNaN(b)) {
            throw 'Base must be a number';
        }
        if (b<1) {
            throw 'Base must be greater than 0';
        }
        if (isNaN(l)) {
            throw 'Limit must be a number';
        }
        return true;
    })
    .parseSync();
