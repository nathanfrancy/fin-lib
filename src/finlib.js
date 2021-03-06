var fin = {
    methods:  [],

    /**
     * Returns present value of an investment
     * @param fv : future value
     * @param n : time
     * @param r : interest rate
     * @returns pv : present value
     */
    pv: function(fv, n, r) {
        if (Array.isArray(fv)) {
            r = fv[2];
            n = fv[1];
            fv = fv[0];
        }
        return fv * Math.pow((1 + r), (-(n)));
    },

    /**
     * Returns the future value of an investment given pv, r, n
     * @param pv : present value
     * @param r : interest rate
     * @param n : time
     * @returns fv : future value
     */
    fv: function(pv, r, n) {
        if (Array.isArray(pv)) {
            n = pv[2];
            r = pv[1];
            pv = pv[0];
        }
        return pv * Math.pow(1 + r, n);
    },

    /**
     * Returns an estimated annual interest rate with pv, fv, n
     * @param pv : present value
     * @param fv : future value
     * @param n : time
     * @returns r : annual interest rate
     */
    r: function(pv, fv, n) {
        if (Array.isArray(pv)) {
            n = pv[2];
            fv = pv[1];
            pv = pv[0];
        }
        return Math.pow((fv / pv), (1 / n)) - 1;
    },

    /**
     * Returns the time of the investment given pv, fv and annual interest rate
     * @param pv : present value
     * @param fv : future value
     * @param r : annual interest rate
     * @returns n : time
     */
    n: function(pv, fv, r) {
        if (Array.isArray(pv)) {
            r = pv[2];
            fv = pv[1];
            pv = pv[0];
        }
        return Math.log(fv / pv) / Math.log(r + 1);
    },

    /**
     * Returns the present value of an ordinary annuity given r, n, pmt
     * @param r : annual interest rate
     * @param n : time
     * @param pmt : payment
     * @returns pv : present value of an ordinary annuity
     */
    pv_oa: function(r, n, pmt) {
        if (Array.isArray(r)) {
            pmt = r[2];
            n = r[1];
            r = r[0];
        }
        return pmt * ((1 - (Math.pow( (1 + r), (-(n))))) / r);
    },

    /**
     * Returns the future value of an ordinary annuity given r, n, pmt
     * @param r : annual interest rate
     * @param n : time
     * @param pmt : payment
     * @returns fv : future value of an ordinary annuity
     */
    fv_oa: function(r, n, pmt) {
        if (Array.isArray(r)) {
            pmt = r[2];
            n = r[1];
            r = r[0];
        }
        return pmt * (((Math.pow((1 + r),n)) - 1) / r);
    },

    /**
     * Returns the present value of an annuity due given an interest rate, time and payment
     * @param r : annual interest rate
     * @param n : time
     * @param pmt : payment
     * @returns pv : present value of an annuity due
     */
    pv_ad: function(r, n, pmt) {
        if (Array.isArray(r)) {
            pmt = r[2];
            n = r[1];
            r = r[0];
        }
        return pmt * ( (1 - ( Math.pow((1 + r), (-(n))) )) / r ) * (1 + r);
    },

    /**
     * Returns the future value of an annuity due given r, n, pmt
     * @param r : annual interest rate
     * @param n : time
     * @param pmt : payment
     * @returns fv : future value of an annuity due
     */
    fv_ad: function(r, n, pmt) {
        if (Array.isArray(r)) {
            pmt = r[2];
            n = r[1];
            r = r[0];
        }
        return pmt * (( Math.pow((1 + r), n) - 1) / r ) * (1 + r);
    },

    /**
     * Returns the payment of an ordinary annuity given present value
     * @param n : time
     * @param r : annual interest rate
     * @param pv : present value of an annuity
     * @returns pmt : payment needed in an ordinary annuity
     */
    pmt_oa_pv: function(n, r, pv) {
        if (Array.isArray(n)) {
            pv = n[2];
            r = n[1];
            n = n[0];
        }
        return pv / (((1 - Math.pow((1 + r), (-(n))))) / r );
    },

    /**
     * Returns the payment of an ordinary annuity given the future value
     * @param n : time
     * @param r : annual interest rate
     * @param fv : future value of the annuity
     * @returns pmt : annual payment of the annuity
     */
    pmt_oa_fv: function(n, r, fv) {
        if (Array.isArray(n)) {
            fv = n[2];
            r = n[1];
            n = n[0];
        }
        return fv / ( ( ( Math.pow( (1 + r), (n) ) ) - 1 ) / r );
    },

    /**
     * Returns the present value of an ordinary annuity with a deferral period
     * @param r : annual interest rate
     * @param n : time
     * @param pmt : size of the payments
     * @param def : deferral period
     * @returns pva : present value of an annuity with deferral period
     */
    pva_oa_d: function(r, n, pmt, def) {
        if (Array.isArray(r)) {
            def = r[3];
            pmt = r[2];
            n = r[1];
            r = r[0];
        }
        return pmt * ( ( 1 - ( Math.pow( (1 + r), -n ) ) ) / r) * ( Math.pow((1 + r),(-def)) );
    },

    /**
     * Returns the present value of a perpetuity with no deferral period
     * @param pmt : payment
     * @param r : annual interest rate
     * @returns pvp : present value of a perpetuity
     */
    pv_p: function(pmt, r) {
        if (Array.isArray(pmt)) {
            r = pmt[1];
            pmt = pmt[0];
        }
        return pmt / r;
    },

    /**
     * Returns the present value of a perpetuity with a deferral period
     * @param r : annual interest rate
     * @param pmt : size of the payments
     * @param def : deferral period
     * @returns pvp : present value of a perpetuity with a deferral period
     */
    pv_p_d: function(r, pmt, def) {
        if (Array.isArray(r)) {
            def = r[2];
            pmt = r[1];
            r = r[0];
        }
        return pmt * (1 / r) * ( Math.pow((1 + r), -(def)) );
    },

    /**
     * Returns the present value of a growing perpetuity
     * @param r : annual interest rate
     * @param pmt : size of the payments
     * @param g : growing rate
     * @returns pvp : present value of a growing perpetuity
     */
    pv_p_g: function(r, pmt, g) {
        if (Array.isArray(r)) {
            g = r[2];
            pmt = r[1];
            r = r[0];
        }
        return pmt / ( r - g );
    },

    /**
     * Returns the present value of a growing perpetuity with a deferral period
     * @param r : annual interest rate
     * @param pmt : size of the payments
     * @param def : deferral period
     * @param g : growing rate
     * @returns pvp : present value of a growing perpetuity
     */
    pv_p_gd: function(r, pmt, def, g) {
        if (Array.isArray(r)) {
            g = r[3];
            def = r[2];
            pmt = r[1];
            r = r[0];
        }
        return pmt * ( 1 / ( r - g ) ) * ( Math.pow( (1 + r), -(def) ) );
    },

    /**
     * Returns the present value of an investment with different number of payments per year, based on a future value
     * @param fv : future value of the investment
     * @param n : time (years)
     * @param m : number of payments per year
     * @param r : nominal or stated annual rate, which will be converted to periodic rate
     * @returns pv : present value of the investment
     */
    pv_mr_fv: function(fv, n, m, r) {
        if (Array.isArray(fv)) {
            r = fv[3];
            m = fv[2];
            n = fv[1];
            fv = fv[0];
        }
        return fv * ( Math.pow( (1 + this.util_periodicRate(r,m) ), -(this.util_payments(m,n)) ) );
    },

    /**
     * Returns the present value of an investment with a given number of payments per year and the payment size
     * @param n : time, years
     * @param m : number of payments per year
     * @param r : annual or stated (nominal) interest rate
     * @param pmt : size of the payment
     * @returns pv : present value of the investment
     */
    pv_mr_pmt: function(n, m, r, pmt) {
        if (Array.isArray(n)) {
            pmt = n[3];
            r = n[2];
            m = n[1];
            n = n[0];
        }
        return pmt * ( ( 1 - ( Math.pow( (1 + this.util_periodicRate(r,m)), -(this.util_payments(m, n)) ) ) ) / this.util_periodicRate(r,m) );
    },

    /**
     * Returns the size of payments given a set number of payments per year and the present value
     * @param pv : present value of the investment
     * @param n : time, years
     * @param m : number of payments per year
     * @param r : annual or stated (nominal) interest rate
     * @returns pmt : size of the payments
     */
    pmt_mr_pv: function(pv, n, m, r) {
        if (Array.isArray(pv)) {
            r = pv[3];
            m = pv[2];
            n = pv[1];
            pv = pv[0];
        }
        return pv / ( ( 1 - ( Math.pow( ( 1 + this.util_periodicRate(r,m) ), -( this.util_payments(m,n) ) ) ) ) / this.util_periodicRate(r,m) );
    },

    /**
     * Returns the future value given a set number of payments per year and the present value
     * @param pv : present value of the investment
     * @param n : time, years
     * @param m : number of payments per year
     * @param r : annual or stated (nominal) interest rate
     * @returns pmt : size of the payments
     */
    fv_mr_pv: function(pv, n, m, r) {
        if (Array.isArray(pv)) {
            r = pv[3];
            m = pv[2];
            n = pv[1];
            pv = pv[0];
        }
        return pv * ( Math.pow( ( 1 + this.util_periodicRate(r, m) ), ( this.util_payments(m,n) ) ) );
    },

    /**
     * Returns the net present value, cash flows different
     * @param i : initial investment (positive value that will be evaluated as negative)
     * @param flows : array of cash flows
     * @param r : discount rate
     */
    npv: function(i, flows, r) {
        if (Array.isArray(i)) {
            r = i[2];
            flows = i[1];
            i = i[0];
        }

        var pvs = [];
        var npv = -(i);
        for (var i=0; i<flows.length; i++) {
            var pv = flows[i]/(Math.pow((1+r),(i+1)));
            pvs.push(pv);
            npv = npv + pv;
        }
        return npv;
    },

    /**
     * Returns the net present value, cash flows same amount
     * @param i : initial investment (positive value that will be evaluated as negative)
     * @param flow_amount : cash flow amount
     * @param flow_times : number of times the flow occurs
     * @param r : discount rate
     */
    npv_sameFlows: function(i, flow_amount, flow_times, r) {
        if (Array.isArray(i)) {
            r = i[3];
            flow_times = i[2];
            flow_amount = i[1];
            i = i[0];
        }

        var pvs = [];
        var npv = -(i);
        for (var i=0; i<flow_times; i++) {
            var pv = flow_amount/(Math.pow((1+r),(i+1)));
            pvs.push(pv);
            npv = npv + pv;
        }
        return npv;
    },

    /**
     * Returns the simple interest earned
     * @param p : principal amount
     * @param r : interest rate
     * @param t : number of periods
     */
    simpleInterest: function(p, r, t) {
        if (Array.isArray(p)) {
            t = p[2];
            r = p[1];
            p = p[0];
        }
        return p * r * t;
    },

    /**
     * Returns the compound interest earned
     * @param p : principal amount
     * @param r : interest rate
     * @param m : compoundings per period
     * @param t : number of periods
     */
    compoundInterest: function(p, r, m, t) {
        if (Array.isArray(p)) {
            t = p[3];
            m = p[2];
            r = p[1];
            p = p[0];
        }
        return p * Math.pow((1 + (r/m)), m*t);
    },

    /******************************************************************
     UTIL functions
     ******************************************************************/

    /**
     * Returns the time (n) it will take to double your money given an annual interest rate
     * @param r : annual interest rate
     * @returns n : time
     */
    util_doubleMoney: function(r) {
        if (Array.isArray(r)) {
            r = r[0];
        }
        return Math.log(2) / Math.log(1 + r);
    },

    /**
     * Returns the periodic rate given the nominal (stated) annual rate and number of payments per year
     * @param r : nominal or stated annual rate of interest
     * @param m : number of payments per year
     * @returns r : periodic interest rate (interest per m period)
     */
    util_periodicRate: function(r, m) {
        if (Array.isArray(r)) {
            m = r[1];
            r = r[0];
        }
        return r / m;
    },

    /**
     * Returns the total number of payments given years and payments per year
     * @param m : number of payments per year
     * @param n : time, or number of years
     * @returns mn : total number of payments through the life
     */
    util_payments: function(m, n) {
        if (Array.isArray(m)) {
            n = m[1];
            m = m[0];
        }
        return m * n;
    },

    /**
     * Returns the effective interest rate given a nominal or stated interest rate and payments per year
     * @param r : annual, or stated (nominal) interest rate
     * @param m : number of payments per year
     * @returns r(effective) : effective interest rate
     */
    util_effectiveRate: function(r, m) {
        if (Array.isArray(m)) {
            r = m[1];
            m = m[0];
        }
        return ( Math.pow( ( 1 + this.util_periodicRate(r,m) ), ( m ) ) ) - 1;
    },

    /**
     * Utility function to format the dollar amount
     */
    util_formatDollar: function(amount) {
        if (Array.isArray(amount)) {
            amount = amount[0];
        }
        return "$ " + ( Math.round(amount * 100) / 100);
    },

    /**
     * Return all methods of the TVM object
     */
    allMethods: function() {
        for (var m in this) {
            if (typeof this[m] == "function" && this.hasOwnProperty(m)) {
                this.methods.push(m);
            }
        }
        return this.methods;
    }
};

/*
 Source for many of these formulas: http://www.businessinsider.com/11-personal-finance-equations-you-need-to-know-2012-7?op=1 */

