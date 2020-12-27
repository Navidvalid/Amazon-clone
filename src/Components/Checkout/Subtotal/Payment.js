import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../../../StateProvider';
import { Link, useHistory } from 'react-router-dom';
import CheckoutItem from './CheckoutItem';
import CurrencyFormat from 'react-currency-format';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { getBasketTotal } from '../../../reducer';
import { db } from '../../../firebase';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log(clientSecret);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace('/orders');
      });
  };

  const handleChange = (e) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

  return (
    <PaymentPage>
      <H1>
        Checkout (
        <Link style={{ textDecoration: 'none' }} to='/checkout'>
          {basket?.length} items
        </Link>
        )
      </H1>

      <PaymentContainer>
        {/* Payment section - delivery address */}
        <PaymentSection>
          <PaymentTitle>
            <H3>Delivery Address</H3>
          </PaymentTitle>
          <PaymentAddress>
            <p>{user?.email}</p>
            <p>123 React street </p>
            <p>San Diego, CA</p>
          </PaymentAddress>
        </PaymentSection>

        {/* Payment section - Review Items */}
        <PaymentSection>
          <PaymentTitle>
            <H3>Review items and delivery</H3>
          </PaymentTitle>
          <PaymentItems>
            {basket.map((item) => {
              return <CheckoutItem key={item.id} item={item} />;
            })}
          </PaymentItems>
        </PaymentSection>

        {/* Payment section - Payment method */}
        <PaymentSection>
          <PaymentTitle>
            <H3>Payment Method</H3>
          </PaymentTitle>
          <PaymentDetails>
            {/*stripe magic will go */}
            <Form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <PaymentPriceContainer>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <Link to='/order'>
                  {/* <Button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                  </Button> */}
                  <Button>Buy Now</Button>
                </Link>
              </PaymentPriceContainer>

              {/* Errors */}
              {error && <div>{error}</div>}
            </Form>
          </PaymentDetails>
        </PaymentSection>
      </PaymentContainer>
    </PaymentPage>
  );
}

export default Payment;

const PaymentPage = styled.div`
  background-color: white;
`;

const PaymentContainer = styled.div``;

const Button = styled.button`
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  font-weight: bolder;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  cursor: pointer;
`;

const H3 = styled.h3`
  padding-bottom: 20px;
`;

const Form = styled.form`
  max-width: 400px;
`;

const PaymentPriceContainer = styled.div``;

const H1 = styled.h1`
  text-align: center;
  padding: 10px;
  font-weight: 400;
  background-color: rgb(234, 237, 237);
  border-bottom: 1px solid lightgray;
`;

const PaymentSection = styled.div`
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgray;
`;

const PaymentTitle = styled.div`
  flex: 0.2;
`;

const PaymentAddress = styled.div`
  flex: 0.8;
`;
const PaymentItems = styled.div`
  flex: 0.8;
`;
const PaymentDetails = styled.div`
  flex: 0.8;
`;
