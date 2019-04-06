document.addEventListener("DOMContentLoaded", ready);
let exp = '';
const viewer = document.getElementById('viewer');
const clear = document.getElementById('clear');
const result = document.getElementById('result');
const equals = document.getElementById('equals');
const nums = document.getElementsByClassName('num');
const ops = document.getElementsByClassName('ops');
const dot = document.getElementById('dot');


function ready(){
    for(let num of nums){
        num.addEventListener('click', () => {
            exp += num.innerText;
            viewer.innerText = exp;
        });
    }

    for(let op of ops){
        op.addEventListener('click', () => {
            if(exp.length == 0 && op.innerText != '-' && op.innerText != '+') return;
            if(isOperationSymbol(lastSymbol()) || lastSymbol() == '.'){
                exp = exp.slice(0, -1);
            }
            exp += op.innerText;
            viewer.innerText = exp;
        });
    }

    dot.addEventListener('click', () => {
        for(let i = exp.length - 1; i > 0; i--){
            if( isOperationSymbol(exp.charAt(i)) ){
                break;
            }
            if(exp.charAt(i) == '.'){
                return;
            }
        }
        if(exp.length == 0 || isOperationSymbol(lastSymbol())) {
            exp += '0';
        }
        exp += '.';
        viewer.innerText = exp;
    });

    clear.addEventListener('click', () => {
        exp = '';
        viewer.innerText = '0';
        result.innerText = '';
    });

    equals.addEventListener('click', () => {
        let res = calc(exp);
        res =  Math.round(res * 100000) / 100000;
        if(isNaN(res)){
            res = "Error";
        }
        result.innerText = res;
    });
}

function isOperationSymbol(symbol){
    if(symbol == '+' || symbol == '-' || symbol == '*' || symbol == '/'){
        return true;
    }
    return false;
}

function calc(expr){
    let result = 0;
    try{
        const tokens = splitTokens(expr);
        const tree = parseTree(tokens);
        console.log(tokens);
        console.log(tree);
        console.log('--------');
        
        result = calculate(tree);
    }catch(e){
        console.log(e);
        alert(e.message)
    }
    return result;
}

function lastSymbol() {
    return exp.length - 1 >= 0 ? exp.charAt(exp.length - 1) : '';
}