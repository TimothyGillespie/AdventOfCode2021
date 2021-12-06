import {setup} from "./setup";

const step = (timers: number[]): number[] => {
    const newTimers = timers.map(x => x - 1);
    const newFish = newTimers.filter(x => x === -1).length;
    return [
        ...(newTimers.map(x => x === -1 ? 6 : x) as number[]),
        ...(new Array(newFish).fill(8) as number[]),
    ];
}

let {timers} = setup();

for(let i = 0; i < 80; i++) {
    timers = step(timers);
}

console.log(timers.length);
