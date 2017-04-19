var app = require('express')();
var http = require('http').Server(app);
var stripe = require('stripe')(
  "your_stripe_key"
);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//add a payment source (card) to customerid
exports.addPaymentSource = app.get("/:customerid/:tok", function addPaymentSource (req,res){
  stripe.customers.createSource(
  req.params.customerid,
  { source: req.params.tok},
  function(err, card) {
    // asynchronously called
    if(err) {
      return res.send(JSON.stringify(err));
    }
    //returns new source id to client
    res.send(JSON.stringify(card["id"]));
  });
});
