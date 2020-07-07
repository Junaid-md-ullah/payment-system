import React, { useState } from 'react';
import StripeButton from './StripeButton';

const CheckOutPage = () => {
    const [total,setTotal] = useState();
    const handleValue = () =>{
       const amount = document.getElementById("total").value;
       setTotal(amount); 
    }
    return (
        <div>
            <div className="container">
                <label htmlFor="total">Type the amount you want to pay</label>
                <br/>
                <input type="text" id="total" onChange={handleValue} name="total" placeholder="Enter the amount"/>
                <br/>
                <StripeButton total={total}></StripeButton>
            </div>

            {

            }

        </div>
    );
};

export default CheckOutPage;