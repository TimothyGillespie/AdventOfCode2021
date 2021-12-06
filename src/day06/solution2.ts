import {setup} from "./setup";

const step = (timers: Map<number, number>) => {
    const tempAt0 = timers.get(0) ?? 0;
    for(let i = 0; i <= 7; i++) {
        timers.set(i, timers.get(i + 1) ?? 0)
    }
    timers.set(8, tempAt0);
    timers.set(6, (timers.get(6) ?? 0) + tempAt0);

    return timers;
}

let {timers: timersArray} = setup();
let timers: Map<number, number> = new Map();
for(let i = 0; i <= 8; i++) {
    timers.set(i, timersArray.filter(x => x === i).length);
}

for(let i = 0; i < 256; i++) {
    step(timers);
}

console.log(timers);
let sumx = 0;

timers.forEach((x) => {
    sumx += x;
});

console.log(sumx);
