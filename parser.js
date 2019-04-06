
function parseTree(tokens){
    const res = [];
    for(let i = 0; i < tokens.length; i++){
        const nodes = [];
        while(i < tokens.length && tokens[i].type != TokenTypeEnum.OP_PLUS){
            nodes.push(tokens[i++]);
        }
        res.push(nodes);
    }
    return res;
}