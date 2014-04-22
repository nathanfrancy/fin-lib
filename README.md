# tvm.js
Time value of money (or tvm for short) is a little project that helps you (or a project of yours) calculate finance related calculations. All you need to get started is the minified tvm.js (build/js/tvm.min.js) included in your document. From here, you can embed a form to use one of the functions, or you can simply run the functions from the browser console if that's all you need.

Here are a few examples of when you would want to use something like this:
* What is the present value of an investment with a future value of $1,000,000, with a 20 year investment earning 10% interest?
<pre><code>tvmPV(1000000, 20, .1)</code></pre>
* How long would it take to double my money with an 8% interest rate?
<pre><code>doubleMoney(.08)</code></pre>
* What is the future value of an annuity due with $500 payments, for 10 years earning 4% interest?
<pre><code>tvmFVad(0.04, 10, 500)</code></pre>

## Documentation
<em>Documentation is on its way!</em>
