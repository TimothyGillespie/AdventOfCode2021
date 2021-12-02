const fs = require('fs');

const args = process.argv.slice(2);

if(args.length !== 1) {
    throw new Error('Exactly one argument must be given with the relative path to the file.');
}

fs.readFile(args[0], 'utf8', (err, data) => {
    if(err) {
        console.log('Error reading file.')
        throw new Error(err);
    }

    let lines;
    if(data.includes('\r\n')) {
        lines = data.split('\r\n');
    } else {
        lines = data.split('\n');
    }

    const entries = lines
        .filter((singleLine) => singleLine !== '')
        .map((singleLine, index) => {
            const [direction, amount] = singleLine.split(" ");
            if(!direction || !amount) {
                throw new Error(`Wrong format in line ${index + 1} with ${singleLine}`)
            }

            return [direction, parseInt(amount, 10)];
        });

    let aim = 0;
    let horizontal = 0;
    let depth = 0;

    for(const singleEntry of entries) {
        const [direction, amount] = singleEntry;
        switch (direction) {
            case 'forward':
                horizontal += amount;
                depth += aim * amount;
                break;
            case 'down':
                aim += amount;
                break;
            case 'up':
                aim -= amount;
                break;
            default:
                throw new Error(`Unsupported direction ${direction} given.`);
        }
    }

    console.table({
        horizontal,
        depth,
        product: depth * horizontal,
    });

});
