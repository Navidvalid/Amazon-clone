import React from 'react';
import './Product.css';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from '../../../StateProvider';
import { v4 as uuidv4 } from 'uuid';

function Product({ product }) {
  const { title, image, price, rating, id } = product;
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className='home-row '>
      <div className='product'>
        <div className='product-info'>
          <p>{title}</p>
          <p className='product-price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='product-rating'>
            {Array(rating)
              .fill()
              .map((item, index) => (
                <StarRateIcon key={index} />
              ))}
          </div>
        </div>
        <img src={image} alt='' />

        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
