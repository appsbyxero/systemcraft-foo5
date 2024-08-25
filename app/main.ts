import * as process from 'process';
import * as fs from 'fs';
import * as rd from 'readline'

// This passes the first task!

var reader = rd.createInterface(fs.createReadStream(process.argv[3]));

reader.on("line", (l: string) => {
    console.log(l);
})
