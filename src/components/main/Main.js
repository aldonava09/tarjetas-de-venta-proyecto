import React from 'react';
import { useState } from 'react';
import '../../styles/main/main.css';
import Deal from './__deal/main__deal.js';
import PaymentType from './__paymentType/main__paymentType.js';
import Cards from './__cards/main__cards.js';

function Main() {

    const [paymentMode, setPaymentMode] = useState(true);

    return (
        <div className="main">
            <Deal/>
            <PaymentType paymentMode={paymentMode} setPaymentMode={setPaymentMode}/>
            <Cards paymentMode={paymentMode}/>
        </div>
    );
}

export default Main;