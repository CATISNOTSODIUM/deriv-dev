#!/usr/bin/node
export function polynomialGenerator(degree){
    var denominator = "";
    var signs = ["+","-"];
    for (let i = degree; i > 0; i--) {
        if (i==degree){
            signs[0] = "";
        }else{
            signs[0]="+";
        }
        let coef = Math.floor(Math.random() * 5) + 2;
        let power = `^${i}`;
        if (i < 2) {
            power = ""; // Do not show powers of value 1
        }
        denominator += `${signs[Math.floor(Math.random() * 2)]} ${coef}x${power} `;
    }
    denominator += `${signs[Math.floor(Math.random() * 2)]}${Math.floor(Math.random() * 5) + 2}`;
    return denominator;
}
console.log(polynomialGenerator(2));