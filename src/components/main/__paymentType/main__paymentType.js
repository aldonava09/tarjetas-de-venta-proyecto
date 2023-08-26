import React from 'react';
import '../../../styles/main/__paymentType/main__paymentType.css';

function PaymentType({paymentMode, setPaymentMode}) {
    
    const handleButttonClick= () => {
        if(paymentMode === true){
            setPaymentMode(false)
            console.log(paymentMode)
        } else {
            setPaymentMode(true)
            console.log(paymentMode)
        }
    }

    return (
        <div className='payment-type__button-container'>
            <h3 className='payment-type__button-title'>Monthly</h3>
                <label className='payment-type__button-switch'>
                    <input className='payment-type__button-input' type="checkbox" onClick={handleButttonClick}/>
                    <div className='payment-type__button-slider'></div>
                </label>
            <h3 className='payment-type__button-title'>Annualy</h3>
        </div>
    );
}

export default PaymentType;