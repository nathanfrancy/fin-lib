# tvm.js
Time value of money (or tvm for short) is a little project that helps you (or a project of yours) calculate finance related calculations. All you need to get started is the minified tvm.min.js (build/js/tvm.min.js) included in your web document. From here, you can incorporate functions in your own javascript, or you can simply run the functions from your browser's console.

Here are a few examples of when you would want to use something like this:
* What is the present value of an investment with a future value of $1,000,000, with a 20 year investment earning 10% interest? This can be solved using: <code>tvmPV(1000000, 20, .1)</code>
* How long would it take to double my money with an 8% interest rate? <code>tvmDoubleMoney(.08)</code>
* What is the future value of an annuity due with $500 payments, for 10 years earning 4% interest? <code>tvmFVad(0.04, 10, 500)</code>

## Documentation

####tvmPV(future value, time, interest rate)
Returns the present value of an investment.

####tvmFV(present value, interest rate, time)
Returns the future value of an investment.

####tvmR(present value, future value, time)
Returns an estimated annual interest rate

####tvmN(present value, future value, interest rate)
Returns the amount of time (usually years) of the investment

####tvmPVoa(interest rate, time, payment)
Returns the present value of an ordinary annuity

####tvmFVad(interest rate, time, payment) 
Returns the present value of an annuity due

####tvmFVoa(interest rate, time, payment) 
Returns the future value of an ordinary annuity

####tvmFVad(interest rate, time, payment)
Returns the future value of an annuity due

####tvmPMToa(time, interest rate, present value) 
Returns the payment of an ordinary annuity given the present value

####tvmPMToaf(time, interest rate, present value) 
Returns the payment of an ordinary annuity fiven the future value

<em>More documentation is on its way as functions are added!</em>
