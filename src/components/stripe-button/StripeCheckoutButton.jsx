import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_wQcyFpnHYP8R65jgA8sTxqdO00pXiP01Hg';

  const onToken = (token) => {
    alert('Payment Succeeful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="VOOWHOO"
      currency="GBP"
      billingAddress
      shippingAddress
      description={`Your Total is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
