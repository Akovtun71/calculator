
function splitTokens(str){
    let ch;
    let tokens = [];
    for(let i = 0; i < str.length; i++){
        ch = str.charAt(i);
        if(isDecimal(ch) || ch == '-' ){
            let token = new Token(TokenTypeEnum.NUMBER, '');
            if(ch == '-'){
                tokens.push(new Token(TokenTypeEnum.OP_PLUS, '+'));
                token.value += '-';
                ch = str.charAt(++i);
            }
            let isDot = false;
            while(isDecimal(ch) || ch == '.'){
                if(ch == '.'){
                    if(isDot){
                        throw new Error("Double dots in number"); 
                    }
                    isDot = true;
                }
                token.value += ch;
                ch = str.charAt(++i);
            }
            i--;
            tokens.push(token);
        }else if(ch == '+'){
            tokens.push(new Token(TokenTypeEnum.OP_PLUS, '+'));
        }else if(ch == '*'){
            tokens.push(new Token(TokenTypeEnum.OP_MULT, '*'));
        }else if(ch == '/'){
            tokens.push(new Token(TokenTypeEnum.OP_DIV, '/'));
        }else{
            throw new Error("Unexpected symbol: " + ch); 
        }
    }
    return tokens;
}

function isDecimal(ch){
    return ch == '0' || ch == '1' || ch == '2' || ch == '3' || ch == '4' || ch == '5' || ch == '6' || ch == '7' || ch == '8' || ch == '9';
}
