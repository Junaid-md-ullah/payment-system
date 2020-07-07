import React, { useState } from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeButton = (props) => {
    const [paymentInfo,setPaymentInfo] = useState();
    const getToken = (token) => {
        console.log(token);
        setPaymentInfo(token);
    }
    return (
        <div>
            <br/>
             <StripeCheckout
             label="Pay Now"
             name="Joe Shop"
             billingAddress
             shippingAddress
             image="https://i.ibb.co/3BmghZC/Screenshot-3.png"
             description={`Your Total bill is ${props.total} Tk`}
             panelLabel="Pay Now"
        token={getToken}
        stripeKey="pk_test_51H2CAdBqjbdAjuTHppYpL0f1i8YJuphbM3wwgmRf3b9CHc7cjRuL4y0KwIZOQALlAhkkYlpBIRn7GTuTAvesqwqp00Ne8k6e7t"
      />
      {
          paymentInfo && <div>
              <p>Your Payment is successfull</p>
              <p>Your TrxID is <span style={{color:"green", fontWeight:"bold"}}>{paymentInfo.id}</span></p>
          </div>
          
      }
        </div>
    );
};

export default StripeButton;