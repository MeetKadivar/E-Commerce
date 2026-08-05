import {useCart} from '../../hooks/useCart'
import './OrderSummary.css'

function OrderSummary() {
    const {cartItems} = useCart();
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = totalPrice * 0.18;
    const shippingCost = totalPrice > 200 ? 0 : 20;
  return (
    <div className="order-summary">
        OrderSummary:
    

        <div className="order-summary-total">
            <span>Total Price: ${totalPrice.toFixed(2)}</span>
            {totalPrice > 200 ? <span>Shipping: FREE</span> : <span>Shipping Cost: $20</span>}
            <span>Tax: ${(tax).toFixed(2)}</span>
            <span>Final Total: ${(parseFloat(totalPrice) + parseFloat(tax) + parseFloat(shippingCost)).toFixed(2)}</span>
        </div>
        <div>
            <button className="checkout-button">Checkout</button>
        </div>
    </div>
  )
}

export default OrderSummary