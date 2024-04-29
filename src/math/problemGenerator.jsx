import { polynomialGenerator, polynomialTrigGenerator } from "./polynomialGenerator";

export function problemGenerator(numProblem){
    var problemList = [...Array(numProblem).keys()].map(foo => polynomialTrigGenerator(Math.floor(Math.random() * 2) + 2));
    
    return problemList;
}