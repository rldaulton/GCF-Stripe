var app = require('express')();
var http = require('http').Server(app);
var stripe = require('stripe')(
  "your_stripe_key"
);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//unsubscribe a customer from a plan
exports.unsubscribeCustomer = app.get("/:customerid", function unsubscribeCustomer (req,res){
  stripe.customers.cancelSubscription(
      req.params.customerid,
      "sub_XXXXXXXXXXXX",
    function(err, confirmation) {
      if(err) {
        return res.send(JSON.stringify(err));
      }
      res.send(JSON.stringify(confirmation));
  });
});
