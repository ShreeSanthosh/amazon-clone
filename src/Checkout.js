import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {

  const [{basket}] = useStateValue();

  return (
    <div className='checkout'>
      <div className='left__side'>
        <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg' alt='' />
        <div>
          <h2 className='checkout__title'>Shopping Cart</h2>

          {basket.map(item => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price 
            }
            rating={item.rating} 
          />
          ))}
          
        </div>


      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
    
  )
}

export default Checkout;