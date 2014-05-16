/**
 * Returns present value of an investment
 * @param fv : future value
 * @param n : time
 * @param r : interest rate
 * @returns pv : present value
 */
function tvmPV(fv, n, r) {
    return fv * Math.pow((1 + r), (-(n)));
}

/**
 * Returns the future value of an investment given pv, r, n
 * @param pv : present value
 * @param r : interest rate
 * @param n : time
 * @returns fv : future value
 */
function tvmFV(pv, r, n) {
    return pv * Math.pow(1 + r, n);
}

/**
 * Returns an estimated annual interest rate with pv, fv, n
 * @param pv : present value
 * @param fv : future value
 * @param n : time
 * @returns r : annual interest rate
 */
function tvmR(pv, fv, n) {
    return Math.pow((fv / pv), (1 / n)) - 1;
}

/**
 * Returns the time (n) it will take to double your money given an annual interest rate
 * @param r : annual interest rate
 * @returns n : time
 */
function tvmDoubleMoney(r) {
    return Math.log(2) / Math.log(1 + r);
}

/**
 * Returns the time of the investment given pv, fv and annual interest rate
 * @param pv : present value
 * @param fv : future value
 * @param r : annual interest rate
 * @returns n : time
 */
function tvmN(pv, fv, r) {
    return Math.log(fv / pv) / Math.log(r + 1);
}

/**
 * Returns the present value of an ordinary annuity given r, n, pmt
 * @param r : annual interest rate
 * @param n : time
 * @param pmt : payment
 * @returns pv : present value of an ordinary annuity
 */
function tvmPVoa(r, n, pmt) {
    return pmt * ((1 - (Math.pow( (1 + r), (-(n))))) / r);
}

/**
 * Returns the future value of an ordinary annuity given r, n, pmt
 * @param r : annual interest rate
 * @param n : time
 * @param pmt : payment
 * @returns fv : future value of an ordinary annuity
 */
function tvmFVoa(r, n, pmt) {
    return pmt * (((Math.pow((1 + r),n)) - 1) / r);
}

/**
 * Returns the present value of an annuity due given an interest rate, time and payment
 * @param r : annual interest rate
 * @param n : time
 * @param pmt : payment
 * @returns pv : present value of an annuity due
 */
function tvmPVad(r, n, pmt) {
	return pmt * ( (1 - ( Math.pow((1 + r), (-(n))) )) / r ) * (1 + r);
}

/**
 * Returns the future value of an annuity due given r, n, pmt
 * @param r : annual interest rate
 * @param n : time
 * @param pmt : payment
 * @returns fv : future value of an annuity due
 */
function tvmFVad(r, n, pmt) {
    return pmt * (( Math.pow((1 + r), n) - 1) / r ) * (1 + r);
}

/**
 * Returns the payment of an ordinary annuity given n, r, pv
 * @param n : time
 * @param r : annual interest rate
 * @param pv : present value of an annuity
 * @returns pmt : payment needed in an ordinary annuity
 */
function tvmPMToa(n, r, pv) {
	return pv / (((1 - Math.pow((1 + r), (-(n))))) / r );
}

/**
 * Returns the payment of an ordinary annuity given the future value
 * @param n : time
 * @param r : annual interest rate
 * @param fv : future value of the annuity
 * @returns pmt : annual payment of the annuity
 */
function tvmPMToaF(n, r, fv) {
    return fv / ( ( ( Math.pow( (1 + r), (n) ) ) - 1 ) / r );
}

/**
 * Returns the present value of an ordinary annuity with a deferral period
 * @param r : annual interest rate
 * @param n : time
 * @param pmt : size of the payments
 * @param def : deferral period
 * @returns pva : present value of an annuity with deferral period
 */
function tvmPVAoadp(r, n, pmt, def) {
    return pmt * ( ( 1 - ( Math.pow( (1 + r), -n ) ) ) / r) * ( Math.pow((1 + r),(-def)) );
}

/**
 * Returns the present value of a perpetuity with no deferral period
 * @param pmt : payment
 * @param r : annual interest rate
 * @returns pvp : present value of a perpetuity
 */
function tvmPVP(pmt, r) {
    return pmt / r;
}

/**
 * Returns the present value of a perpetuity with a deferral period
 * @param r : annual interest rate
 * @param pmt : size of the payments
 * @param def : deferral period
 * @returns pvp : present value of a perpetuity with a deferral period
 */
function tvmPVPdp(r, pmt, def) {
    return pmt * (1 / r) * ( Math.pow((1 + r), -(def)) );
}

/**
 * Returns the present value of a perpetuity with a deferral period
 * @param r : annual interest rate
 * @param pmt : size of the payments
 * @param g : growing rate
 * @returns pvp : present value of a growing perpetuity
 */
function tvmPVPg(r, pmt, g) {
    return pmt / ( r - g );
}

/**
 * Returns the present value of a growing perpetuity with a deferral period
 * @param r : annual interest rate
 * @param pmt : size of the payments
 * @param def : deferral period
 * @param g : growing rate
 * @returns pvp : present value of a growing perpetuity
 */
function tvmPVPgdp(r, pmt, def, g) {
    return pmt * ( 1 / ( r - g ) ) * ( Math.pow( (1 + r), -(def) ) );
}

/**
 * Returns the present value of an investment with different number of payments per year, based on a future value
 * @param fv : future value of the investment
 * @param n : time (years)
 * @param m : number of payments per year 
 * @param r : nominal or stated annual rate, which will be converted to periodic rate
 * @returns pv : present value of the investment
 */
function tvmPVmrF(fv, n, m, r) {
    return fv * ( Math.pow( (1 + tvmUtilPeriodicRate(r,m) ), -(tvmUtilPayments(m,n)) ) );
}

/**
 * Returns the present value of an investment with a given number of payments per year and the payment size
 * @param n : time, years
 * @param m : number of payments per year
 * @param r : annual or stated (nominal) interest rate
 * @param pmt : size of the payment
 * @returns pv : present value of the investment
 */
function tvmPVmrPMT(n, m, r, pmt) {
    return pmt * ( ( 1 - ( Math.pow( (1 + tvmUtilPeriodicRate(r,m)), -(tvmUtilPayments(m, n)) ) ) ) / tvmUtilPeriodicRate(r,m) );
}

/**
 * Returns the size of payments given a set number of payments per year and the present value
 * @param pv : present value of the investment
 * @param n : time, years
 * @param m : number of payments per year
 * @param r : annual or stated (nominal) interest rate
 * @returns pmt : size of the payments
 */
function tvmPMTmrP(pv, n, m, r) {
    return pv / ( ( 1 - ( Math.pow( ( 1 + tvmUtilPeriodicRate(r,m) ), -( tvmUtilPayments(m,n) ) ) ) ) / tvmUtilPeriodicRate(r,m) );
}

/**
 * Returns the future value given a set number of payments per year and the present value
 * @param pv : present value of the investment
 * @param n : time, years
 * @param m : number of payments per year
 * @param r : annual or stated (nominal) interest rate
 * @returns pmt : size of the payments
 */
function tvmFVmrP(pv, n, m, r) {
    return pv * ( Math.pow( ( 1 + tvmUtilPeriodicRate(r, m) ), ( tvmUtilPayments(m,n) ) ) );
}

/******************************************************************
UTIL functions
******************************************************************/

/**
 * Returns the periodic rate given the nominal (stated) annual rate and number of payments per year
 * @param r : nominal or stated annual rate of interest
 * @param m : number of payments per year
 * @returns r : periodic interest rate (interest per m period)
 */
function tvmUtilPeriodicRate(r, m) {
    return r / m;
}

/**
 * Returns the total number of payments given years and payments per year
 * @param m : number of payments per year
 * @param n : time, or number of years
 * @returns mn : total number of payments through the life
 */
function tvmUtilPayments(m, n) {
    return m * n;
}

/**
 * Returns the effective interest rate given a nominal or stated interest rate and payments per year
 * @param r : annual, or stated (nominal) interest rate
 * @param m : number of payments per year
 * @returns r(effective) : effective interest rate
 */
function tvmUtilEffectiveRate(r, m) {
    return ( Math.pow( ( 1 + tvmUtilPeriodicRate(r,m) ), ( m ) ) ) - 1;
}


function tvmUtilDollar(amount) {
    return "$ " + ( Math.round(amount * 100) / 100);
}
