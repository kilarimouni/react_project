// server.js
// require('dotenv').config();
const express = require('express');
const stripe = require('stripe')('sk_test_51Pw4zqCfbvsxLfXUc6aYQ6HGPZh9HgrHWUGKWHKH93voUQV9x4bgEHFpnTwvxbRJDri4WZ09Hkj6VMOHgGl81ybR00UU6Xv5qN');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) =>{
  res.send("heloo iam online-food-bazar-server")
})

app.post('/api/payments/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

const PORT = 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
