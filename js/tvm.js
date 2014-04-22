// regular

function tvmPV(fv, n, r) {
    return fv * Math.pow((1 + r), (-(n)));
}

function tvmFV(pv, ir, n) {
    return pv * Math.pow(1+ir, n);
}

function tvmAIR(pv, fv, n) {
    return Math.pow((fv / pv), (1 / n)) - 1;
}

function doubleMoney(r) {
    return Math.log(2) / Math.log(1 + r);
}

function tvmIR(pv, fv, n) {
    return Math.pow((fv / pv), (1 / 10)) - 1;
}

function tvmN(pv, fv, ir) {
    return Math.log(fv / pv) / Math.log(ir + 1);
}

// annuity

function tvmPVad(r, n, pmt) {
	return pmt * ( (1 - ( Math.pow((1 + r), (-(n))) )) / r ) * (1 + r);
}

function tvmPVoa(r, n, pmt) {
    return pmt * ((1 - (Math.pow( (1 + r), (-(n))))) / r);
}

function tvmFVoa(r, n, pmt) {
    return pmt * (((Math.pow((1 + r),n)) - 1) / r);
}

function tvmFVad(r, n, pmt) {
    return pmt * (( Math.pow((1 + r), n) - 1) / r ) * (1 + r);
}

function tvmPMToa(n, r, pv) {
	return pv / (((1 - Math.pow((1 + r), (-(n))))) / r );
}