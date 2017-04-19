var app = require('express')();
var http = require('http').Server(app);
var stripe = require('stripe')(
  "your_stripe_key"
);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//update a card by deleting & replacing
exports.updatePaymentSource = app.get("/:customerid/:oldsourceid/:newsourcetoken", function updatePaymentSource (req,res){
	stripe.customers.deleteCard(
  		req.params.customerid,
  		req.params.oldsource,
  	function(err, confirmation) {
		if(err) {
      		return res.send(JSON.stringify(err));
    	}
//codebeat:disable
    	stripe.customers.createSource(
  			req.params.customerid,
  		{ source: req.params.newsource },
  		function(err, card) {
			if(err) {
      			return res.send(JSON.stringify(err));
    		}
          //returns the new source id only
          res.send(JSON.stringify(card["id"]));
        });
//codebeat:enable
  	});
});
