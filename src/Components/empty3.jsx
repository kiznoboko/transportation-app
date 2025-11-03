// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { createClient } from "@supabase/supabase-js";
// import "../Styles/dashboard1.css";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Logo from "../../public/Logo.svg"

// // Supabase setup
// const supabaseUrl = "https://xdbhtxoheaqgrbruapxv.supabase.co"; // <-- your URL
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA"; // <-- your anon or service key
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default function Dashboard() {

//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("new");
//   const [UserData, setUserData] = useState(null);
//   const [orderHistory, setOrderHistory] = useState([]);
// const [historyLoading, setHistoryLoading] = useState(false);
//  const [creditInfo, setCreditInfo] = useState({
//     madBalance: 0, // Default to 0
//     totalRides: 0, // Default to 0
//   });
//   const [includedPackage, setIncludedPackage] = useState({
//     name: "",
//     description: "",
//     price: "",
//     includedkm: "",
//     category: "",
//     normalprice: "",
//     vipprice: "",
//     cojointprice: "",
//   });

// // depends on UserData

//     // Controlled form state
//   const [formData, setFormData] = useState({
//     from: "",
//     to: "",
//     date: "",
//     time: "",
//     passengers: "",
//     paymentMethod: "",
//     rideType: "normal", // default ride_type
//     // notes: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//  useEffect(() => {
//     const storedUserData = localStorage.getItem("userData");
//     if (storedUserData) {
//       setUserData(JSON.parse(storedUserData));
//       console.log("setted Data", JSON.parse(storedUserData))
//     }
//   }, []); // ✅ Empty dependency array runs once on mount

// useEffect(() => {
//   if (!UserData) return; // wait for userData to load

//   const fetchOrders = async () => {
//     setHistoryLoading(true);
//     try {
//       const { data, error } = await supabase
//         .from("ride_order")
//         .select("*")
//         .eq("email_address", UserData.email) // make sure your table has user_id column
//         .order("ride_date", { ascending: false });

//       if (error) throw error;
//       setOrderHistory(data || []);
//     } catch (err) {
//       console.error("Error fetching order history:", err);
//     } finally {
//       setHistoryLoading(false);
//     }
//   };

//   fetchOrders();
// }, [UserData]); 


// //  useEffect(() => {
// //     if (!UserData) return; // wait for userData to load

// //     const fetchPackages = async () => {
// //       setHistoryLoading(true); // Set loading state to true while fetching data

// //       try {
// //         const { data, error } = await supabase
// //           .from("packages") // Replace with your actual table name
// //           .select("*") // You can specify columns here like "name, description, price" etc.
// //           .eq("user_email", UserData.email); // You can filter by user email or any other logic

// //         if (error) throw error;

// //         setPackageData(data || []); // Set the fetched data to state
// //       } catch (err) {
// //         console.error("Error fetching package data:", err);
// //       } finally {
// //         setHistoryLoading(false); // Reset loading state after fetch
// //       }
// //     };

// //     fetchPackages(); // Fetch packages once UserData is loaded
// //   }, [UserData]); // Runs whenever UserData changes


// // useEffect(() => {
// //   if (!UserData) return; // wait for userData to load

// //   const fetchPackages = async () => {
// //     setHistoryLoading(true); // Set loading state to true while fetching data

// //     try {
// //       const { data, error } = await supabase
// //         .from("packages") // Replace with your actual table name
// //         .select("*") // You can specify columns here like "name, description, price" etc.
// //         .eq("user_email", UserData.email); // You can filter by user email or any other logic

// //       if (error) throw error;

// //       setIncludedPackage(data || []); // Set the fetched data to state
// //     } catch (err) {
// //       console.error("Error fetching package data:", err);
// //     } finally {
// //       setHistoryLoading(false); // Reset loading state after fetch
// //     }
// //   };

// //   fetchPackages(); // Fetch packages once UserData is loaded
// // }, [UserData]); // Runs whenever UserData changes


// // Corrected version of the package fetching useEffect
// useEffect(() => {
//   if (!UserData) return; // wait for userData to load

//   const fetchPackages = async () => {
//     setHistoryLoading(true); // Set loading state to true while fetching data

//     try {
//       const { data, error } = await supabase
//         .from("packages") // Replace with your actual table name
//         .select("*") // You can specify columns here like "name, description, price" etc.
//         .eq("user_email", UserData.email); // You can filter by user email or any other logic

//       if (error) throw error;

//       setIncludedPackage(data || []); // Set the fetched data to state
//     } catch (err) {
//       console.error("Error fetching package data:", err);
//     } finally {
//       setHistoryLoading(false); // Reset loading state after fetch
//     }
//   };

//   fetchPackages(); // Fetch packages once UserData is loaded
// }, [UserData]); // Runs whenever UserData changes




//   const RedirecttoSearchResultPage = () => {
//   // Format date string to YYYY-MM-DD if it's a Date object or valid string
//   let formattedDate = "";

//   if (formData.date) {
//     if (formData.date instanceof Date) {
//       // If date is a Date object
//       formattedDate = formData.date.toISOString().slice(0, 10);
//     } else if (typeof formData.date === "string") {
//       // If date is a string (like "2025-10-21"), try parsing and formatting it safely
//       const parsedDate = new Date(formData.date);
//       if (!isNaN(parsedDate)) {
//         formattedDate = parsedDate.toISOString().slice(0, 10);
//       } else {
//         // fallback, just keep original string
//         formattedDate = formData.date;
//       }
//     }
//   }

//   navigate("/SearchResult", {
//     state: {
//       ...formData,
//       date: formattedDate,
//     },
//   });
// };

// // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Clear form
//   const handleClear = () => {
//     setFormData({
//       from: "",
//       to: "",
//       date: "",
//       time: "",
//       passengers: "",
//       paymentMethod: "",
//       rideType: "normal",
//       notes: "",
//     });
//     setError(null);
//   };

//   // Submit form and save to Supabase
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (
//       !formData.from ||
//       !formData.to ||
//       !formData.date ||
//       !formData.time ||
//       !formData.passengers ||
//       !formData.paymentMethod ||
//       !formData.rideType
//     ) {
//       setError("Please fill in all required fields.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       // Prepare date and time values as needed by your table schema
//       const rideDate = formData.date; // yyyy-mm-dd from date input (string)
//       const rideTime = formData.time; // HH:MM from time input (string)

//       // Insert new order into Supabase table "orders"
//       const { data, error } = await supabase.from("orders_test").insert([
//         {
//           start_location: formData.from,
//           end_location: formData.to,
//           ride_date: rideDate,
//           ride_time: rideTime,
//           passengers: Number(formData.passengers),
//           payment_method: formData.paymentMethod,
//           ride_type: formData.rideType,
//           notes: formData.notes || null,
//           created_at: new Date().toISOString(),
//           status: "pending",
//         },
//       ]);

//       if (error) throw error;

//       // Navigate to SearchResult page and pass form data (optional)
//       RedirecttoSearchResultPage();
//     } catch (err) {
//       setError("Failed to submit order. Please try again.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("userData")
//     navigate("/")
//   }

//   return (
//     <div className="dashboard-page">
//       {/* Navigation Bar */}
//       <nav className="nav-bar">
//         <div className="nav-left">
        
//             <img src={Logo} alt="Logo-image" />
          
//           <h2>Transportation App Design</h2>
//         </div>
//         <div className="nav-right">
//           <li onClick={handleLogout} className="Logout-link">Logout</li>
//         </div>
//       </nav>

//       {/* Profile Section */}
//       <header className="profile-header">
//         <div className="profile-info">
//           <div className="avatar">A</div>
//           <div className="UserData-preview">
//           {UserData ? (
//     <>
//       <h3>{UserData.username}</h3>
//       <p>{UserData.email}</p>
//       <p>Member since: {UserData.created_at}</p>
//     </>
//   ) : (
//     <p>Loading user data...</p>
//   )}
//   </div>
//         </div>
//       </header>

//       {/* Dashboard Section */}
//       <main className="main-content">
//         <h2>My Dashboard</h2>
//         <p>Manage your transportation orders and bookings</p>

//         {/* Tabs */}
//         <div className="tabs">
//           <button
//             className={activeTab === "new" ? "active" : ""}
//             onClick={() => setActiveTab("new")}
//           >
//             New Order
//           </button>
//           <button
//             className={activeTab === "history" ? "active" : ""}
//             onClick={() => setActiveTab("history")}
//           >
//             Order History
//           </button>
//         </div>

//         {/* --- NEW ORDER TAB --- */}
//         {activeTab === "new" && (
//           <section className="new-order">
//             <form onSubmit={handleSubmit} className="form-container">
//               <div className="form-row">
//                 <div>
//                   <label htmlFor="from">From</label>
//                   <input
//                     id="from"
//                     name="from"
//                     type="text"
//                     placeholder="Enter departure location"
//                     value={formData.from}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="to">To</label>
//                   <input
//                     id="to"
//                     name="to"
//                     type="text"
//                     placeholder="Enter destination location"
//                     value={formData.to}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div>
//                   <label htmlFor="date">Date</label>
                  
//                    <DatePicker
//                     selected={formData.date}
//                     onChange={(date) => setFormData({ ...formData, date })}
//                     dateFormat="yyyy-MM-dd"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="time">Time</label>
//                   <input
//                     id="time"
//                     name="time"
//                     type="time"
//                     value={formData.time}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div>
//                   <label htmlFor="passengers">Number of Passengers</label>
//                   <select
//                     id="passengers"
//                     name="passengers"
//                     value={formData.passengers}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select passengers</option>
//                     <option value="1">1 passenger</option>
//                     <option value="2">2 passengers</option>
//                     <option value="3">3 passengers</option>
//                     <option value="4">4 passengers</option>
//                     <option value="5">5 passengers</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label htmlFor="paymentMethod">Payment Method</label>
//                   <select
//                     id="paymentMethod"
//                     name="paymentMethod"
//                     value={formData.paymentMethod}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select payment method</option>
//                     <option value="Cash">Cash</option>
//                     <option value="Credit Card">Credit Card</option>
//                     <option value="Prepaid Credit">Prepaid Credit</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div>
//                   <label htmlFor="rideType">Ride Type</label>
//                   <select
//                     id="rideType"
//                     name="rideType"
//                     value={formData.rideType}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="normal">Normal</option>
//                     <option value="vip">VIP</option>
//                     <option value="co-joint">Co-joint</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="form-row full-width">
//                 <label htmlFor="notes">Additional Notes (Optional)</label>
//                 <textarea
//                   id="notes"
//                   name="notes"
//                   placeholder="Any special requirements or notes for your trip..."
//                   value={formData.notes}
//                   onChange={handleChange}
//                 />
//               </div>

//               {error && (
//                 <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
//               )}

//               <div className="form-actions">
//                 <button
//                   type="button"
//                   className="clear-btn"
//                   onClick={handleClear}
//                   disabled={loading}
//                 >
//                   Clear Form
//                 </button>
//                 <button type="submit" className="submit-btn" disabled={loading}>
//                   {loading ? "Submitting..." : "Submit Order →"}
//                 </button>
//               </div>
//             </form>


         

//             {/* Package Info Section */}
//        {/* Package Info Section */}
// <div className="package-info">
//   <h3>Package Information</h3>
//   {historyLoading ? (
//     <p>Loading package data...</p>
//   ) : includedPackage.length === 0 ? ( // Use includedPackage here
//     <p>No packages found.</p>
//   ) : (
//     includedPackage.map((pkg) => (  // Use includedPackage here
//       <div key={pkg.id} className="package-card">
//         <h4>{pkg.name}</h4>
//         <p>{pkg.description}</p>
//         <p><strong>Price:</strong> {pkg.price} MAD</p>
//         <p><strong>Included Km:</strong> {pkg.includedkm} km</p>
//         <p><strong>Category:</strong> {pkg.category}</p>
//         <p><strong>Normal Price:</strong> {pkg.normalprice} MAD</p>
//         <p><strong>VIP Price:</strong> {pkg.vipprice} MAD</p>
//         <p><strong>Co-joint Price:</strong> {pkg.cojointprice} MAD</p>
//       </div>
//     ))
//   )}
// </div>


//             {/* Add your stats or other info here if needed */}
//           </section>
//         )}

       
//       {activeTab === "history" && (
//   <section className="order-history">
//     <h3>Order History</h3>
//     {historyLoading ? (
//       <p>Loading order history...</p>
//     ) : orderHistory.length === 0 ? (
//       <p>No orders found.</p>
//     ) : (
//       orderHistory.map((order) => (
//         <div key={order.id} className="order-card">
//           <div>
//             <h4>{order.start_location} → {order.destination}</h4>
//             <p>
//               {order.ride_date} | {order.ride_time} | {order.number_of_passengers} passenger(s)
//             </p>
//           </div>
//           <div className={`order-status ${order.ride_status.toLowerCase()}`}>
//             {order.ride_status}
//           </div>
//           <div className="order-cost">
//             <p>{order.price} MAD</p>
//             <span>{order.payment_type}</span>
//           </div>
//         </div>
//       ))
//     )}
//   </section>
// )}

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
//       const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
//         const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA';
//   const supabase = createClient(supabaseUrl, supabaseKey);

//   const navigate = useNavigate();
//   const { state } = useLocation();

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

//   const pricePerSeat = selectedRide?.price || 50;
//   const serviceFee = 5;
//   const totalAmount = pricePerSeat * formData.passengers + serviceFee;

//   const handleGetStartedClick = () => {
//     navigate("/user_interface", { state: { registerActive: true } });
//   };

//   const handleCancel = () => {
//     navigate(-1);
//   };

 


//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
    

// const reservationData = {
//   client_full_name: formData.fullName,
//   email_address: formData.email,
//   phone_number: formData.phone,
//   number_of_passengers: Number(formData.passengers),
//   start_location: selectedRide?.start_location || departure,
//   destination: selectedRide?.end_location || destination,
//   ride_date: date || selectedRide?.ride_date,
//   ride_time: time || selectedRide?.ride_time,
//   seats_available: selectedRide?.seats_available ?? Number(formData.passengers),
//   ride_type:  "Standard", // <-- default to "Standard" if not selected
//   price: Number(pricePerSeat),
//   payment_type: payment_method?.charAt(0).toUpperCase() + payment_method?.slice(1) || "Cash",
//   ride_status: "Pending",
// };


//     console.log("📦 Reservation data:", reservationData);
//     console.table(reservationData)

//     const { data, error } = await supabase.from("ride_order").insert([reservationData]);
//     console.log("Supabase insert response:", data, error);

//     if (error) {
//       console.error("❌ Supabase insert error:", error);
//       alert("Failed to save your ride. Please try again.");
//     } else {
//       console.log("✅ Ride saved successfully:", data);
//       alert("✅ Reservation confirmed and saved!");
//       navigate("/Confirmed/:uuid");
//     }
//   } catch (err) {
//     console.error("⚠️ Unexpected error:", err);
//     alert("Something went wrong. Please try again later.");
//   }
// };

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
//               <span className="highlight">{pricePerSeat} MAD/KM</span>
//             </p>
//           </div>
//         </section>

//         {/* Passenger Info + Payment Summary + Buttons inside Form */}
//         <form onSubmit={handleSubmit} className="reservation-card passenger-form">
//           <h2>Passenger Information</h2>

//           <p className="nb-mustbe-registered">
//             * Must be registered,&nbsp;
//             <li
//               className="get-started-afterreservation"
//               onClick={handleGetStartedClick}
//             >
//               get started here
//             </li>
//           </p>

//           <label>
//             Full Name *
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Enter your full name"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Email Address *
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Phone Number *
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter your phone number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Number of Passengers *
//             <input
//               type="number"
//               name="passengers"
//               min="1"
//               value={formData.passengers}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           {/* Payment Summary */}
//           <h2>
//             <FaCreditCard className="icon" /> Payment Summary
//           </h2>
//           <div className="payment-summary">
//             <p>
//               <span>Price per seat</span> <span>{pricePerSeat} MAD/KM</span>
//             </p>
//             <p>
//               <span>Number of seats</span> <span>{formData.passengers}</span>
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

//           {/* Buttons */}
//           <div className="reservation-actions">
//             <button className="btn cancel-btn" type="button" onClick={handleCancel}>
//               Cancel
//             </button>
//             <button className="btn confirm-btn" type="submit">
//               Confirm Reservation
//             </button>
//           </div>

//           <p className="terms">
//             By confirming your reservation, you agree to our terms and conditions.
//           </p>
//         </form>
//       </main>
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Logo from "./Logo.jsx";
import "../Styles/Landing_page_test.css";
import {Link, useNavigate} from "react-router-dom";
import profile from "./images/profile.png";
import rideshare from "./images/rideshare.png";
import schedule from "./images/schedule.png";
import maplocation from "./images/map-location.png";

import menu_dropdown_1 from "./images/menu_dropdown_1.png";
import menu_dropdown_2 from "./images/menu_dropdown_2.png"

const Landing_page1 = () => {
  const [isNavActive, setIsNavActive] = useState(false);
    const navigate = useNavigate()
      const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    date: null,
    time: "",
    rideType: "",
      payment_method: "",
      passengers : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const RedirecttoSearchResultPage = () => {
  //   navigate("/SearchResult", { state: formData });
  // };

  const RedirecttoSearchResultPage = () => {
  const formattedDate = formData.date 
    ? formData.date.toISOString().slice(0, 10) // "YYYY-MM-DD"
    : "";

  navigate("/SearchResult", { 
    state: { 
      ...formData, 
      date: formattedDate 
    } 
  });
};

 const handleGetStartedClick = () => {
    navigate("/user_interface", { state: { registerActive: true } });
  };

const handlePayasyouGo = (rideType) => {
  // Update the state with the selected ride type
  const updatedFormData = { ...formData, rideType };

  // Navigate to the SearchResult page with the updated form data
  navigate("/SearchResult", { state: updatedFormData });
};


const handleNavDropdown = () => {
    // Toggle the nav bar visibility on small screens
    setIsNavActive((prevState) => !prevState);
  };

    
    return (
        <>  

            <div className="Landing_pageWrapper">
              

                <nav className="LP-Nav">
      <ul className="LP-navList LP-navList-left">
        <li className="logo">
          <Logo />
        </li>
        <img
          src={menu_dropdown_1}
          alt="menu"
          className="dropdown1"
          onClick={handleNavDropdown}
        />
      </ul>

      <div className={`LP-navLinks general-right-navlinks ${isNavActive ? "active" : ""}`}>
        <ul className="LP-navList LP-navList-middle">
          <li className="LP-navList_Lists">How it Works</li>
          <Link to="/Available_packages" className="LP-navList_Lists">Pricing</Link>
          <Link to="/About" className="LP-navList_Lists">About</Link>
        </ul>

        <ul className="LP-navList LP-navList-right">
          <Link to="/user_interface" className="LP-navList_Lists">Sign in</Link>
          <li onClick={handleGetStartedClick} className="LP-navList_Lists LP-navList-right-GetStarted">
            Get Started
          </li>
        </ul>
      </div>
    </nav>



                    {/* main Section */}
                <div className="Landing_pageMainSection">
                    {/* section1 */}


                    <span className="LPMS-section section1">

                        <div className="LPMS-section1 box1">
                            <h3 className="LPMS_section1_box1_header1">
                                Student & Staff Transportation
                            </h3>
                            <p className="LPMS_section1_box1_header_paragraph1">
                                Smart Collective Transport for Your Campus Community

                            </p>
                            <p className="LPMS_section1_box1_paragraph1">
                                Plan your trips, find available transport options, 
                                and travel safely with fellow students and trainers.
                                 Pay with cash or card and enjoy affordable, 
                                 eco-friendly campus transportation.
                            </p>
                            <div className="LPMS_section1_box1_advantages">
                                    <span className="LPMS_section1_box1_advantages_item1">
                                            <img  src={rideshare} alt="item_image"  className="LPMS_section1_box1_items_image" />
                                            <p className="LPMS_section1_box1_items_title">Shared Rides</p>
                                    </span>
                                    <span className="LPMS_section1_box1_advantages_item2">
                                                        <img  src={maplocation} alt="item_image"  className="LPMS_section1_box1_items_image" />
                                            <p className="LPMS_section1_box1_items_title">Campus Routes</p>
                                    </span>
                                    <span className="LPMS_section1_box1_advantages_item3">
                                        <img  src={schedule} alt="item_image"  className="LPMS_section1_box1_items_image" />
                                            <p className="LPMS_section1_box1_items_title">Flexible Scheduling</p>

                                    </span>
                            </div>
                        </div>
                        <div className="LPMS-section1 box2">
                            

                            

                            <form className="LPMS-section1_box2_item1">
        <h3 className="LPMS-section1_box2_item1_title">Plan Your Trip</h3>

        <div className="form-group-box2-item1">
          <label className="form-label-box2-items">Departure Location</label>
          <input
            type="text"
            className="form-control-box2-items"
            placeholder="Enter starting point"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
          />
        </div>

        <div className="form-group-box2-item1">
          <label className="form-label-box2-items">Destination</label>
          <input
            type="text"
            className="form-control-box2-items"
            placeholder="Enter destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          />
        </div>

        <div className="form-group-box2-item1">
          <div className="form-group-box2-item1_form-field1 datetime">
            <label htmlFor="date" className="form-group-box2-item1_form-field1_form_label">Date</label>
           
            <DatePicker
  selected={formData.date}
  onChange={(date) => setFormData({ ...formData, date })}
  dateFormat="yyyy-MM-dd"
/>
          </div>

          <div className="form-group-box2-item1_form-field2">
            <label htmlFor="time" className="form-group-box2-item1_form-field2_from_label">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              className="form-group-box2-item1_form-field2_from_control"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group-box2-item1">
          <select
            name="rideType"
            value={formData.rideType}
            onChange={handleChange}
            className="form-group-box2-item1-rideTypeSelect"
          >
            <option value="" disabled>
              your ride type
            </option>
            <option value="normal">normal</option>
            <option value="vip">vip</option>
            <option value="co-joint">co-joint</option>
          </select>
        </div>

        
        <select
  name="payment_method"
  value={formData.payment_method}
  onChange={handleChange}
  className="form-group-box2-item1-payment_methodSelect"
>
  <option value="" disabled>your payment type</option>
  <option value="cash">cash</option>
  <option value="paypal">paypal</option>
  <option value="card">card</option>
  <option value="card">credit</option>
</select>

             <select
                    id="passengers"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select passengers</option>
                    <option value="1">1 passenger</option>
                    <option value="2">2 passengers</option>
                    <option value="3">3 passengers</option>
                    <option value="4">4 passengers</option>
                    <option value="5">5 passengers</option>
                  </select>


        <button
          type="button"
          className="LPMS-section1_box2_search_submit_btn"
          onClick={RedirecttoSearchResultPage}
        >
          Search Available Rides
        </button>
      </form>
                            <p className="LPMS-section1_box2_payment_quote">💳 Payment accepted: Cash or Card or credits</p>
                        </div>

                    </span>


                        {/* Section2 */}

                    <span className="LPMS-section section2">
                        <div className="LPMS-section2 box1">
                            <h3 className="LPMS-section2-box1_title1">

                                How It Works
                            </h3>
                            <h3 className="LPMS-section2-box1_title2">
                                A simple, efficient solution designed specifically for student and staff transportation
                            </h3>

                        </div>
                        <div className="LPMS-section2 box2">
                            <span className="LPMS-section2_box2_1 LPMS-section2_box2_items">
                                {/* <img src="" alt="" className="LPMS-section2_box2_items_image" /> */}
                                <i className="bi bi-people LPMS-section2_box2_items_image"></i>
                                <h3 className="LPMS-section2_box2_items_title">Campus Community</h3>
                                <p className="LPMS-section2_box2_items_description">Connect with students and trainers from your institution for shared rides.</p>
                            </span>
                            <span className="LPMS-section2_box2_2 LPMS-section2_box2_items">
                                {/* <img src="" alt="" className="LPMS-section2_box2_items_image" /> */}
                                <i className="bi bi-geo-alt LPMS-section2_box2_items_image"></i>
                                <h3 className="LPMS-section2_box2_items_title">Easy Route Planning</h3>
                                <p className="LPMS-section2_box2_items_description">Search your route and instantly find all available transport options.</p>
                            </span>
                            <span className="LPMS-section2_box2_3 LPMS-section2_box2_items">
                                {/* <img src="" alt="" className="LPMS-section2_box2_items_image" /> */}
                                <i className="bi bi-file-lock2 LPMS-section2_box2_items_image"></i>
                                <h3 className="LPMS-section2_box2_items_title">Safe & Verified</h3>
                                <p className="LPMS-section2_box2_items_description">All users are verified members of your institution for maximum safety.</p>
                            </span>
                            <span className="LPMS-section2_box2_4 LPMS-section2_box2_items">
                                {/* <img src="" alt="" className="LPMS-section2_box2_items_image" /> */}
                                <i className="bi bi-credit-card LPMS-section2_box2_items_image"></i>
                                <h3 className="LPMS-section2_box2_items_title">Flexible Payment</h3>
                                <p className="LPMS-section2_box2_items_description">Get live updates on transport availability and departure times.</p>
                            </span>
                            <span className="LPMS-section2_box2_5 LPMS-section2_box2_items">
                                {/* <img src="" alt="" className="LPMS-section2_box2_items_image" /> */}
                                <i className="bi bi-clock LPMS-section2_box2_items_image"></i>
                                <h3 className="LPMS-section2_box2_items_title">Real-time Updates</h3>
                                <p className="LPMS-section2_box2_items_description">Connect with students and trainers from your institution for shared rides.</p>
                            </span>
                            <span className="LPMS-section2_box2_6 LPMS-section2_box2_items">
                                {/* <img src="" alt="" className="LPMS-section2_box2_items_image" /> */}
                                <i className="bi bi-phone LPMS-section2_box2_items_image"></i>
                                <h3 className="LPMS-section2_box2_items_title">Mobile & Desktop</h3>
                                <p className="LPMS-section2_box2_items_description">Access from any device - smartphone, tablet, or computer.</p>
                            </span>


                        </div>
                        <div className="LPMS-section2 box3">
                            <h3 className="LPMS-section2_box3_title">
                                    Your Journey in 4 Simple Steps
                            </h3>
                            <div className="LPMS-section2_box3_items">
                                    <span className="LPMS-section2_box3_item1">
                                        <h3 className="LPMS-section2_box3_items_number">
                                            1
                                        </h3>
                                        <h3 className="LPMS-section2_box3_items_title">
                                                Search Route
                                        </h3>
                                        <p className="LPMS-section2_box3_items_descritpion">
                                                Enter your departure and destination points
                                        </p>

                                    </span>

                                    <span className="LPMS-section2_box3_item1">
                                        <h3 className="LPMS-section2_box3_items_number">
                                            2
                                        </h3>
                                        <h3 className="LPMS-section2_box3_items_title">
                                                Choose Transport
                                        </h3>
                                        <p className="LPMS-section2_box3_items_descritpion">
                                               View and select from available transport options
                                        </p>

                                    </span>

                                    <span className="LPMS-section2_box3_item1">
                                        <h3 className="LPMS-section2_box3_items_number">
                                            3
                                        </h3>
                                        <h3 className="LPMS-section2_box3_items_title">
                                               Authenticate
                                        </h3>
                                        <p className="LPMS-section2_box3_items_descritpion">
                                                Sign in with your institution credentials
                                        </p>

                                    </span>

                                    <span className="LPMS-section2_box3_item1">
                                        <h3 className="LPMS-section2_box3_items_number">
                                            4
                                        </h3>
                                        <h3 className="LPMS-section2_box3_items_title">
                                                Pay & Go
                                        </h3>
                                        <p className="LPMS-section2_box3_items_descritpion">
                                                Pay via cash or card and head to the departure station
                                        </p>

                                    </span>
                            </div>
                        </div>

                        </span>

                        {/* section3 */}
                    <span className="LPMS-section section3">
                        <div className="LPMS-section3 box1">
                            <div className="LPMS-section3 box1">
                                <h3 className="LPMS-section3_title">Pay-As-You-Go Pricing</h3>
                                <p className="LPMS-section3_title_desctiption">Simple, transparent pricing based on distance traveled</p>
                             </div>
                        </div>
                        


                        <div className="LPMS-section3 box2">
  {/* Normal Ride */}
  <div className="LPMS-section3_box2_items LPMS-section3_box2_items_part1">
    <span className="LPMS-section3_box2_items1">
      <h3 className="LPMS-section3_box2_items1_title">Normal Ride</h3>
      <h3 className="LPMS-section3_box2_items1_price">3.5 MAD/km</h3>
      <p className="LPMS-section3_box2_items1_description1">Standard single-person ride for campus travel</p>
    </span>
    <span className="LPMS-section3_box2_items2">
      <p className="LPMS-section3_box2_item2_vehicle_title">Vehicles:</p>
      <p className="LPMS-section3_box2_item2_vehicle_descritpion">Sedan, Hatchback, Electric Car</p>
    </span>
    <span className="LPMS-section3_box2_items3">
      <ul className="LPMS-section3_box2_items3_listDescription">
        <li>✅ Comfortable seating</li>
        <li>✅ Direct route</li>
        <li>✅ Standard service</li>
        <li>✅ Real-time tracking</li>
      </ul>
    </span>
    <button className="LPMS-section3_box2_items_part1_selectionBtn" onClick={() => handlePayasyouGo('normal')}>
      Select Normal Ride
    </button>
  </div>

  {/* VIP Ride */}
  <div className="LPMS-section3_box2_items LPMS-section3_box2_items_part1">
    <span className="LPMS-section3_box2_items1">
      <h3 className="LPMS-section3_box2_items1_title">VIP Ride</h3>
      <h3 className="LPMS-section3_box2_items1_price">7 MAD/km</h3>
      <p className="LPMS-section3_box2_items1_description1">Premium private ride with enhanced comfort</p>
    </span>
    <span className="LPMS-section3_box2_items2">
      <p className="LPMS-section3_box2_item2_vehicle_title">Vehicles:</p>
      <p className="LPMS-section3_box2_item2_vehicle_descritpion">Luxury Sedan, SUV</p>
    </span>
    <span className="LPMS-section3_box2_items3">
      <ul className="LPMS-section3_box2_items3_listDescription">
        <li>✅ Premium vehicles</li>
        <li>✅ Priority service</li>
        <li>✅ Extra comfort</li>
        <li>✅ Professional drivers</li>
        <li>✅ Climate control</li>
      </ul>
    </span>
    <button className="LPMS-section3_box2_items_part1_selectionBtn" onClick={() => handlePayasyouGo('vip')}>
      Select VIP Ride
    </button>
  </div>

  {/* Co-joint (Shared) Ride */}
  <div className="LPMS-section3_box2_items LPMS-section3_box2_items_part1">
    <span className="LPMS-section3_box2_items1">
      <h3 className="LPMS-section3_box2_items1_title">Co-joint (Shared)</h3>
      <h3 className="LPMS-section3_box2_items1_price">2 MAD/km per person</h3>
      <p className="LPMS-section3_box2_items1_description1">Affordable shared ride with up to 3 passengers</p>
    </span>
    <span className="LPMS-section3_box2_items2">
      <p className="LPMS-section3_box2_item2_vehicle_title">Vehicles:</p>
      <p className="LPMS-section3_box2_item2_vehicle_descritpion">Sedan, Electric Car</p>
    </span>
    <span className="LPMS-section3_box2_items3">
      <ul className="LPMS-section3_box2_items3_listDescription">
        <li>✅ Most affordable option</li>
        <li>✅ Eco-friendly</li>
        <li>✅ Meet fellow students</li>
        <li>✅ Similar routes</li>
      </ul>
    </span>
    <button className="LPMS-section3_box2_items_part1_selectionBtn" onClick={() => handlePayasyouGo('co-joint')}>
      Select Co-joint (Shared)
    </button>
  </div>
</div>

                        <div className="LPMS-section3 box3"></div>

                    </span>

                        {/* section4 */}
                    <span className="LPMS-section section4">
                             
                        <h3 className="LPMS-section_section4_title">Want to Save More?</h3>
                        <p className="LPMS-section_section4_description">Check out our prepaid packages with daily, monthly, and yearly credits at discounted rates</p>
                        <button className="LPMS-section_section4_button">
                            <Link to="/Available_packages">View Prepaid Packages</Link>
                        </button>

                    </span>


                    <span className="LPMS-section section5">
                        <div className="LPMS-section_section5_items LPMS-section_section5_items_part1">
                                <h3 className="LPMS-section_section5_items_part1_title">What Our Community Says</h3>

                                <p className="LPMS-section_section5_items_part1_description">Trusted by students and trainers across Morocco</p>
                        </div>
                        <div className="LPMS-section_section5_items LPMS-section_section5_items_part2">
                            <span className="LPMS-section_section5_items_part2_box1">
                                {/* <span className="LPMS-section_section5_items_part2_box1_stars"></span> */}
                                <span className="LPMS-section_section5_items_part2_box1_stars">
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
</span>

                                <span className="LPMS-section_section5_items_part2_box1_slogan"></span>
                                <span className="LPMS-section_section5_items_part2_box1_description">
                                        "Find Transportation made my daily commute so much easier! I can share rides with classmates and save money. The app is reliable and the drivers are always professional."
                                </span>
                                <span className="LPMS-section_section5_items_part2_box1_testimonial_profile">
                                    <span className="LPMS-section_section5_items_part2_box1_testimonial_profile_picture">
                                        <img src={profile} alt="" className="testimonial_profile_picture" />
                                    </span>
                                    <span>
                                        <h3 className="LPMS-section_section5_items_part2_box1_testimonial_profile_name">
                                                        Sarah Benjelloun</h3>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_role">Computer Science Student</p>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_university">ENSA Tétouan</p>
                                    </span>
                                </span>

                            </span>
                            <span className="LPMS-section_section5_items_part2_box2">

                                {/* <span className="LPMS-section_section5_items_part2_box1_stars"></span> */}
                                <span className="LPMS-section_section5_items_part2_box1_stars">
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
</span>

                                <span className="LPMS-section_section5_items_part2_box1_slogan"></span>
                                <span className="LPMS-section_section5_items_part2_box1_description">
                                        "Find Transportation made my daily commute so much easier! I can share rides with classmates and save money. The app is reliable and the drivers are always professional."
                                </span>
                                <span className="LPMS-section_section5_items_part2_box1_testimonial_profile">
                                    <span className="LPMS-section_section5_items_part2_box1_testimonial_profile_picture">
                                        <img src={profile} alt="" className="testimonial_profile_picture" />
                                    </span>
                                    <span>
                                        <h3 className="LPMS-section_section5_items_part2_box1_testimonial_profile_name">
                                                        Sarah Benjelloun</h3>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_role">Computer Science Student</p>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_university">ENSA Tétouan</p>
                                    </span>
                                </span>

                            </span>
                            <span className="LPMS-section_section5_items_part2_box3">

                                {/* <span className="LPMS-section_section5_items_part2_box1_stars"></span> */}
                                <span className="LPMS-section_section5_items_part2_box1_stars">
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
</span>

                                <span className="LPMS-section_section5_items_part2_box1_slogan"></span>
                                <span className="LPMS-section_section5_items_part2_box1_description">
                                        "Find Transportation made my daily commute so much easier! I can share rides with classmates and save money. The app is reliable and the drivers are always professional."
                                </span>
                                <span className="LPMS-section_section5_items_part2_box1_testimonial_profile">
                                    <span className="LPMS-section_section5_items_part2_box1_testimonial_profile_picture">
                                        <img src={profile} alt="" className="testimonial_profile_picture" />
                                    </span>
                                    <span>
                                        <h3 className="LPMS-section_section5_items_part2_box1_testimonial_profile_name">
                                                        Sarah Benjelloun</h3>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_role">Computer Science Student</p>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_university">ENSA Tétouan</p>
                                    </span>
                                </span>

                            </span>
                            <span className="LPMS-section_section5_items_part2_box4">

                                <span className="LPMS-section_section5_items_part2_box1_stars">
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
</span>
                                <span className="LPMS-section_section5_items_part2_box1_slogan"></span>
                                <span className="LPMS-section_section5_items_part2_box1_description">
                                        "Find Transportation made my daily commute so much easier! I can share rides with classmates and save money. The app is reliable and the drivers are always professional."
                                </span>
                                <span className="LPMS-section_section5_items_part2_box1_testimonial_profile">
                                    <span className="LPMS-section_section5_items_part2_box1_testimonial_profile_picture">
                                        <img src={profile} alt="" className="testimonial_profile_picture" />
                                    </span>
                                    <span>
                                        <h3 className="LPMS-section_section5_items_part2_box1_testimonial_profile_name">
                                                        Sarah Benjelloun</h3>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_role">Computer Science Student</p>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_university">ENSA Tétouan</p>
                                    </span>
                                </span>

                            </span>
                        </div>
                        <div className="LPMS-section_section5_items LPMS-section_section5_items_part3">
                                5,000+
                            Active Users
                        50+
                        Partner Institutions
                        15,000+
                    Monthly Rides
                    4.9/5
                            Average Rating
                        </div>
                    </span>

                   <span className="LPMS-section section6">
  <footer className="footer">
    
    <div className="footer-column footer-about">
      <div className="logo">
        <Logo />
      </div>
      <p className="footer-about-quote">
        Smart collective transport solution for students and staff. Connecting campus communities
        through safe, affordable, and eco-friendly transportation options.
      </p>
      <div className="footer-social-links">
        <a href="#" aria-label="Facebook" className="social-link">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Twitter" className="social-link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram" className="social-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="LinkedIn" className="social-link">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>

    <div className="newsLetterSection">

    <div className="footer-column">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><Link to="/ContactUS">Contact us</Link></li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Services</h3>
      <ul>
        <li><a href="#">Campus Rides</a></li>
        <li><a href="#">Shared Transportation</a></li>
        <li><a href="#">VIP Rides</a></li>
        <li><a href="#">Prepaid Packages</a></li>
        <li><a href="#">Institution Partnerships</a></li>
        <li><a href="#">Safety Features</a></li>
        <Link className="handle-cheffaur-tag" to="/registerDriver">devenez vous cheffaur ?</Link>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Contact Info</h3>
      <div className="footer-contact-info">
        <p>
          <i className="fas fa-map-marker-alt"></i>
          <span>123 Campus Ave, Rabat, Morocco</span>
        </p>
        <p>
          <i className="fas fa-phone-alt"></i>
          <span>+212 5 000 00000</span>
        </p>
        <p>
          <i className="fas fa-envelope"></i>
          <span>support@campustransport.ma</span>
        </p>
        <p>
          <i className="fas fa-clock"></i>
          <span>Mon-Fri: 8AM - 8PM</span>
        </p>
      </div>
    </div>

    
    <div className="footer-column">
      <h3>Newsletter</h3>
      <p>Subscribe to get the latest updates and offers:</p>
      <form className="newsletter-form">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Your email address"
            required
          />
        </div>
        <button type="submit" className="btn-primary">
          Subscribe
        </button>
      </form>
    </div>

    </div>

  
    <div className="footer-bottom">
      <div className="section-divider"></div>
      <p>&copy; {new Date().getFullYear()} CampusTransport. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Sitemap</a>
      </div>
      <div className="payment-methods">
        <p>We accept:</p>
        <div className="payment-icons">
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-paypal"></i>
          <span>Cash</span>
        </div>
      </div>
    </div>

 
    <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
      <i className="fas fa-arrow-up"></i>
    </button>
  </footer>

 
{/*  */}

</span>


                </div>
            
            </div>

        </>
    )
}

export default Landing_page1