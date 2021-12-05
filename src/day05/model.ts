export type Coordinates = [number, number];
export type PuzzleInput = [Coordinates, Coordinates][];

export const serializeCoordinates = (coordinates: Coordinates): string => `(${coordinates[0]}, ${coordinates[1]})`;

export const deserializeCoordinates = (coordinates: string): Coordinates => {
    const processedInput = coordinates.trim().replace(/[)(]/, '');
    const [row, col] = processedInput.split(',').map(x => parseInt(x.trim(), 10));

    return [row, col];
}

export class PipeMap {
    maxRowCount = 0;
    maxColumnCount = 0;

    pipeCount: Map<string, number> = new Map();

    addPipeAt(coordinates: Coordinates): void {
        if (coordinates[0] > this.maxColumnCount) this.maxColumnCount = coordinates[0];
        if (coordinates[1] > this.maxRowCount) this.maxRowCount = coordinates[1];

        const serializedCoords = serializeCoordinates(coordinates);
        const previousCount = this.pipeCount.get(serializedCoords)
        this.pipeCount.set(serializedCoords, previousCount ? previousCount + 1 : 1)
    }

    getPipeCountAt(coordinates: Coordinates): number {
        return this.pipeCount.get(serializeCoordinates(coordinates)) ?? 0;
    }

    countOfOverTwoPipes() {
        let countOverOne = 0;
        this.pipeCount.forEach((value) => {
            if(value > 1) countOverOne++;
        });

        return countOverOne;
    }

    // For reuse in part 2 put here
    mapNonDiagonals(coordinates: PuzzleInput) {
        for(let [from, to] of coordinates) {


            // Going through columns
            if(from[0] == to[0]) {
                if(from[1] > to[1]) {
                    [to, from] =  [from, to];
                }
                for (let i = from[1]; i <= to[1]; i++) {
                    this.addPipeAt([from[0], i]);
                }
            }

            // Going through rows
            if(from[1] == to[1]) {
                if(from[0] > to[0]) {
                    [to, from] =  [from, to];
                }
                for (let i = from[0]; i <= to[0]; i++) {
                    this.addPipeAt([i, from[1]]);
                }
            }
        }
    }

    prettyPrint(): string {
        let result = '';
        for (let x = 0; x <= this.maxColumnCount; x++) {

            if(x > 0) result += '\n';

            for (let y = 0; y <= this.maxRowCount; y++) {
                const currentPipeCount = this.getPipeCountAt([y, x]);
                if(currentPipeCount > 0) result += currentPipeCount.toString(10);
                else result += '·';
            }

        }

        return result;
    }
}
