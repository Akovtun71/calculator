function calculate(tokens){
    let result = 0; 
    if (tokens[0].type != TokenTypeEnum.NUMBER){
        throw new Error("Incorrect expression: " + tokens[0].value);
    }
    result = Number.parseFloat(tokens[0].value);
    if(tokens.length < 3) {
        return result;
    }
    tokens.shift();
    const token = tokens[0];
    tokens.shift();
    if (token.type == TokenTypeEnum.OP_PLUS){ 
        result += calculate(tokens); 
    }
    else if (token.type == TokenTypeEnum.OP_MINUS){ 
        result -= calculate(tokens); 
    }
    else if (token.type == TokenTypeEnum.OP_MULT){ 
        result *= calculate(tokens); 
    }
    else if (token.type == TokenTypeEnum.OP_DIV){ 
        result /= calculate(tokens); 
    }
    else {
        throw new Error("Unexpected operation");
    }
    return result;
}