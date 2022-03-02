const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors"); 
const stripe = require("stripe")("sk_test_51KIbZlSD15P0Ukwq4vkGSIQHrcUqXHePqm7LOMrxoP35w0AU28gANstYL5TGizQ1x5FvmBTOr9DoAN5pR3gxP0lc00yARsGZby");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world!!!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/project-23930/us-central1/api