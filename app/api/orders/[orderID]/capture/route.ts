import { NextResponse } from 'next/server';
import { getOrdersController } from '@/lib/paypal';

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ orderID: string }> }
) {
  const { orderID } = await params;

  try {
    const { result } = await getOrdersController().captureOrder({
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
