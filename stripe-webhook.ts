import { buffer } from 'micro';
import type { NextApiRequest, NextApiResponse } from 'next';
import stripe from '../../lib/stripe';

export const config = { api: { bodyParser: false } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sig = req.headers['stripe-signature'] || '';
  const buf = await buffer(req);
  try {
    const event = stripe.webhooks.constructEvent(buf.toString(), sig as string, process.env.STRIPE_WEBHOOK_SECRET || '');
    console.log('Webhook event:', event.type);
    res.json({ received: true });
  } catch (err) {
    console.error('Webhook error', err);
    res.status(400).send(`Webhook error: ${err}`);
  }
}
