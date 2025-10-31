import React, { useState } from "react";
import "../Styles/ReservationPage.css";
import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaUser, FaCreditCard } from "react-icons/fa";
import {useNavigate, Link} from "react-router-dom"

export default function ReservationPage() {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    passengers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation confirmed!");
  };

  const handleGetStartedClick = () => {
    navigate("/user_interface", { state: { registerActive: true } });
  };

  return (
    <div className="reservation-page">
      <header className="reservation-header">
        <FaArrowLeft className="back-icon" />
       <Link to="/">home</Link>
      </header>

      <main className="reservation-container">
        {/* Trip Details */}
        <section className="reservation-card">
          <h2>Trip Details</h2>

          <div className="trip-info">
            <div>
              <FaMapMarkerAlt className="icon" />
              <span><strong>From</strong><br />Morocco, Tamesna, CMC</span>
            </div>
            <div>
              <FaMapMarkerAlt className="icon" />
              <span><strong>To</strong><br />Rabat, Centre Ville</span>
            </div>
            <div>
              <FaClock className="icon" />
              <span><strong>Date & Time</strong><br />19/10/2025 - 14:25</span>
            </div>
            <div>
              <FaUser className="icon" />
              <span><strong>Seats Available</strong><br />3 seats</span>
            </div>
          </div>

          <div className="trip-extra">
            <p><strong>Trip Duration:</strong> 15:15</p>
            <p><strong>Service Type:</strong> Normal</p>
            <p><strong>Price per seat:</strong> <span className="highlight">50 MAD</span></p>
          </div>
        </section>

        {/* Passenger Information */}
        <section className="reservation-card">
          <h2>Passenger Information</h2>

          <form onSubmit={handleSubmit} className="passenger-form"> 
                <p className="nb-mustbe-registered"> *
  Must be registered,&nbsp;
  <li className="get-started-afterreservation" onClick={handleGetStartedClick}>
    get started here
  </li>
</p>
            <label>
              Full Name *
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email Address *
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Phone Number *
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Number of Passengers *
              <input
                type="number"
                name="passengers"
                min="1"
                value={formData.passengers}
                onChange={handleChange}
                required
              />
            </label>
          </form>
        </section>

        {/* Payment Summary */}
        <section className="reservation-card">
          <h2><FaCreditCard className="icon" /> Payment Summary</h2>
          <div className="payment-summary">
            <p><span>Price per seat</span> <span>50 MAD</span></p>
            <p><span>Number of seats</span> <span>{formData.passengers}</span></p>
            <p><span>Service fee</span> <span>5 MAD</span></p>
            <hr />
            <p className="total">
              <strong>Total Amount</strong>
              <strong>{50 * formData.passengers + 5} MAD</strong>
            </p>
          </div>
        </section>

        {/* Buttons */}
        <div className="reservation-actions">
          <button className="btn cancel-btn">Cancel</button>
          <button className="btn confirm-btn" onClick={handleSubmit}>Confirm Reservation</button>
        </div>

        <p className="terms">
          By confirming your reservation, you agree to our terms and conditions.
        </p>
      </main>
    </div>
  );
}
