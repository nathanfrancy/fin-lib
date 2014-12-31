# tvm.js
Time value of money (or tvm for short) is a little project that helps you (or a project of yours) calculate finance related calculations. All you need to get started is the minified tvm.min.js (dist/tvm.min.js) included in your web document. From here, you can incorporate functions in your own javascript, or you can simply run the functions from your browser's console.

##How's it work?
The library is implemented through the `TVM` object, and will return the needed data by using methods within. Simply run `TVM.methodName()` for results.

Here are a few examples of when you would want to use something like this:
* What is the present value of an investment with a future value of $1,000,000, with a 20 year investment earning 10% interest? This can be solved using: `TVM.pv(1000000, 20, .1)`
* How long would it take to double my money with an 8% interest rate? `TVM.util_doubleMoney(.08)`
* What is the future value of an annuity due with $500 payments, for 10 years earning 4% interest? `TVM.fv_ad(0.04, 10, 500)`

##Documentation
For further documentation, please refer to the [demo site](http://nathanfrancy.github.io/tvm/).
