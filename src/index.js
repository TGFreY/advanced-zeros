module.exports = function getZerosCount(number, base) {

    let zeros = number;
    let tmpBase = base;

    for (let i = 2; i <= base; i++) {
        if (tmpBase % i === 0) {
            let tmpNumber               = number;
            let numberPower             = 0;
            let primeNumCountInDivide   = 0;

            while (tmpBase % i === 0) {
                numberPower++;
                tmpBase = tmpBase / i;
            }

            while (tmpNumber > 0) {
                tmpNumber = Math.floor(tmpNumber / i);
                primeNumCountInDivide += tmpNumber;
            }

            zeros = Math.floor(Math.min(zeros, primeNumCountInDivide / numberPower));
        }
    }
    return zeros;
}
