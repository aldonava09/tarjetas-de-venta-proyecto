import React from 'react';
import '../../../../styles/main/__cards/__card/cards__card.css';
import '../../../../styles/main/__cards/__card/_middle/main__cards_middle.css';

function Card({paymentMode, title, monthlyPrice, annualyPrice, monthlyStorage, annualyStorage, monthlyUsers, annualyUsers, monthlySendGb, annualySendGb, itsMiddle}) {
    return (
        <div className={`cards__card ${itsMiddle ? 'cards__card_middle-card' : ''}`}>
            <h3 className={`cards__card-title  ${itsMiddle ? 'cards__card-title_middle-card' : ''}`}>{title}</h3>
            <h2 className={`cards__card-price  ${itsMiddle ? 'cards__card-price_middle-card' : ''}`}>{paymentMode ? monthlyPrice : annualyPrice}</h2>
            <p className={`cards__card-feuture ${itsMiddle ? 'cards__card-feuture_middle-card' : ''}`}>{paymentMode ? monthlyStorage : annualyStorage} Storage</p>
            <p className={`cards__card-feuture ${itsMiddle ? 'cards__card-feuture_middle-card' : ''}`}>{paymentMode ? monthlyUsers : annualyUsers} Users Allowed</p>
            <p className={`cards__card-feuture cards__card-feuture_last ${itsMiddle ? 'cards__card-feuture_middle-card cards__card-feuture_last_middle-card' : ''}`}>Send up to {paymentMode ? monthlySendGb : annualySendGb}</p>
            <a className={`cards__card-link ${itsMiddle ? 'cards__card-link_middle-card' : ''}`} href='https://www.linkedin.com/in/aldo-navarro-147b03282/' target='_BLANK' rel='noreferrer'>MORE DETAILS</a>
        </div>
    );
}

export default Card;