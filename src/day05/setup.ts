import * as fs from 'fs';
import {Coordinates, deserializeCoordinates} from "./model";

export const setup = () => {
    const args = process.argv.slice(2);

    if (args.length !== 1) {
        throw new Error('Exactly one argument must be given with the relative path to the file.');
    }

    const inputContent = fs.readFileSync(args[0], 'utf8');
    let lines = inputContent.split('\n');

    lines = lines.map(x => x.trim())
        .filter(x => x !== '');

    let coordinates: [Coordinates, Coordinates][] = lines
        .map(singleLine => singleLine
            .split('->')
            .map(x => deserializeCoordinates(x)) as [Coordinates, Coordinates]
        );

    return {
        coordinates
    }
}
