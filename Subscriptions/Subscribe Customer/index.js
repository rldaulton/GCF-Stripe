var app = require('express')();
var http = require('http').Server(app);
var stripe = require('stripe')(
  "your_stripe_key"
);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//subscribe a customer to a plan
exports.subscribeCustomer = app.get("/:customerid", function subscribeCustomer (req,res){
  stripe.subscriptions.create({
    customer: req.params.customerid,
    plan: "your-plan-name",
  }, function(err, subscription) {
    if(err) {
      return res.send(JSON.stringify(err));
    }
    res.send(JSON.stringify(subscription));
  });
});
