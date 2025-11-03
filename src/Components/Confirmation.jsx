import React from 'react';
import '../Styles/Confirmation.css'; // Assuming you're creating a separate CSS file for styling

const Confirmation = () => {
    return (
        <div className="confirmation-container">
            <h1 className="confirmation-title">Order Confirmed!</h1>
            <p className="confirmation-message">
                Thank you for your purchase. Your order is being processed and will be shipped shortly.
            </p>
            <div className="order-details">
                <h3>Order Number: <span className="order-number">#123456789</span></h3>
                <p className="delivery-details">
                    Estimated Delivery: 3-5 business days
                </p>
            </div>
            <div className="call-to-action">
                <p>If you have any questions, feel free to <a href="/contact">contact us</a>.</p>
                <a href="/shop" className="btn">Continue Shopping</a>
            </div>
        </div>
    );
}

export default Confirmation;
