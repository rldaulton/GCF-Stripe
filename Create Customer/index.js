var app = require('express')();
var http = require('http').Server(app);
var stripe = require('stripe')(
  "your_stripe_key"
);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//create a customer w/ card on file
exports.createCustomer = app.get(".../:email/:desc/:tok", function createCustomer (req,res){
  var customer = stripe.customers.create({
    email: req.params.email,
    description: req.params.desc,
    card: req.params.tok,
  }, function(err, customer) {
    if(err) {
      return res.send(JSON.stringify(err));
    }
    res.send(customer);
  });
});
