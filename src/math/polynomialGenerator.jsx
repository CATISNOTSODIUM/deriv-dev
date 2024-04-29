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
        let coef = Math.floor(Math.random() * 6)+1;
        if (coef==1) coef="";
        let power = `^${i}`;
        if (i < 2) {
            power = ""; // Do not show powers of value 1
        }
        var trigpattern = ["x"];
        denominator += `${signs[Math.floor(Math.random() * 2)]} ${coef}${trigpattern[Math.floor(Math.random() * trigpattern.length)]}${power}`;
    }
    denominator += `${signs[Math.floor(Math.random() * 2)]}${Math.floor(Math.random() * 5) + 2}`;
    return denominator;
}
export function polynomialTrigGenerator(degree) {
    var denominator = "";
    var signs = ["+", "-"];
    for (let i = degree; i > 0; i--) {
        if (i == degree) {
            signs[0] = "";
        } else {
            signs[0] = "+";
        }
        let coef = Math.floor(Math.random() * 6) + 1;
        if (coef == 1) coef = "";
        let power = `^${i}`;
        if (i < 2) {
            power = ""; // Do not show powers of value 1
        }
        var trigpattern = ["sin", "cos","tan","csc","sec","cot"];
        denominator += `${signs[Math.floor(Math.random() * 2)]} ${coef}${trigpattern[Math.floor(Math.random() * trigpattern.length)]}${power}x `;
    }
    denominator += `${signs[Math.floor(Math.random() * 2)]}${Math.floor(Math.random() * 5) + 2}`;
    return denominator;
}