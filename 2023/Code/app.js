let east = ['ogbe', 'irosun', 'ogunda', 'otura']
let west = ['oyeku', 'owonrin', 'osa', 'irete']
let north = ['iwori', 'obara', 'ika', 'ose']
let south = ['idi', 'okanran', 'oturpon', 'ofun']

const log = console.log
let result = []

for (let i = 0; i < east.length; i++)
{
    if (east[i] === 'ogbe')
    {
        result.push(east[i]);
    }
}

const readLine = require('readLine-sync');

log('Enter your primary odu.');
let odu = readLine.prompt();

log(`The primary odu for today is ${odu}`)

const rl = readLine.createInstance({
    input: process.stdin,
    output: process.stdout
});