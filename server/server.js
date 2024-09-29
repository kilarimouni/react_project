const express = require('express');
const Stripe = require('stripe');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS middleware   npm install cors
const bodyParser = require('body-parser'); // new line

dotenv.config();

const app = express();
const stripe = Stripe("sk_test_51Pw4zqCfbvsxLfXUc6aYQ6HGPZh9HgrHWUGKWHKH93voUQV9x4bgEHFpnTwvxbRJDri4WZ09Hkj6VMOHgGl81ybR00UU6Xv5qN"); // Use environment variable for Stripe Secret Key

app.use(cors()); // Use CORS middleware
app.use(express.json()); // Parse JSON bodies
app.use(bodyParser.json());

app.get("/", (req, res) =>{
    res.send("heloo iam server")
  })

// Route to create a Payment Intent
app.post('api/payments/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // The amount should be in cents (e.g., $10.00 = 1000 cents)

  try {
    // Create a PaymentIntent with the specified amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // Change the currency as needed
      payment_method_types: ['card'],
    });

    // Send the client secret to the client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

