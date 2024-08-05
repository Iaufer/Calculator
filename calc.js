const OPERATION = {
    sum: '+',
    subs: '-',
    mul: '*',
    div: '/'
}


function calc({a, b, operation}){
    let result = null;

    switch (operation){
        case OPERATION.sum:
            result = sum(a, b)
        case OPERATION.subs:
            result = subs(a, b)
        case OPERATION.mul:
            result = mul(a, b)
        case OPERATION.div:
            result = div(a, b)
        default:
            break;
    }

    return result;
}