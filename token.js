const TokenTypeEnum = {
    OP_PLUS : 0,
    OP_MINUS : 1,
    OP_MULT : 2,
    OP_DIV : 3,
    NUMBER : 4
    
}

class Token{
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }

    static isOperation(token){
        if(token.type == TokenTypeEnum.OP_PLUS ||
            token.type == TokenTypeEnum.OP_MINUS ||
            token.type == TokenTypeEnum.OP_MULT ||
            token.type == TokenTypeEnum.OP_DIV){
            return true;
        }
        return false;
        
    }
}
