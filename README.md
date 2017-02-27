![logo](Screenshots/GCF-Stripe.png)

### Containerize and flatten your payment processing server into microservices using GCF.

[![License](https://img.shields.io/cocoapods/l/Neon.svg)](http://doge.mit-license.org)

`GCF-Stripe`is a serverless implementation of basic Stripe requests using Google Cloud Functions as containerized microservices. This repo is design to help those just beginning with Google's Cloud Platform to get some basic services up and running on the Cloud Function product.

Check out the folders in the `master` branch where you'll find different requests ready to be dropped into your Google Cloud Functions.

<h3>Getting Started</h3>
1.) Visit the [Google Cloud Functions](https://cloud.google.com/functions/) welcome page, and click "Sign Up for Alpha". You need your account whitelisted by Google in order to use Cloud Functions in beta. See [this thread](https://github.com/apex/apex/issues/232) for more details if you have trouble getting access.

2.) Once whitelisted and logged in to your Cloud Platform Console, select the hamburger menu on the left, and enter the "Cloud Functions" management section. 

![gcf-menu](Screenshots/gcf-menu.png)

3.) From here, you will create a new cloud function, ensuring to select `HTTP Trigger` as the Trigger option. 

4.) Select `Inline Editor` under the Source code option, or upload your your own versiobn, using the code supplied in this repo. 

5.) Once deployed, use your client to call the endpoint for your function & supply the correct [parameters encoded](https://github.com/rldaulton/GCF-Stripe/blob/96fc38fc0220aee9a0ecaee718a8b0edf1db18d8/Charge%20Customer/index.js#L12) in the `URL` to interact with the Stripe API. 

Happy serverless computing!


<h3>Support</h3>
- For support and help getting your Google Cloud Functions up an running, take a look at their [Quickstart](https://cloud.google.com/functions/docs/quickstart) page.
- For help specifically with `HTTP Triggers` on your functions, check out the [HTTP Tutorial](https://cloud.google.com/functions/docs/tutorials/http).
- Be sure to check out the [writing HTTP cloud functions](https://cloud.google.com/functions/docs/writing/http) section for help and formatting, should you have any trouble.

For specific support regarding the Stripe functionality of the repo, see the respective sections below for Stripe's `Node JS` [API Docs](https://stripe.com/docs/api):

[<h5>Creating a Customer</h5>](https://stripe.com/docs/api#create_customer)

[<h5>Initiating a Charge</h5>](https://stripe.com/docs/api#create_charge)

[<h5>Subscribe Customer to Payment Plan</h5>](https://stripe.com/docs/api#create_subscription)

[<h5>UNsubscribe Customer from Payment Plan</h5>](https://stripe.com/docs/api#cancel_subscription)


<h4>Author</h4>
[@rldaulton](https://ryandaulton.com)
