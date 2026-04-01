import {
  Client,
  Environment,
  OrdersController,
} from '@paypal/paypal-server-sdk';

let _ordersController: OrdersController | null = null;

export function getOrdersController(): OrdersController {
  if (_ordersController) return _ordersController;

  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error(
      'PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET must be set in environment variables'
    );
  }

  const client = new Client({
    clientCredentialsAuthCredentials: {
      oAuthClientId: clientId,
      oAuthClientSecret: clientSecret,
    },
    environment: Environment.Production,
  });

  _ordersController = new OrdersController(client);
  return _ordersController;
}
