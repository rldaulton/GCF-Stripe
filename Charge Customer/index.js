var app = require('express')();
var http = require('http').Server(app);
var stripe = require('stripe')(
  "your_stripe_key"
);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//create a customer w/ card on file
exports.chargeCustomer = app.get(".../charge/:customerid/:token/:amount", function chargeCustomer (req,res){
  stripe.charges.create({
    customer: req.params.customerid,
    source: req.params.token,
    currency: 'usd',
    amount:req.params.amount
  },function(err, charge) {
    if(err) {
      return res.send(JSON.stringify(err));
    }
    res.send(JSON.stringify(charge));
  });
});
