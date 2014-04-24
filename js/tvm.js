/**
 * Returns present value of an investment
 * @param {Decimal} fv : future value
 * @param {Decimal} n : time
 * @param {Decimal} r : interest rate
 * @returns {Decimal} pv : present value
 */
function tvmPV(fv, n, r) {
    return fv * Math.pow((1 + r), (-(n)));
}

/**
 * Returns the future value of an investment given pv, r, n
 * @param {Decimal} pv : present value
 * @param {Decimal} r : interest rate
 * @param {Decimal} n : time
 * @returns {Decimal} fv : future value
 */
function tvmFV(pv, r, n) {
    return pv * Math.pow(1 + r, n);
}

/**
 * Returns an estimated annual interest rate with pv, fv, n
 * @param {Decimal} pv : present value
 * @param {Decimal} fv : future value
 * @param {Decimal} n : time
 * @returns {Decimal} r : annual interest rate
 */
function tvmR(pv, fv, n) {
    return Math.pow((fv / pv), (1 / n)) - 1;
}

/**
 * Returns the time (n) it will take to double your money given an annual interest rate
 * @param {Decimal} r : annual interest rate
 * @returns {Decimal} n : time
 */
function tvmDoubleMoney(r) {
    return Math.log(2) / Math.log(1 + r);
}

/**
 * Returns the time of the investment given pv, fv and annual interest rate
 * @param {Decimal} pv : present value
 * @param {Decimal} fv : future value
 * @param {Decimal} r : annual interest rate
 * @returns {Decimal} n : time
 */
function tvmN(pv, fv, r) {
    return Math.log(fv / pv) / Math.log(r + 1);
}

/**
 * Returns the present value of an ordinary annuity given r, n, pmt
 * @param {Decimal} r : annual interest rate
 * @param {Decimal} n : time
 * @param {Decimal} pmt : payment
 * @returns {Decimal} pv : present value of an ordinary annuity
 */
function tvmPVoa(r, n, pmt) {
    return pmt * ((1 - (Math.pow( (1 + r), (-(n))))) / r);
}

/**
 * Returns the future value of an ordinary annuity given r, n, pmt
 * @param {Decimal} r : annual interest rate
 * @param {Decimal} n : time
 * @param {Decimal} pmt : payment
 * @returns {Decimal} fv : future value of an ordinary annuity
 */
function tvmFVoa(r, n, pmt) {
    return pmt * (((Math.pow((1 + r),n)) - 1) / r);
}

/**
 * Returns the present value of an annuity due given an interest rate, time and payment
 * @param {Decimal} r : annual interest rate
 * @param {Decimal} n : time
 * @param {Decimal} pmt : payment
 * @returns {Decimal} pv : present value of an annuity due
 */
function tvmPVad(r, n, pmt) {
	return pmt * ( (1 - ( Math.pow((1 + r), (-(n))) )) / r ) * (1 + r);
}

/**
 * Returns the future value of an annuity due given r, n, pmt
 * @param {Decimal} r : annual interest rate
 * @param {Decimal} n : time
 * @param {Decimal} pmt : payment
 * @returns {Decimal} fv : future value of an annuity due
 */
function tvmFVad(r, n, pmt) {
    return pmt * (( Math.pow((1 + r), n) - 1) / r ) * (1 + r);
}

/**
 * Returns the payment of an ordinary annuity given n, r, pv
 * @param {Decimal} n : time
 * @param {Decimal} r : annual interest rate
 * @param {Decimal} pv : present value of an annuity
 * @returns {Decimal} pmt : payment needed in an ordinary annuity
 */
function tvmPMToa(n, r, pv) {
	return pv / (((1 - Math.pow((1 + r), (-(n))))) / r );
}

/**
 * Returns the payment of an ordinary annuity given the future value
 * @param {Decimal} n : time
 * @param {Decimal} r : annual rate of return
 * @param {Decimal} fv : future value of the annuity
 * @returns {Decimal} pmt : annual payment of the annuity
 */
function tvmPMToaF(n, r, fv) {
    return fv / ( ( ( Math.pow( (1 + r), (n) ) ) - 1 ) / r );
}

function tvmPVAoadp {
    return null;
}