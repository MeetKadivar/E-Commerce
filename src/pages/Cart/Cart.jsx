
import {useCart} from '../../hooks/useCart'
import OrderSummary from '../../components/OrderSummary/OrderSummary';
function Cart() {
  const { cartItems, removeFromCart, addQuantity, removeQuantity } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} width="100" height="100" /><br/>
              <span>{item.title}</span><br/>
              <span>${item.price}</span><br/>
              {item.qty > 0 && (
                <>
                  <button onClick={() => addQuantity(item.id)}>+</button>
                  <span>Quantity: {item.qty}</span>
                  <button onClick={() => removeQuantity(item.id)}>-</button><br/>
                </>
              )}
             <span>Total: ${(item.price * item.qty).toFixed(2)}</span><br/>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <OrderSummary />
      )}
    </div>
  )
}

export default Cart