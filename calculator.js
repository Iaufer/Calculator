const OPERATION = {
    sum: '+',
    subs: '-',
    mul: '*',
    div: '/'
}


function calculate({a, b, operation}){
    let result = null;

    switch (operation){
        case OPERATION.sum:
            result = sum(a, b)
            break
        case OPERATION.subs:
            result = subs(a, b)
            break
        case OPERATION.mul:
            result = mul(a, b)
            break
        case OPERATION.div:
            result = div(a, b)
            break
        default:
            break;
    }

    return result;
}