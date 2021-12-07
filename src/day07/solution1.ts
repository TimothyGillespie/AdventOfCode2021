import {setup} from "./setup";

let {hPositions} = setup();

let min = hPositions[0];
let max = hPositions[1];

hPositions.forEach(x => {
    if(x > max)
        max = x;

    if(x < min)
        min = x;
});

let differences = hPositions.map(x => min - x)

let mostEfficientPosition = min;
let leastFuelSpent = differences.map(x => Math.abs(x))
    .reduce((x, y) => x + y);

for(let i = min + 1; i <= max; i++) {

    differences = differences.map(x => x + 1);
    const maybeLowerFuelSpent = differences.map(x => Math.abs(x))
        .reduce((x, y) => x + y);

    if(maybeLowerFuelSpent < leastFuelSpent) {
        leastFuelSpent = maybeLowerFuelSpent
        mostEfficientPosition = i;
    }

}

console.log(`Most efficient position: ${mostEfficientPosition}`)
console.log(`Fuel spent: ${leastFuelSpent}`)
