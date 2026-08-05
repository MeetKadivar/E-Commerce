import {useCart} from '../../hooks/useCart'
import './OrderSummary.css'

function OrderSummary() {
    const {cartItems} = useCart();
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0).toFixed(2);
  return (
    <div className="order-summary">
        OrderSummary:
        {cartItems.map(item => (
            <div key={item.id} className="order-summary-item">
                <span>{item.title}</span>
                <span>Qty:{item.qty}</span>
                <span>Subtotal:${(item.price * item.qty).toFixed(2)}</span>
            </div>
        ))}

        <div className="order-summary-total">
            <span>Total Price: ${totalPrice}</span>
            {totalPrice > 200 ? <span>Shipping Free</span> : <span>Shipping Cost: $20</span>}
            <span>Tax: ${(totalPrice * 0.18).toFixed(2)}</span>
            <span>Final Total: ${(parseFloat(totalPrice) + (parseFloat(totalPrice) * 0.18)).toFixed(2)}</span>
        </div>
        <div>
            <button className="checkout-button">Checkout</button>
        </div>
    </div>
  )
}

export default OrderSummary