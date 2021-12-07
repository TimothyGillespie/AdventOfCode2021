import * as fs from 'fs';

export const setup = () => {
    const args = process.argv.slice(2);

    if (args.length !== 1) {
        throw new Error('Exactly one argument must be given with the relative path to the file.');
    }

    const inputContent = fs.readFileSync(args[0], 'utf8');
    const hPositions = inputContent.split(",").map(x => parseInt(x, 10));


    return {hPositions};
}
