import Stripe from 'stripe';

const stripe = new Stripe( 'STRIPE_SECRET_KEY' );


export default async function handler(req: { method: string; headers: { origin: any; }; body: { items: any[]; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id?: string; error?: any; }): void; new(): any; }; end: { (arg0: string): void; new(): any; }; }; setHeader: (arg0: string, arg1: string[]) => void; }) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
        line_items: req.body.items.map((item) => ({
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100, // Convert to cents
          },
          quantity: item.quantity,
        })),
      });

      res.status(200).json({ id: session.id });
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
