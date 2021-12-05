import {setup} from "./setup";
import {PipeMap} from "./model";


const {coordinates} = setup();
const pipeMap = new PipeMap();

pipeMap.mapNonDiagonals(coordinates);

console.log(pipeMap.countOfOverTwoPipes());
