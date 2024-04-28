import { polynomialGenerator } from "./polynomialGenerator";

export function problemGenerator(numProblem){
    var problemList = [...Array(numProblem).keys()].map(foo => polynomialGenerator(3));
    
    return problemList;
}