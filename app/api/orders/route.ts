import { NextRequest, NextResponse } from 'next/server';
import { CheckoutPaymentIntent } from '@paypal/paypal-server-sdk';
import { ordersController } from '@/lib/paypal';

const BOOK_PRICE = 14.99;
const SHIPPING_FLAT = 5.0;
const MAX_QTY = 5;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const quantity = Number(body.quantity);

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QTY) {
      return NextResponse.json(
        { error: `Quantity must be between 1 and ${MAX_QTY}` },
        { status: 400 }
      );
    }

    const itemTotal = (BOOK_PRICE * quantity).toFixed(2);
    const shipping = SHIPPING_FLAT.toFixed(2);
    const total = (BOOK_PRICE * quantity + SHIPPING_FLAT).toFixed(2);

    const { result } = await ordersController.createOrder({
      body: {
        intent: CheckoutPaymentIntent.Capture,
        purchaseUnits: [
          {
            amount: {
              currencyCode: 'USD',
              value: total,
              breakdown: {
                itemTotal: { currencyCode: 'USD', value: itemTotal },
                shipping: { currencyCode: 'USD', value: shipping },
              },
            },
            description: `The Great Ghost Mix Up x${quantity}`,
            items: [
              {
                name: 'The Great Ghost Mix Up',
                description: 'Savannah Manor Mysteries — Book 1',
                unitAmount: { currencyCode: 'USD', value: BOOK_PRICE.toFixed(2) },
                quantity: String(quantity),
              },
            ],
          },
        ],
      },
      prefer: 'return=minimal',
    });

    return NextResponse.json({ id: result.id });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to create order';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
