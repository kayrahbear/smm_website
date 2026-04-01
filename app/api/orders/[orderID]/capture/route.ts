import { NextResponse } from 'next/server';
import { ordersController } from '@/lib/paypal';

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ orderID: string }> }
) {
  const { orderID } = await params;

  try {
    const { result } = await ordersController.captureOrder({
      id: orderID,
      prefer: 'return=minimal',
    });

    return NextResponse.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to capture payment';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
