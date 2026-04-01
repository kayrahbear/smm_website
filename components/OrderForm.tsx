'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const BOOK_PRICE = 14.99;
const SHIPPING_FLAT = 5.0;
const MAX_QTY = 5;

type CheckoutStatus = 'idle' | 'loading' | 'success' | 'error';

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: {
        style?: Record<string, string>;
        createOrder: () => Promise<string>;
        onApprove: (data: { orderID: string }) => Promise<void>;
        onError: (err: unknown) => void;
      }) => {
        render: (selector: string | HTMLElement) => Promise<void>;
      };
    };
  }
}

interface OrderFormProps {
  clientId: string;
}

export default function OrderForm({ clientId }: OrderFormProps) {
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState<CheckoutStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const renderedRef = useRef(false);
  const quantityRef = useRef(quantity);

  const subtotal = BOOK_PRICE * quantity;
  const total = subtotal + SHIPPING_FLAT;

  // Keep ref in sync so the PayPal callback always reads the latest quantity
  useEffect(() => {
    quantityRef.current = quantity;
  }, [quantity]);

  const handleDecrement = useCallback(() => {
    setQuantity((q) => Math.max(1, q - 1));
  }, []);

  const handleIncrement = useCallback(() => {
    setQuantity((q) => Math.min(MAX_QTY, q + 1));
  }, []);

  // Load PayPal SDK and render buttons once
  useEffect(() => {
    if (renderedRef.current) return;

    const existingScript = document.querySelector(
      'script[src*="paypal.com/sdk/js"]'
    );
    if (existingScript) {
      renderButtons();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&components=buttons&enable-funding=venmo,card&disable-funding=paylater`;
    script.setAttribute('data-sdk-integration-source', 'developer-studio');
    script.async = true;
    script.onload = renderButtons;
    script.onerror = () => {
      setStatus('error');
      setErrorMessage('Failed to load PayPal. Please refresh and try again.');
    };
    document.head.appendChild(script);

    function renderButtons() {
      if (!window.paypal || !containerRef.current || renderedRef.current) return;
      renderedRef.current = true;

      window.paypal
        .Buttons({
          style: {
            shape: 'pill',
            layout: 'vertical',
            label: 'pay',
          },
          createOrder: async () => {
            setStatus('loading');
            const res = await fetch('/api/orders', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ quantity: quantityRef.current }),
            });
            const data = await res.json();

            if (!res.ok || !data.id) {
              throw new Error(data.error ?? 'Failed to create order');
            }

            return data.id;
          },
          onApprove: async (data) => {
            const res = await fetch(
              `/api/orders/${data.orderID}/capture`,
              { method: 'POST' }
            );
            const captureData = await res.json();

            if (!res.ok || captureData.error) {
              setStatus('error');
              setErrorMessage(
                captureData.error ?? 'Payment could not be completed.'
              );
              return;
            }

            setStatus('success');
          },
          onError: (err) => {
            setStatus('error');
            setErrorMessage(
              err instanceof Error
                ? err.message
                : 'Something went wrong. Please try again.'
            );
          },
        })
        .render(containerRef.current!);
    }
  }, [clientId]);

  if (status === 'success') {
    return (
      <div className="or-checkout-message or-checkout-message--success">
        <span className="or-checkout-icon" aria-hidden="true">&#x2705;</span>
        <h3 className="or-checkout-heading">Thank you for your order!</h3>
        <p className="or-checkout-text">
          Your {quantityRef.current === 1 ? 'copy' : 'copies'} of{' '}
          <em>The Great Ghost Mix Up</em> {quantityRef.current === 1 ? 'is' : 'are'} on
          the way. You&rsquo;ll receive a confirmation email shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="or-form">
      {/* Quantity selector */}
      <div className="or-form-row">
        <label className="or-form-label" htmlFor="or-qty">Quantity</label>
        <div className="or-qty-control">
          <button
            type="button"
            className="or-qty-btn"
            onClick={handleDecrement}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            &minus;
          </button>
          <input
            id="or-qty"
            type="number"
            className="or-qty-input"
            value={quantity}
            min={1}
            max={MAX_QTY}
            readOnly
            aria-live="polite"
          />
          <button
            type="button"
            className="or-qty-btn"
            onClick={handleIncrement}
            disabled={quantity >= MAX_QTY}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Price summary */}
      <div className="or-summary">
        <div className="or-summary-line">
          <span>
            {quantity} &times; book
          </span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="or-summary-line">
          <span>Shipping</span>
          <span>${SHIPPING_FLAT.toFixed(2)}</span>
        </div>
        <div className="or-summary-line or-summary-total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* PayPal buttons */}
      <div className="or-checkout-wrap">
        <div ref={containerRef} className="or-paypal-container" />
        {status === 'error' && (
          <p className="or-checkout-error" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
