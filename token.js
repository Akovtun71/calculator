const TokenTypeEnum = {
    OP_PLUS : 0,
    OP_MULT : 1,
    OP_DIV : 2,
    NUMBER : 3
    
}

class Token{
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }

}
