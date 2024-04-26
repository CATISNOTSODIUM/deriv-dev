import { derivative, symbolicEqual, simplify , evaluate} from 'mathjs';
const threshold = 1e-7;
export function modifiedSymbolicEqual(e1, e2) { //e1 and e2 are expressions
    //Level 1: mathjs check
    if (symbolicEqual(e1,e2)) return true;
    //Level 2: test case check (now, N = 1)
    let compareExpression = evaluate(e1 + '-' + e2, {x:0.1});

    if (abs(compareExpression) < threshold) return true;
    return false;
};
//might change to wolfram api instead