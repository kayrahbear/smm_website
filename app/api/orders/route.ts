import { NextRequest, NextResponse } from 'next/server';
import { CheckoutPaymentIntent } from '@paypal/paypal-server-sdk';
import { getOrdersController } from '@/lib/paypal';

const BOOK_PRICE = 14.99;
const SHIPPING_FLAT = 5.0;
const MAX_QTY = 5;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const quantity = Number(body.quantity);
    const isTest = body.test === true;

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QTY) {
      return NextResponse.json(
        { error: `Quantity must be between 1 and ${MAX_QTY}` },
        { status: 400 }
      );
    }

    const unitPrice = isTest ? 1.0 : BOOK_PRICE;
    const shippingCost = isTest ? 0 : SHIPPING_FLAT;
    const itemTotal = (unitPrice * quantity).toFixed(2);
    const shipping = shippingCost.toFixed(2);
    const total = (unitPrice * quantity + shippingCost).toFixed(2);
    const itemName = isTest
      ? 'TEST — The Great Ghost Mix Up'
      : 'The Great Ghost Mix Up';

    const { result } = await getOrdersController().createOrder({
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
            description: `${itemName} x${quantity}`,
            items: [
              {
                name: itemName,
                description: 'Savannah Manor Mysteries — Book 1',
                unitAmount: { currencyCode: 'USD', value: unitPrice.toFixed(2) },
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
