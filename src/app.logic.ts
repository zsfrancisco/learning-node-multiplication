import fs from "fs";
import {yarg} from "./config/plugins/args.plugin";

const {b: base, l: limit, s: show} = yarg;

let result = '';

for (let i = 0; i <= limit; i++) {
    result += (`${base} x ${i} = ${base * i}`) + '\n';
}

const fileContent = `
=========================
        ${base} table
=========================

${result}
`;

console.log(show ?
    `
${fileContent}

'file created'
` : 'file created');

const dir = 'outputs';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

fs.writeFileSync(`outputs/table-${base}.txt`, fileContent);
