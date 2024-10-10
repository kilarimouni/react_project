import { useContext, useState } from "react";
import Navbar from "../../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import "./order.css"
import { StoreContext } from "../../component/contextstore/storedata";
const PlaceOrder = () => {
   const { getTotal } = useContext(StoreContext)
   const [login, setLogin] = useState(false)
   const navigate = useNavigate();


   const handleProceedToPayment = () => {
      navigate("/checkout", { state: { totalAmount: getTotal() } });
    };


   return (
      <div>

         {/* <Navbar setLogin={setLogin} /> */}

         <form className="order">


            <div className="order-left">
               <p className="title">Delivery Information</p>
               <div className="multi-fields">
                  <input type="text" placeholder="Frist Name" required/>
                  <input type="text" placeholder="Last Name" required/>

               </div>
               <input type="email" placeholder="Email address" required/>
               <input type="text" placeholder="Street" required/>
               <div className="multi-fields">
                  <input type="text" placeholder="City" required/>
                  <input type="text" placeholder="State" required/>
               </div>
               <div className="multi-fields">
                  <input type="text" placeholder="Zip code" required/>
                  <input type="text" placeholder="Country" required/>

               </div>
               <input type="text" placeholder="phone" required/>
            </div>

            <div className="order-right">
               <div className="cart-total">
                  <h2>Cart Total</h2>
                  <div>
                     <div className="cart-details">
                        <p>Subtotal</p>
                        <p>₹ {getTotal()}</p>

                     </div>
                     <hr />
                     <div className="cart-details">
                        <p>Delivery Fee</p>
                        <p>₹ {getTotal() === 0 ? 0 : 50}</p>

                     </div>
                     <hr />
                     <div className="cart-details">
                        <b>Total</b>
                        <b>₹ {getTotal() === 0 ? 0 : getTotal() + 50}</b>
                     </div>

                  </div>
                
                  <button type="submit" onClick={handleProceedToPayment}>
              PROCEED TO PAYMENT
            </button>
               </div>
            </div>

         </form>
      </div>
   )
}
export default PlaceOrder;      