import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../../StateProvider';
import CheckoutList from './CheckoutList';
import Subtotal from './Subtotal/Subtotal';

function Checkout() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <Container>
      <LeftSide>
        <CheckoutAd
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
        <div>
          <h3>{!user ? 'Please sing in' : `Hello, ${user.email}`}</h3>
          <CheckoutTitle>Your shopping Basket</CheckoutTitle>
        </div>
        <CheckoutList />
      </LeftSide>
      <RightSide>
        <Subtotal />
      </RightSide>
    </Container>
  );
}

export default Checkout;

const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
`;

const LeftSide = styled.div``;

const RightSide = styled.div``;

const CheckoutAd = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const CheckoutTitle = styled.h2`
  margin-left: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgrey;
`;
