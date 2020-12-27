import React, { useState } from 'react';
import { useStateValue } from '../../../StateProvider';
import styled from 'styled-components';
import CheckoutItem from '../Subtotal/CheckoutItem';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../../reducer';

function Orders() {
  const [{ basket }, display] = useStateValue();

  return (
    <OrdersContainer>
      <H1>
        {basket.length > 0 ? `Your Orders` : `Your Amazon Cart is empty.`}
      </H1>

      <Items>
        {basket.map((item) => {
          return <CheckoutItem hideButton key={item.id} item={item} />;
        })}
      </Items>

      <CurrencyFormat
        renderText={(value) => (
          <h3 className='order__total'>
            {basket.length > 0 ? `Order Total: ${value}` : ''}
          </h3>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </OrdersContainer>
  );
}

export default Orders;

const OrdersContainer = styled.div`
  padding: 20px 80px;
`;

const Items = styled.div`
  /* padding: 40px; */
  margin: 20px 0;
  border: 1px solid lightgray;
  background-color: white;
  position: relative;
`;

const H1 = styled.h1`
  margin: 30px 0;
`;
