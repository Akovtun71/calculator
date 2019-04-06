function calculateNode(tokens){
    let result = 0; 
    if(tokens.value != undefined){
        return Number.parseFloat(tokens.value);
    }
    if(tokens.length == 0) {
        return result;
    }
    

    result = Number.parseFloat(tokens[0].value);

    for(let i = 1; i < tokens.length; i++){
        if(tokens[i++].type == TokenTypeEnum.OP_MULT){
            result *= Number.parseFloat(tokens[i].value);
        }else{
            result /= Number.parseFloat(tokens[i].value);
        }
    }
    return result;
}

function calculate(tree){
    let result = 0;
    for(let i = 0; i < tree.length; i++){
        result += calculateNode(tree[i]);
    }
    return result;
}
