import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from '../../../StateProvider';
import styled from 'styled-components';

function CheckoutItem({ item, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const { title, image, price, rating, id } = item;

  const removeItem = () => {
    dispatch({
      type: 'REMOVE_ITEM',
      id,
    });
  };

  return (
    <CheckoutProduct>
      <Image src={image} alt='' />
      <ProductInfo>
        <Title>{title}</Title>
        <Price>
          <small>$</small>
          <strong>{price}</strong>
        </Price>
        <Raring>
          {Array(rating)
            .fill()
            .map((item, index) => (
              <StarRateIcon key={index} />
            ))}
        </Raring>
        {!hideButton && <Button onClick={removeItem}>Remove item</Button>}
      </ProductInfo>
    </CheckoutProduct>
  );
}

export default CheckoutItem;

const CheckoutProduct = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 180px;
  height: 180px;
`;

const ProductInfo = styled.div`
  padding-left: 20px;
`;

const Title = styled.p`
  font-size: 17px;
  font-weight: 800;
`;

const Price = styled.p``;

const Raring = styled.div`
  color: gold;
`;

const Button = styled.button`
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
`;
