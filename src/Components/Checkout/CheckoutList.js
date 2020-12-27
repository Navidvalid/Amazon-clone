import React from 'react';
import { useStateValue } from '../../StateProvider';
import CheckoutItem from './Subtotal/CheckoutItem';
import styled from 'styled-components';

function CheckoutList() {
  const [{ basket }] = useStateValue();
  return (
    <ListContainer>
      {basket.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
    </ListContainer>
  );
}

export default CheckoutList;

const ListContainer = styled.div`
  margin: 10px;
`;
