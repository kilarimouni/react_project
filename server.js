const express = require('express');
const Stripe = require('stripe');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS middleware   npm install cors

dotenv.config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Use environment variable for Stripe Secret Key

app.use(cors()); // Use CORS middleware
app.use(express.json()); // Parse JSON bodies

// Route to create a Payment Intent
app.post('/api/payments/create-payment-intent', async (req, res) => {
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// PAYMENT DHI JS OPEN CHEY HELLO.......................................................................
