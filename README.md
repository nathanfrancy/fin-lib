# tvm.js
Time value of money (or tvm for short) is a little project that helps you (or a project of yours) calculate finance related calculations. All you need to get started is the minified tvm.min.js (build/js/tvm.min.js) included in your web document. From here, you can incorporate functions in your own javascript, or you can simply run the functions from your browser's console.

Here are a few examples of when you would want to use something like this:
* What is the present value of an investment with a future value of $1,000,000, with a 20 year investment earning 10% interest? This can be solved using: <code>tvmPV(1000000, 20, .1)</code>
* How long would it take to double my money with an 8% interest rate? <code>tvmDoubleMoney(.08)</code>
* What is the future value of an annuity due with $500 payments, for 10 years earning 4% interest? <code>tvmFVad(0.04, 10, 500)</code>

## Documentation

####Returns the present value of an investment.
<code>tvmPV(future value, time, interest rate)</code>

####Returns the future value of an investment.
<code>tvmFV(present value, interest rate, time)</code>

####Returns an estimated annual interest rate
<code>tvmR(present value, future value, time)</code>

####Returns the amount of time (usually years) of the investment
<code>tvmN(present value, future value, interest rate)</code>

####Returns the present value of an ordinary annuity
<code>tvmPVoa(interest rate, time, payment)</code>

####Returns the present value of an annuity due
<code>tvmFVad(interest rate, time, payment)</code>

####Returns the future value of an ordinary annuity
<code>tvmFVoa(interest rate, time, payment)</code>

####Returns the future value of an annuity due
<code>tvmFVad(interest rate, time, payment)</code>

####Returns the payment of an ordinary annuity given the present value
<code>tvmPMToa(time, interest rate, present value)</code>

####Returns the payment of an ordinary annuity given the future value
<code>tvmPMToaF(time, interest rate, present value)</code>

####Returns the present value of an ordinary annuity with a deferral period
<code>tvmPVAoadp(interest rate, time, payment, deferral period)</code>

####Returns the present value of a perpetuity with no deferral period
<code>tvmPVP(payment, interest rate)</code>

####Returns the present value of a perpetuity with a deferral period
<code>tvmPVPdp(interest rate, payment, deferral period)</code>

####Returns the present value of a perpetuity with a deferral period
<code>tvmPVPg(interest rate, payment, growth rate)</code>

####Returns the present value of a growing perpetuity with a deferral period
<code>tvmPVPgdp(interest rate, payment, deferral period, growth rate)</code>

<em>More documentation is on its way as functions are added!</em>
