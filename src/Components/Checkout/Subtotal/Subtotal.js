import React from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../StateProvider';
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from '../../../reducer';

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  const emptyBasket = () => {
    dispatch({ type: 'EMPTY_THE_BASKET' });
  };

  return (
    <SubtotalContainer>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <Gift className='subtotal-gift'>
              <GiftInput type='checkbox' /> This order contains a gift
            </Gift>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType='text'
        thousandSeparator={true}
        prefix='$'
      />

      <Button onClick={(e) => history.push('/payment')}>
        Proceed to checkout
      </Button>
      <Button style={{ backgroundColor: 'lightgray' }} onClick={emptyBasket}>
        Empty basket
      </Button>
    </SubtotalContainer>
  );
}

export default Subtotal;

const SubtotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;
`;

const Button = styled.button`
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  outline: none;
  cursor: pointer;
`;

const Gift = styled.small`
  display: flex;
  align-items: center;
`;

const GiftInput = styled.input`
  margin-right: 5px;
`;
