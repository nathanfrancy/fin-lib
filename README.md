# fin-lib
This is a library that can be used both in the browser and for node.js. It does financial calculations for time, value, money.

## In the browser
All you need is the `dist/finlib.min.js` to run the functions that are available.

The library is implemented through the `fin` object, and will return the needed data by using methods within. Simply run `fin.methodName(arguments)` for a return value. You will want to make sure and include all required parameters, or it may git unexpected results.

## In node.js
You need to install the plugin either locally or globally. 

```bash 
npm install --save fin-lib
```

From there, import the library into the desired file.

```javascript
var fin = require('fin-lib');
```

From here, you can use the library to run `fin.methodName(arguments)` to get results back.

## Examples
Here are a few examples of when you would want to use something like this:

* What is the present value of an investment with a future value of $1,000,000, with a 20 year investment earning 10% interest? This can be solved using: `fin.pv(1000000, 20, .1)`
* How long would it take to double my money with an 8% interest rate? `fin.util_doubleMoney(.08)`
* What is the future value of an annuity due with $500 payments, for 10 years earning 4% interest? `fin.fv_ad(0.04, 10, 500)`

## Documentation
For further documentation of all the different functions that can be called, please refer to the [demo site](http://nathanfrancy.github.io/fin-lib/).
