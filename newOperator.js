/* @osa911 26.04.2018 realisation of "new" operator in JS*/
function newOperator(Constr, args) {
    var thisValue = Object.create(Constr.prototype);
    var result = Constr.apply(thisValue, args);
    if (typeof result === 'object' && result !== null) {
        return result;
    }
    return thisValue;
}
