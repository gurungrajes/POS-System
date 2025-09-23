import './OrderCart.css'


export default function OrderCart(){
    return(
        <div className="order-cart">
            <h2>Current Order</h2>
           <button className="btn">0 items</button>
            <p className="empty">No items in cart</p>
        </div>
    )
}