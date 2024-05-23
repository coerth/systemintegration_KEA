// This is your test secret API key.

import stripePackage from 'stripe';
const stripe = stripePackage('sk_test_51PJXlrRwFLGftQW1kT4F6Hf2G4SVbaX4G5wM8y0znDSCDk7OZxX6SgN8kuH734P1uCQ0GaTjx5XH9N0TX0XWcbk100sYqEVivq')
import express from 'express';
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1PJXpIRwFLGftQW1uvkoUMuK',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('http://localhost:4242/checkout.html'));