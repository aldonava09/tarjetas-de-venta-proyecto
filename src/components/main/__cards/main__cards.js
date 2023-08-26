import React from 'react';
import '../../../styles/main/__cards/main__cards.css';
import Card from './__card/cards__card.js';

const storageDeals = [
    {
        title: "Basic",
        monthlyPrice: "19.99",
        annualyPrice: "149.00",
        monthlyStorage: "500 GB",
        annualyStorage: "1 TB",
        monthlyUsers: "2",
        annualyUsers: "4",
        monthlySendGb: "3 GB",
        annualySendGb: "6 GB",
        itsMiddle: false,
    },
    {
        title: "Professional",
        monthlyPrice: "24.99",
        annualyPrice: "199.00",
        monthlyStorage: "1 TB",
        annualyStorage: "2 TB",
        monthlyUsers: "5",
        annualyUsers: "10",
        monthlySendGb: "10 GB",
        annualySendGb: "15 GB",
        itsMiddle: true,
    },
    {
        title: "Basic",
        monthlyPrice: "29.99",
        annualyPrice: "249.00",
        monthlyStorage: "2 TB",
        annualyStorage: "3 TB",
        monthlyUsers: "10",
        annualyUsers: "15",
        monthlySendGb: "20 GB",
        annualySendGb: "25 GB",
        itsMiddle: false,
    }
]

function Cards({paymentMode}) {
    return (
        <div className='cards__container'>
            {storageDeals.map((item, index) => (
            <Card key={index} title={item.title} paymentMode={paymentMode} monthlyPrice={item.monthlyPrice} annualyPrice={item.annualyPrice} 
            monthlyStorage={item.monthlyStorage} annualyStorage={item.annualyStorage} monthlyUsers={item.monthlyUsers} annualyUsers={item.annualyUsers} 
            monthlySendGb={item.monthlySendGb} annualySendGb={item.annualySendGb} itsMiddle={item.itsMiddle}/>
            ))}
        </div>
    );
}

export default Cards;