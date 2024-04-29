const isNumeric = (string) => Number.isFinite(+string)

export function functionFilter(expression) {

    //Step 1: add parenthesis to functions
    let ans = expression.replaceAll("ln", "log");
    ans = ans.replace(/\s/g, "");
    let regexp = /log|sin|cos|tan|csc|sec|cot|exp/g;
    let str = ans;

    let matches = [...str.matchAll(regexp)];
    let matchesIndex = []
    matches.forEach((match) => {
        matchesIndex.push(match.index+3); //all math expressions take three strings.
    });
    //move from right to left
    matchesIndex.slice().reverse().forEach(
        x=>{
            //check if it is a variable or number or not
            let isCharacterNumeric = isNumeric(ans[x]);
            if (ans[x]=='x'){
                let originalString = ans;
                ans = originalString.slice(0, x) + '(' + originalString[x] + ')' + originalString.slice(x+1);
            } else if (isCharacterNumeric){
                let targetDigit = x+1;
                while (targetDigit < ans.length){
                    
                    if (isNumeric(ans[targetDigit])){
                        targetDigit++;
                    } else if (ans[targetDigit] == 'x') {
                        let originalString = ans;
                        ans = originalString.slice(0, x) + '(' + originalString.slice(x, targetDigit + 1) + ')' + originalString.slice(targetDigit + 1);
                        break;
                    } else {
                        break;
                    }
                }
            } else if (ans[x] == '^'){
                console.log("caret detected, yay");
                let targetDigit = x + 1;
                while (targetDigit < ans.length) {

                    if (isNumeric(ans[targetDigit])) {
                        targetDigit++;
                    } else if (ans[targetDigit] == 'x') {
                        let originalString = ans;
                        ans = originalString.slice(0, x - 3) + '(' + originalString.slice(x - 3, x) + '(' + ans[targetDigit] + ')' + ')' + '^' + '(' + originalString.slice(x + 1, targetDigit) + ')' + originalString.slice(targetDigit+1);
                        console.log(ans);
                        break;
                    } else {
                        break;
                    }
                }
            }
            
        }
    )
    return ans;
}
export default functionFilter;


