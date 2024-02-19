import React from 'react'
import Data from './payments.json'

function Payments() {
    return (
        <div className='payments'>
            <h2>Payment Details</h2>
            <ul>
                {Data.Payments.map(payment => (
                    <li key={payment.id}>
                        <strong>{payment.item}</strong>: kes {payment.amount}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Payments;