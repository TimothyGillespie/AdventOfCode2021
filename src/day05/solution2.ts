import {setup} from "./setup";
import {Coordinates, PipeMap} from "./model";

const {coordinates} = setup();
const pipeMap = new PipeMap();

pipeMap.mapNonDiagonals(coordinates);


// Mapping Diagonals
const diagonallySpanningCoords = coordinates
    .filter(([from, to]) => from[0] !== to[0] && from[1] !== to[1])

for(let [from, to] of diagonallySpanningCoords) {
    // Assuring assumption that the spanning move in [1, 1] units. Otherwise, the result is not well-defined.
    if(Math.abs(from[0] - to[0]) !== Math.abs(from[1] - to[1])) {
        throw new Error('Moving in non [1, 1] diagonals. This is not supported.')
    }

    // Starting with the most right one. This way we only need to determinate
    // if we need to increase or decrease the y-value
    let start, end: Coordinates;
    if(from[0] < to[0]) {
        [start, end] = [from, to];
    } else {
        [start, end] = [to, from];
    }

    // Determining if we need to increase or decrease y
    let step: (prev: number) => number;
    if(start[1] < end[1]) {
        step = (prev) => prev + 1;
    } else {
        step = (prev) => prev - 1;
    }


    const coordStep = (coord: Coordinates): Coordinates => {
        coord[0] += 1
        coord[1] = step(coord[1]);

        return coord;
    }

    for(let currentCoords = start; currentCoords[1] != end[1]; coordStep(currentCoords)) {
        pipeMap.addPipeAt(currentCoords);
    }

    // The end point is not included above
    pipeMap.addPipeAt(end);
}

console.log(pipeMap.countOfOverTwoPipes());
