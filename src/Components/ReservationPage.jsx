// import React, { useState } from "react";
// import "../Styles/ReservationPage.css";
// import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaUser, FaCreditCard } from "react-icons/fa";
// import {useNavigate, Link} from "react-router-dom"

// export default function ReservationPage() {
  
//     const navigate = useNavigate()
//      const { state } = useLocation();
//   const { departure, destination, date, time, payment_method, passengers, rideType, selectedRide } = state || {};
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     passengers: 1,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Reservation confirmed!");
//   };

//   const handleGetStartedClick = () => {
//     navigate("/user_interface", { state: { registerActive: true } });
//   };

//   return (
//     <div className="reservation-page">
//       <header className="reservation-header">
//         <FaArrowLeft className="back-icon" />
//        <Link to="/">home</Link>
//       </header>

//       <main className="reservation-container">
//         {/* Trip Details */}
//         <section className="reservation-card">
//           <h2>Trip Details</h2>

//           <div className="trip-info">
//             <div>
//               <FaMapMarkerAlt className="icon" />
//               <span><strong>From</strong><br />Morocco, Tamesna, CMC</span>
//             </div>
//             <div>
//               <FaMapMarkerAlt className="icon" />
//               <span><strong>To</strong><br />Rabat, Centre Ville</span>
//             </div>
//             <div>
//               <FaClock className="icon" />
//               <span><strong>Date & Time</strong><br />19/10/2025 - 14:25</span>
//             </div>
//             <div>
//               <FaUser className="icon" />
//               <span><strong>Seats Available</strong><br />3 seats</span>
//             </div>
//           </div>

//           <div className="trip-extra">
//             <p><strong>Trip Duration:</strong> 15:15</p>
//             <p><strong>Service Type:</strong> Normal</p>
//             <p><strong>Price per seat:</strong> <span className="highlight">50 MAD</span></p>
//           </div>
//         </section>

//         {/* Passenger Information */}
//         <section className="reservation-card">
//           <h2>Passenger Information</h2>

//           <form onSubmit={handleSubmit} className="passenger-form"> 
//                 <p className="nb-mustbe-registered"> *
//   Must be registered,&nbsp;
//   <li className="get-started-afterreservation" onClick={handleGetStartedClick}>
//     get started here
//   </li>
// </p>
//             <label>
//               Full Name *
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Enter your full name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Email Address *
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Phone Number *
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter your phone number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Number of Passengers *
//               <input
//                 type="number"
//                 name="passengers"
//                 min="1"
//                 value={formData.passengers}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//           </form>
//         </section>

//         {/* Payment Summary */}
//         <section className="reservation-card">
//           <h2><FaCreditCard className="icon" /> Payment Summary</h2>
//           <div className="payment-summary">
//             <p><span>Price per seat</span> <span>50 MAD</span></p>
//             <p><span>Number of seats</span> <span>{formData.passengers}</span></p>
//             <p><span>Service fee</span> <span>5 MAD</span></p>
//             <hr />
//             <p className="total">
//               <strong>Total Amount</strong>
//               <strong>{50 * formData.passengers + 5} MAD</strong>
//             </p>
//           </div>
//         </section>

//         {/* Buttons */}
//         <div className="reservation-actions">
//           <button className="btn cancel-btn">Cancel</button>
//           <button className="btn confirm-btn" onClick={handleSubmit}>Confirm Reservation</button>
//         </div>

//         <p className="terms">
//           By confirming your reservation, you agree to our terms and conditions.
//         </p>
//       </main>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import "../Styles/ReservationPage.css";
// import { createClient } from "@supabase/supabase-js";

// import {
//   FaArrowLeft,
//   FaMapMarkerAlt,
//   FaClock,
//   FaUser,
//   FaCreditCard,
// } from "react-icons/fa";
// import { useNavigate, useLocation, Link } from "react-router-dom";

// export default function ReservationPage() {
//   // ✅ Supabase setup
//   const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
//   const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA';
//   const supabase = createClient(supabaseUrl, supabaseKey);
  
//   const navigate = useNavigate();
//   const { state } = useLocation();

//   // Destructure all passed state safely
//   const {
//     departure,
//     destination,
//     date,
//     time,
//     payment_method,
//     passengers,
//     rideType,
//     selectedRide,
//   } = state || {};

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     passengers: passengers || 1,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   alert("Reservation confirmed!");
//   //   // You could send this reservation to Supabase here
//   // };


// //   const handleSubmit = (e) => {
// //   e.preventDefault();

// //   // Combine all ride + passenger info to match the Supabase table schema
// //   const reservationData = {
// //     client_full_name: formData.fullName,
// //     email_address: formData.email,
// //     phone_number: formData.phone,
// //     number_of_passengers: formData.passengers,
// //     start_location: selectedRide?.start_location || departure,
// //     destination: selectedRide?.end_location || destination,
// //     date: date || selectedRide?.ride_date,
// //     time: time || selectedRide?.ride_time,
// //     seats_available: selectedRide?.passengers || "N/A",
// //     ride_type: rideType || selectedRide?.ride_type,
// //     price: pricePerSeat,
// //     payment_type: payment_method,
// //   };

// //   // Show confirmation alert
// //   alert("✅ Reservation confirmed! Check the console for details.");

// //   // Log all reservation data
// //   console.log("📦 Reservation Data Sent to Supabase:");
// //   console.table(reservationData);

// //   // (Optional) You can later replace this with an insert to Supabase
// //   // Example:
// //   // const { data, error } = await supabase.from("rides").insert([reservationData]);
// //   // if (error) console.error("Supabase insert error:", error);
// // };


// // const handleSubmit = (e) => {
// //   e.preventDefault();

// //   const reservationData = {
// //     client_full_name: formData.fullName,
// //     email_address: formData.email,
// //     phone_number: formData.phone,
// //     number_of_passengers: formData.passengers,
// //     start_location: selectedRide?.start_location || departure,
// //     destination: selectedRide?.end_location || destination,
// //     date: date || selectedRide?.ride_date,
// //     time: time || selectedRide?.ride_time,
// //     seats_available: selectedRide?.seats_available || "N/A",
// //     ride_type: rideType || selectedRide?.ride_type,
// //     price: pricePerSeat,
// //     payment_type: payment_method,
// //     ride_status: "Pending", // 🆕 Default new rides to "Pending"
// //   };

// //   alert("✅ Reservation confirmed! Check the console for details.");
// //   console.log("📦 Reservation Data Sent to Supabase:");
// //   console.table(reservationData);

// //   // Example Supabase insert (optional)
// //   // const { data, error } = await supabase.from("rides").insert([reservationData]);
// //   // if (error) console.error("Supabase insert error:", error);
// // };


// // const handleSubmit = async (e) => {
// //   e.preventDefault();

// //   try {
// //     // 1️⃣ Get logged-in user info
// //     const { data: userData, error: userError } = await supabase.auth.getUser();
// //     if (userError || !userData?.user) {
// //       alert("Please log in before booking a ride.");
// //       return;
// //     }

// //     const user = userData.user;

// //     // 2️⃣ Build reservation object to match your SQL table columns
// //     const reservationData = {
// //       client_full_name: formData.fullName || user.user_metadata?.full_name || "Unknown",
// //       email_address: formData.email || user.email,
// //       phone_number: formData.phone || "N/A",
// //       number_of_passengers: formData.passengers,
// //       start_location: selectedRide?.start_location || departure,
// //       destination: selectedRide?.end_location || destination,
// //       ride_date: date || selectedRide?.ride_date,
// //       ride_time: time || selectedRide?.ride_time,
// //       seats_available: selectedRide?.seats_available || 0,
// //       ride_type: rideType || selectedRide?.ride_type || "Standard",
// //       price: pricePerSeat,
// //       payment_type: payment_method || "Cash",
// //       ride_status: "Pending", // Default new rides as pending
// //     };

// //     console.log("📦 Sending to Supabase:", reservationData);

// //     // 3️⃣ Insert into Supabase "rides" table
// //     const { data, error } = await supabase.from("rides").insert([reservationData]);

// //     if (error) {
// //       console.error("❌ Supabase insert error:", error);
// //       alert("Failed to save your ride. Please try again.");
// //     } else {
// //       console.log("✅ Ride saved successfully:", data);
// //       alert("✅ Reservation confirmed and saved!");
// //       navigate("/confirmation", { state: { reservation: data[0] } }); // optional redirect
// //     }
// //   } catch (err) {
// //     console.error("⚠️ Unexpected error:", err);
// //     alert("Something went wrong. Please try again later.");
// //   }
// // };


// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     // 1️⃣ Check if user is logged in
//     const { data: userData, error: userError } = await supabase.auth.getUser();
//     if (userError || !userData?.user) {
//       alert("Please log in before booking a ride.");
//       return;
//     }

//     const user = userData.user;

//     // 2️⃣ Build reservation record for Supabase table
//     const reservationData = {
//       client_full_name: formData.fullName || user.user_metadata?.full_name || "Unknown",
//       email_address: formData.email || user.email,
//       phone_number: formData.phone || "N/A",
//       number_of_passengers: formData.passengers,
//       start_location: selectedRide?.start_location || departure,
//       destination: selectedRide?.end_location || destination,
//       ride_date: date || selectedRide?.ride_date,
//       ride_time: time || selectedRide?.ride_time,
//       seats_available: selectedRide?.seats_available || 0,
//       ride_type: rideType || selectedRide?.ride_type || "Standard",
//       price: pricePerSeat,
//       payment_type: payment_method || "Cash",
//       ride_status: "Pending",
//     };

//     console.log("📦 Sending to Supabase:", reservationData);

//     // 3️⃣ Insert into Supabase "rides" table
//     const { data, error } = await supabase.from("rides").insert([reservationData]);

//     if (error) {
//       console.error("❌ Supabase insert error:", error);
//       alert("Failed to save your ride. Please try again.");
//     } else {
//       console.log("✅ Ride saved successfully:", data);
//       alert("✅ Reservation confirmed and saved!");
//       navigate("/confirmation", { state: { reservation: data[0] } });
//     }
//   } catch (err) {
//     console.error("⚠️ Unexpected error:", err);
//     alert("Something went wrong. Please try again later.");
//   }
// };





//   const handleGetStartedClick = () => {
//     navigate("/user_interface", { state: { registerActive: true } });
//   };

//   const handleCancel = () => {
//     navigate(-1); // Go back to previous page
//   };

//   // Handle pricing (example: use ride info if available)
//   const pricePerSeat = selectedRide?.price || 50;
//   const serviceFee = 5;
//   const totalAmount = pricePerSeat * formData.passengers + serviceFee;

//   return (
//     <div className="reservation-page">
//       <header className="reservation-header">
//         <FaArrowLeft className="back-icon" onClick={handleCancel} />
//         <Link to="/">home</Link>
//       </header>

//       <main className="reservation-container">
//         {/* Trip Details */}
//         <section className="reservation-card">
//           <h2>Trip Details</h2>

//           <div className="trip-info">
//             <div>
//               <FaMapMarkerAlt className="icon" />
//               <span>
//                 <strong>From</strong>
//                 <br />
//                 {selectedRide?.start_location || departure || "N/A"}
//               </span>
//             </div>

//             <div>
//               <FaMapMarkerAlt className="icon" />
//               <span>
//                 <strong>To</strong>
//                 <br />
//                 {selectedRide?.end_location || destination || "N/A"}
//               </span>
//             </div>

//             <div>
//               <FaClock className="icon" />
//               <span>
//                 <strong>Date & Time</strong>
//                 <br />
//                 {date || "—"} – {time || selectedRide?.ride_time || "—"}
//               </span>
//             </div>

//             <div>
//               <FaUser className="icon" />
//               <span>
//                 <strong>Seats Available</strong>
//                 <br />
//                 {selectedRide?.passengers || passengers || "N/A"} seats
//               </span>
//             </div>
//           </div>

//           <div className="trip-extra">
//             <p>
//               <strong>Service Type:</strong> {rideType || selectedRide?.ride_type || "N/A"}
//             </p>
//             <p>
//               <strong>Payment Method:</strong> {payment_method || "N/A"}
//             </p>
//             <p>
//               <strong>Price per seat:</strong>{" "}
//               <span className="highlight">{pricePerSeat} MAD</span>
//             </p>
//           </div>
//         </section>

//         {/* Passenger Information */}
//         <section className="reservation-card">
//           <h2>Passenger Information</h2>

//           <form onSubmit={handleSubmit} className="passenger-form">
//             <p className="nb-mustbe-registered">
//               * Must be registered,&nbsp;
//               <li
//                 className="get-started-afterreservation"
//                 onClick={handleGetStartedClick}
//               >
//                 get started here
//               </li>
//             </p>

//             <label>
//               Full Name *
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Enter your full name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Email Address *
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Phone Number *
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter your phone number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Number of Passengers *
//               <input
//                 type="number"
//                 name="passengers"
//                 min="1"
//                 value={formData.passengers}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//           </form>
//         </section>

//         {/* Payment Summary */}
//         <section className="reservation-card">
//           <h2>
//             <FaCreditCard className="icon" /> Payment Summary
//           </h2>
//           <div className="payment-summary">
//             <p>
//               <span>Price per seat</span> <span>{pricePerSeat} MAD</span>
//             </p>
//             <p>
//               <span>Number of seats</span>{" "}
//               <span>{formData.passengers}</span>
//             </p>
//             <p>
//               <span>Service fee</span> <span>{serviceFee} MAD</span>
//             </p>
//             <hr />
//             <p className="total">
//               <strong>Total Amount</strong>
//               <strong>{totalAmount} MAD</strong>
//             </p>
//           </div>
//         </section>

//         Buttons
//         <div className="reservation-actions">
//           <button className="btn cancel-btn" onClick={handleCancel}>
//             Cancel
//           </button>
//           <button className="btn confirm-btn" onClick={handleSubmit}>
//             Confirm Reservation
//           </button>
//         </div>

//         <p className="terms">
//           By confirming your reservation, you agree to our terms and
//           conditions.
//         </p>
//       </main>
//     </div>
//   );
// }



import React, { useState } from "react";
import "../Styles/ReservationPage.css";
import { createClient } from "@supabase/supabase-js";

import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaCreditCard,
} from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function ReservationPage() {
      const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA';
  const supabase = createClient(supabaseUrl, supabaseKey);

  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    departure,
    destination,
    date,
    time,
    payment_method,
    passengers,
    rideType,
    selectedRide,
  } = state || {};

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    passengers: passengers || 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const pricePerSeat = selectedRide?.price || 50;
  const serviceFee = 5;
  const totalAmount = pricePerSeat * formData.passengers + serviceFee;

  const handleGetStartedClick = () => {
    navigate("/user_interface", { state: { registerActive: true } });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const { data: userData, error: userError } = await supabase.auth.getUser();
  //     if (userError || !userData?.user) {
  //       alert("Please log in before booking a ride.");
  //       return;
  //     }

  //     const user = userData.user;

  //     const reservationData = {
  //       client_full_name: formData.fullName || user.user_metadata?.full_name || "Unknown",
  //       email_address: formData.email || user.email,
  //       phone_number: formData.phone || "N/A",
  //       number_of_passengers: formData.passengers,
  //       start_location: selectedRide?.start_location || departure,
  //       destination: selectedRide?.end_location || destination,
  //       ride_date: date || selectedRide?.ride_date,
  //       ride_time: time || selectedRide?.ride_time,
  //       seats_available: selectedRide?.seats_available || 0,
  //       ride_type: rideType || selectedRide?.ride_type || "Standard",
  //       price: pricePerSeat,
  //       payment_type: payment_method || "Cash",
  //       ride_status: "Pending",
  //     };

  //     const { data, error } = await supabase.from("ride_order").insert([reservationData]);

  //     if (error) {
  //       alert("Failed to save your ride. Please try again.");
  //     } else {
  //       alert("Reservation confirmed and saved!");
  //       navigate("/confirmation", { state: { reservation: data[0] } });
  //     }
  //   } catch (err) {
  //     alert("Something went wrong. Please try again later.");
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // const reservationData = {
    //   client_full_name: formData.fullName || "Guest",
    //   email_address: formData.email || "guest@example.com",
    //   phone_number: formData.phone || "N/A",
    //   number_of_passengers: formData.passengers,
    //   start_location: selectedRide?.start_location || departure,
    //   destination: selectedRide?.end_location || destination,
    //   ride_date: date || selectedRide?.ride_date,
    //   ride_time: time || selectedRide?.ride_time,
    //   seats_available: selectedRide?.seats_available || 0,
    //   ride_type: rideType || selectedRide?.ride_type || "Standard",
    //   price: pricePerSeat,
    //   payment_type: payment_method || "cash",
    //   ride_status: "Pending",
    // };

//     const reservationData = {
//   client_full_name: formData.fullName,
//   email_address: formData.email,
//   phone_number: formData.phone,
//   number_of_passengers: Number(formData.passengers), // integer
//   start_location: selectedRide?.start_location || departure,
//   destination: selectedRide?.end_location || destination,
//   ride_date: date || selectedRide?.ride_date, // YYYY-MM-DD
//   ride_time: time || selectedRide?.ride_time, // HH:MM:SS
//   seats_available: selectedRide?.seats_available ?? Number(formData.passengers),
//   ride_type: rideType || selectedRide?.ride_type || "Standard", // must match allowed values
//   price: Number(pricePerSeat), // numeric
//   payment_type: payment_method?.charAt(0).toUpperCase() + payment_method?.slice(1) || "Cash", // "Cash" | "Card" | "Online"
//   ride_status: "Pending", // default
// };


const reservationData = {
  client_full_name: formData.fullName,
  email_address: formData.email,
  phone_number: formData.phone,
  number_of_passengers: Number(formData.passengers),
  start_location: selectedRide?.start_location || departure,
  destination: selectedRide?.end_location || destination,
  ride_date: date || selectedRide?.ride_date,
  ride_time: time || selectedRide?.ride_time,
  seats_available: selectedRide?.seats_available ?? Number(formData.passengers),
  ride_type:  "Standard", // <-- default to "Standard" if not selected
  price: Number(pricePerSeat),
  payment_type: payment_method?.charAt(0).toUpperCase() + payment_method?.slice(1) || "Cash",
  ride_status: "Pending",
};


    console.log("📦 Reservation data:", reservationData);
    console.table(reservationData)

    const { data, error } = await supabase.from("ride_order").insert([reservationData]);
    console.log("Supabase insert response:", data, error);

    if (error) {
      console.error("❌ Supabase insert error:", error);
      alert("Failed to save your ride. Please try again.");
    } else {
      console.log("✅ Ride saved successfully:", data);
      alert("✅ Reservation confirmed and saved!");
      navigate("/confirmation");
    }
  } catch (err) {
    console.error("⚠️ Unexpected error:", err);
    alert("Something went wrong. Please try again later.");
  }
};

  return (
    <div className="reservation-page">
      <header className="reservation-header">
        <FaArrowLeft className="back-icon" onClick={handleCancel} />
        <Link to="/">home</Link>
      </header>

      <main className="reservation-container">
        {/* Trip Details */}
        <section className="reservation-card">
          <h2>Trip Details</h2>
          <div className="trip-info">
            <div>
              <FaMapMarkerAlt className="icon" />
              <span>
                <strong>From</strong>
                <br />
                {selectedRide?.start_location || departure || "N/A"}
              </span>
            </div>
            <div>
              <FaMapMarkerAlt className="icon" />
              <span>
                <strong>To</strong>
                <br />
                {selectedRide?.end_location || destination || "N/A"}
              </span>
            </div>
            <div>
              <FaClock className="icon" />
              <span>
                <strong>Date & Time</strong>
                <br />
                {date || "—"} – {time || selectedRide?.ride_time || "—"}
              </span>
            </div>
            <div>
              <FaUser className="icon" />
              <span>
                <strong>Seats Available</strong>
                <br />
                {selectedRide?.passengers || passengers || "N/A"} seats
              </span>
            </div>
          </div>
          <div className="trip-extra">
            <p>
              <strong>Service Type:</strong> {rideType || selectedRide?.ride_type || "N/A"}
            </p>
            <p>
              <strong>Payment Method:</strong> {payment_method || "N/A"}
            </p>
            <p>
              <strong>Price per seat:</strong>{" "}
              <span className="highlight">{pricePerSeat} MAD</span>
            </p>
          </div>
        </section>

        {/* Passenger Info + Payment Summary + Buttons inside Form */}
        <form onSubmit={handleSubmit} className="reservation-card passenger-form">
          <h2>Passenger Information</h2>

          <p className="nb-mustbe-registered">
            * Must be registered,&nbsp;
            <li
              className="get-started-afterreservation"
              onClick={handleGetStartedClick}
            >
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

          {/* Payment Summary */}
          <h2>
            <FaCreditCard className="icon" /> Payment Summary
          </h2>
          <div className="payment-summary">
            <p>
              <span>Price per seat</span> <span>{pricePerSeat} MAD</span>
            </p>
            <p>
              <span>Number of seats</span> <span>{formData.passengers}</span>
            </p>
            <p>
              <span>Service fee</span> <span>{serviceFee} MAD</span>
            </p>
            <hr />
            <p className="total">
              <strong>Total Amount</strong>
              <strong>{totalAmount} MAD</strong>
            </p>
          </div>

          {/* Buttons */}
          <div className="reservation-actions">
            <button className="btn cancel-btn" type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button className="btn confirm-btn" type="submit">
              Confirm Reservation
            </button>
          </div>

          <p className="terms">
            By confirming your reservation, you agree to our terms and conditions.
          </p>
        </form>
      </main>
    </div>
  );
}
