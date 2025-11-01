// import React, { useState } from "react";
// import "../Styles/dashboard1.css";
// import {Link} from "react-router-dom";

// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState("new");

//   return (
//     <div className="dashboard-page">
//       {/* Navigation Bar */}
//       <nav className="nav-bar">
//         <div className="nav-left">
//           <h2>Transportation App Design</h2>
//         </div>
//         <div className="nav-right">
//           <Link to="/">Logout</Link>
//         </div>
//       </nav>

//       {/* Profile Section */}
//       <header className="profile-header">
//         <div className="profile-info">
//           <div className="avatar">A</div>
//           <div>
//             <h3>Admin</h3>
//             <p>admin@admin.cim</p>
//           </div>
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
//             <div className="form-container">
//               <div className="form-row">
//                 <div>
//                   <label>From</label>
//                   <input type="text" placeholder="Enter departure location" />
//                 </div>
//                 <div>
//                   <label>To</label>
//                   <input type="text" placeholder="Enter destination location" />
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div>
//                   <label>Date</label>
//                   <input type="date" />
//                 </div>
//                 <div>
//                   <label>Time</label>
//                   <input type="time" />
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div>
//                   <label>Number of Passengers</label>
//                   <select>
//                     <option>Select passengers</option>
//                     <option>1 passenger</option>
//                     <option>2 passengers</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label>Payment Method</label>
//                   <select>
//                     <option>Select payment method</option>
//                     <option>Cash</option>
//                     <option>Credit Card</option>
//                     <option>Prepaid Credit</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="form-row full-width">
//                 <label>Additional Notes (Optional)</label>
//                 <textarea placeholder="Any special requirements or notes for your trip..." />
//               </div>

//               <div className="form-actions">
//                 <button className="clear-btn">Clear Form</button>
//                 <button className="submit-btn">Submit Order →</button>
//               </div>
//             </div>

//             <div className="stats">
//               <div className="card">
//                 <h4>Available Credit</h4>
//                 <p className="highlight">450 MAD</p>
//                 <a href="#">Add more credit</a>
//               </div>
//               <div className="card">
//                 <h4>Total Trips</h4>
//                 <p className="highlight">24</p>
//                 <p>This month: 4 trips</p>
//               </div>
//               <div className="card">
//                 <h4>Member Since</h4>
//                 <p className="highlight">Jan 2025</p>
//                 <span className="status active">Active Member</span>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* --- ORDER HISTORY TAB --- */}
//         {activeTab === "history" && (
//           <section className="order-history">
//             <h3>Order History</h3>
//             <p>View all your past and upcoming transportation bookings</p>

//             <div className="order-card">
//               <div>
//                 <h4>Casablanca → Rabat</h4>
//                 <p>2025-10-15 | 08:00 AM | 1 passenger</p>
//               </div>
//               <div className="order-status completed">Completed</div>
//               <div className="order-cost">
//                 <p>120 MAD</p>
//                 <span>Credit Card</span>
//               </div>
//             </div>

//             <div className="order-card">
//               <div>
//                 <h4>Marrakech → Casablanca</h4>
//                 <p>2025-10-18 | 02:00 PM | 1 passenger</p>
//               </div>
//               <div className="order-status completed">Completed</div>
//               <div className="order-cost">
//                 <p>250 MAD</p>
//                 <span>Prepaid Credit</span>
//               </div>
//             </div>

//             <div className="order-card">
//               <div>
//                 <h4>Fes → Meknes</h4>
//                 <p>2025-10-20 | 10:30 AM | 2 passengers</p>
//               </div>
//               <div className="order-status pending">Pending</div>
//               <div className="order-cost">
//                 <p>180 MAD</p>
//                 <span>Cash</span>
//                 <button className="cancel-btn">Cancel</button>
//               </div>
//             </div>

//             <div className="order-card">
//               <div>
//                 <h4>Tangier → Tetouan</h4>
//                 <p>2025-10-12 | 09:00 AM | 1 passenger</p>
//               </div>
//               <div className="order-status cancelled">Cancelled</div>
//               <div className="order-cost">
//                 <p>150 MAD</p>
//                 <span>Credit Card</span>
//               </div>
//             </div>
//           </section>
//         )}
//       </main>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { createClient } from "@supabase/supabase-js";
// import "../Styles/dashboard1.css";

// // Supabase setup
// const supabaseUrl = "https://xdbhtxoheaqgrbruapxv.supabase.co";
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("new");

//   // Controlled form state
//   const [formData, setFormData] = useState({
//     from: "",
//     to: "",
//     date: "",
//     time: "",
//     passengers: "",
//     paymentMethod: "",
//     notes: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Handle form input changes
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
//       !formData.paymentMethod
//     ) {
//       setError("Please fill in all required fields.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       // Insert new order into Supabase table "orders" (adjust table/fields as needed)
//       const { data, error } = await supabase.from("searched_locations").insert([
//         {
//           start_location: formData.from,
//           end_location: formData.to,
//           ride_date: formData.date,
//           ride_time: formData.time,
//           passengers: formData.passengers,
//           payment_method: formData.paymentMethod,
//           notes: formData.notes,
//           created_at: new Date().toISOString(),
//           status: "pending",
//         },
//       ]);

//       if (error) throw error;

//       // Optionally redirect to SearchResults or show confirmation
//       // For example, navigate to SearchResults and pass query params or state
//       navigate("/SearchResult", { state: { ...formData } });
//     } catch (err) {
//       setError("Failed to submit order. Please try again.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="dashboard-page">
//       {/* Navigation Bar */}
//       <nav className="nav-bar">
//         <div className="nav-left">
//           <h2>Transportation App Design</h2>
//         </div>
//         <div className="nav-right">
//           <Link to="/">Logout</Link>
//         </div>
//       </nav>

//       {/* Profile Section */}
//       <header className="profile-header">
//         <div className="profile-info">
//           <div className="avatar">A</div>
//           <div>
//             <h3>Admin</h3>
//             <p>admin@admin.cim</p>
//           </div>
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
//                   <input
//                     id="date"
//                     name="date"
//                     type="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                     required
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

//             <div className="stats">
//               <div className="card">
//                 <h4>Available Credit</h4>
//                 <p className="highlight">450 MAD</p>
//                 <a href="#">Add more credit</a>
//               </div>
//               <div className="card">
//                 <h4>Total Trips</h4>
//                 <p className="highlight">24</p>
//                 <p>This month: 4 trips</p>
//               </div>
//               <div className="card">
//                 <h4>Member Since</h4>
//                 <p className="highlight">Jan 2025</p>
//                 <span className="status active">Active Member</span>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* --- ORDER HISTORY TAB --- */}
//         {activeTab === "history" && (
//           <section className="order-history">
//             <h3>Order History</h3>
//             <p>View all your past and upcoming transportation bookings</p>

//             {/* Example static data - you can replace with dynamic data from Supabase */}
//             <div className="order-card">
//               <div>
//                 <h4>Casablanca → Rabat</h4>
//                 <p>2025-10-15 | 08:00 AM | 1 passenger</p>
//               </div>
//               <div className="order-status completed">Completed</div>
//               <div className="order-cost">
//                 <p>120 MAD</p>
//                 <span>Credit Card</span>
//               </div>
//             </div>

//             {/* Add more order cards here */}
//           </section>
//         )}
//       </main>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { createClient } from "@supabase/supabase-js";
// import "../Styles/dashboard1.css";

// // Supabase setup
// const supabaseUrl = "https://xdbhtxoheaqgrbruapxv.supabase.co"; // <-- your URL
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA"; // <-- your anon or service key
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("new");

//   // Controlled form state
//   const [formData, setFormData] = useState({
//     from: "",
//     to: "",
//     date: "",
//     time: "",
//     passengers: "",
//     paymentMethod: "",
//     rideType: "normal", // default ride_type
//     notes: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Handle form input changes
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
//       const { data, error } = await supabase.from("orders").insert([
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
//       navigate("/SearchResult", { state: { ...formData } });
//     } catch (err) {
//       setError("Failed to submit order. Please try again.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="dashboard-page">
//       {/* Navigation Bar */}
//       <nav className="nav-bar">
//         <div className="nav-left">
//           <h2>Transportation App Design</h2>
//         </div>
//         <div className="nav-right">
//           <Link to="/">Logout</Link>
//         </div>
//       </nav>

//       {/* Profile Section */}
//       <header className="profile-header">
//         <div className="profile-info">
//           <div className="avatar">A</div>
//           <div>
//             <h3>Admin</h3>
//             <p>admin@admin.cim</p>
//           </div>
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
//                   <input
//                     id="date"
//                     name="date"
//                     type="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                     required
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

//             {/* Add your stats or other info here if needed */}
//           </section>
//         )}

//         {/* --- ORDER HISTORY TAB --- */}
//         {activeTab === "history" && (
//           <section className="order-history">
//             <h3>Order History</h3>
//             <p>View all your past and upcoming transportation bookings</p>

//             {/* TODO: Replace with dynamic data from Supabase */}
//             <div className="order-card">
//               <div>
//                 <h4>Casablanca → Rabat</h4>
//                 <p>2025-10-15 | 08:00 AM | 1 passenger</p>
//               </div>
//               <div className="order-status completed">Completed</div>
//               <div className="order-cost">
//                 <p>120 MAD</p>
//                 <span>Credit Card</span>
//               </div>
//             </div>

//             {/* Add more order cards here */}
//           </section>
//         )}
//       </main>
//     </div>
//   );
// }


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


//  useEffect(() => {
//     if (!UserData) return; // wait for userData to load

//     const fetchPackages = async () => {
//       setHistoryLoading(true); // Set loading state to true while fetching data

//       try {
//         const { data, error } = await supabase
//           .from("packages") // Replace with your actual table name
//           .select("*") // You can specify columns here like "name, description, price" etc.
//           .eq("user_email", UserData.email); // You can filter by user email or any other logic

//         if (error) throw error;

//         setPackageData(data || []); // Set the fetched data to state
//       } catch (err) {
//         console.error("Error fetching package data:", err);
//       } finally {
//         setHistoryLoading(false); // Reset loading state after fetch
//       }
//     };

//     fetchPackages(); // Fetch packages once UserData is loaded
//   }, [UserData]); // Runs whenever UserData changes


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
//                   {/* <input
//                     id="date"
//                     name="date"
//                     type="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                     required
//                   /> */}
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


//             {/* <div className="credit-rides-info">
//               <h3>included Package</h3>
//               <div className="credit">450 mad</div>
//               <div className="ride-info">250 rides</div>
//             </div> */}

//             {/* Package Info Section */}
//         <div className="package-info">
//           <h3>Package Information</h3>
//           {historyLoading ? (
//             <p>Loading package data...</p>
//           ) : packageData.length === 0 ? (
//             <p>No packages found.</p>
//           ) : (
//             packageData.map((pkg) => (
//               <div key={pkg.id} className="package-card">
//                 <h4>{pkg.name}</h4>
//                 <p>{pkg.description}</p>
//                 <p><strong>Price:</strong> {pkg.price} MAD</p>
//                 <p><strong>Included Km:</strong> {pkg.includedkm} km</p>
//                 <p><strong>Category:</strong> {pkg.category}</p>
//                 <p><strong>Normal Price:</strong> {pkg.normalprice} MAD</p>
//                 <p><strong>VIP Price:</strong> {pkg.vipprice} MAD</p>
//                 <p><strong>Co-joint Price:</strong> {pkg.cojointprice} MAD</p>
//               </div>
//             ))
//           )}
//         </div>

//             {/* Add your stats or other info here if needed */}
//           </section>
//         )}

//         {/* --- ORDER HISTORY TAB --- */}
//         {/* {activeTab === "history" && (
//           <section className="order-history">
//             <h3>Order History</h3>
//             <p>View all your past and upcoming transportation bookings</p>

            
//             <div className="order-card">
//               <div>
//                 <h4>Casablanca → Rabat</h4>
//                 <p>2025-10-15 | 08:00 AM | 1 passenger</p>
//               </div>
//               <div className="order-status completed">Completed</div>
//               <div className="order-cost">
//                 <p>120 MAD</p>
//                 <span>Credit Card</span>
//               </div>
//             </div>

            
//           </section>
//         )} */}

//         {/* {activeTab === "history" && (
//   <section className="order-history">
//     <h3>Order History</h3>
//     <p>View all your past and upcoming transportation bookings</p>

//     {historyLoading ? (
//       <p>Loading order history...</p>
//     ) : orderHistory.length === 0 ? (
//       <p>No orders found.</p>
//     ) : (
//       orderHistory.map((order) => (
//         <div key={order.id} className="order-card">
//           <div>
//             <h4>{order.start_location} → {order.end_location}</h4>
//             <p>
//               {order.ride_date} | {order.ride_time} | {order.passengers} passenger(s)
//             </p>
//           </div>
//           <div className={`order-status ${order.status}`}>
//             {order.status}
//           </div>
//           <div className="order-cost">
//             <p>{order.cost || "N/A"} MAD</p>
//             <span>{order.payment_method}</span>
//           </div>
//         </div>
//       ))
//     )}
//   </section>
// )} */}
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



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import "../Styles/dashboard1.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Logo from "../../public/Logo.svg"

// Supabase setup
const supabaseUrl = "https://xdbhtxoheaqgrbruapxv.supabase.co"; // <-- your URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA"; // <-- your anon or service key
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Dashboard() {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("new");
  const [UserData, setUserData] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);
const [historyLoading, setHistoryLoading] = useState(false);
 const [creditInfo, setCreditInfo] = useState({
    madBalance: 0, // Default to 0
    totalRides: 0, // Default to 0
  });
  // const [includedPackage, setIncludedPackage] = useState({
  //   name: "",
  //   description: "",
  //   price: "",
  //   includedkm: "",
  //   category: "",
  //   normalprice: "",
  //   vipprice: "",
  //   cojointprice: "",
  // });


  const [includedPackage, setIncludedPackage] = useState([]); // Initialize as an array


// depends on UserData

    // Controlled form state
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    passengers: "",
    paymentMethod: "",
    rideType: "normal", // default ride_type
    // notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      console.log("setted Data", JSON.parse(storedUserData))
    }
  }, []); // ✅ Empty dependency array runs once on mount

useEffect(() => {
  if (!UserData) return; // wait for userData to load

  const fetchOrders = async () => {
    setHistoryLoading(true);
    try {
      const { data, error } = await supabase
        .from("ride_order")
        .select("*")
        .eq("email_address", UserData.email) // make sure your table has user_id column
        .order("ride_date", { ascending: false });

      if (error) throw error;
      setOrderHistory(data || []);
    } catch (err) {
      console.error("Error fetching order history:", err);
    } finally {
      setHistoryLoading(false);
    }
  };

  fetchOrders();
}, [UserData]); 


//  useEffect(() => {
//     if (!UserData) return; // wait for userData to load

//     const fetchPackages = async () => {
//       setHistoryLoading(true); // Set loading state to true while fetching data

//       try {
//         const { data, error } = await supabase
//           .from("packages") // Replace with your actual table name
//           .select("*") // You can specify columns here like "name, description, price" etc.
//           .eq("user_email", UserData.email); // You can filter by user email or any other logic

//         if (error) throw error;

//         setPackageData(data || []); // Set the fetched data to state
//       } catch (err) {
//         console.error("Error fetching package data:", err);
//       } finally {
//         setHistoryLoading(false); // Reset loading state after fetch
//       }
//     };

//     fetchPackages(); // Fetch packages once UserData is loaded
//   }, [UserData]); // Runs whenever UserData changes


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


// Corrected version of the package fetching useEffect
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


useEffect(() => {
  if (!UserData) return; // Wait for user data to load

  const fetchPackageData = async () => {
    setHistoryLoading(true); // Set loading state to true while fetching data

    try {
      // 1. Query package_submission_choice table to get package_id based on user email
      const { data: submissionData, error: submissionError } = await supabase
        .from("package_submissions_choice")
        .select("package_id")
        .eq("email", UserData.email); // Query by email

      if (submissionError) throw submissionError;

      if (submissionData.length > 0) {
        const packageId = submissionData[0].package_id; // Extract package_id

        // 2. Fetch the package details from the packages table using the package_id
        const { data: packageData, error: packageError } = await supabase
          .from("packages")
          .select("*")
          .eq("id", packageId); // Query by package_id

        if (packageError) throw packageError;

        // Set the fetched package data to state
        setIncludedPackage(packageData || []); 
      } else {
        // Handle case where no package submission choice is found for the user
        console.log("No package submission found for this user.");
        setIncludedPackage([]); // Clear or set empty package data
      }
    } catch (err) {
      console.error("Error fetching package data:", err);
    } finally {
      setHistoryLoading(false); // Reset loading state after fetch
    }
  };

  fetchPackageData(); // Fetch package data once UserData is loaded
}, [UserData]); // Runs whenever UserData changes





  const RedirecttoSearchResultPage = () => {
  // Format date string to YYYY-MM-DD if it's a Date object or valid string
  let formattedDate = "";

  if (formData.date) {
    if (formData.date instanceof Date) {
      // If date is a Date object
      formattedDate = formData.date.toISOString().slice(0, 10);
    } else if (typeof formData.date === "string") {
      // If date is a string (like "2025-10-21"), try parsing and formatting it safely
      const parsedDate = new Date(formData.date);
      if (!isNaN(parsedDate)) {
        formattedDate = parsedDate.toISOString().slice(0, 10);
      } else {
        // fallback, just keep original string
        formattedDate = formData.date;
      }
    }
  }

  navigate("/SearchResult", {
    state: {
      ...formData,
      date: formattedDate,
    },
  });
};

// Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Clear form
  const handleClear = () => {
    setFormData({
      from: "",
      to: "",
      date: "",
      time: "",
      passengers: "",
      paymentMethod: "",
      rideType: "normal",
      notes: "",
    });
    setError(null);
  };

  // Submit form and save to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !formData.from ||
      !formData.to ||
      !formData.date ||
      !formData.time ||
      !formData.passengers ||
      !formData.paymentMethod ||
      !formData.rideType
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Prepare date and time values as needed by your table schema
      const rideDate = formData.date; // yyyy-mm-dd from date input (string)
      const rideTime = formData.time; // HH:MM from time input (string)

      // Insert new order into Supabase table "orders"
      const { data, error } = await supabase.from("orders_test").insert([
        {
          start_location: formData.from,
          end_location: formData.to,
          ride_date: rideDate,
          ride_time: rideTime,
          passengers: Number(formData.passengers),
          payment_method: formData.paymentMethod,
          ride_type: formData.rideType,
          notes: formData.notes || null,
          created_at: new Date().toISOString(),
          status: "pending",
        },
      ]);

      if (error) throw error;

      // Navigate to SearchResult page and pass form data (optional)
      RedirecttoSearchResultPage();
    } catch (err) {
      setError("Failed to submit order. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userData")
    navigate("/")
  }

  return (
    <div className="dashboard-page">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-left">
        
            <img src={Logo} alt="Logo-image" />
          
          <h2>Transportation App Design</h2>
        </div>
        <div className="nav-right">
          <li onClick={handleLogout} className="Logout-link">Logout</li>
        </div>
      </nav>

      {/* Profile Section */}
      <header className="profile-header">
        <div className="profile-info">
          <div className="avatar">A</div>
          <div className="UserData-preview">
          {UserData ? (
    <>
      <h3>{UserData.username}</h3>
      <p>{UserData.email}</p>
      <p>Member since: {UserData.created_at}</p>
    </>
  ) : (
    <p>Loading user data...</p>
  )}
  </div>
        </div>
      </header>

      {/* Dashboard Section */}
      <main className="main-content">
        <h2>My Dashboard</h2>
        <p>Manage your transportation orders and bookings</p>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === "new" ? "active" : ""}
            onClick={() => setActiveTab("new")}
          >
            New Order
          </button>
          <button
            className={activeTab === "history" ? "active" : ""}
            onClick={() => setActiveTab("history")}
          >
            Order History
          </button>
        </div>

        {/* --- NEW ORDER TAB --- */}
        {activeTab === "new" && (
          <section className="new-order">
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-row">
                <div>
                  <label htmlFor="from">From</label>
                  <input
                    id="from"
                    name="from"
                    type="text"
                    placeholder="Enter departure location"
                    value={formData.from}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="to">To</label>
                  <input
                    id="to"
                    name="to"
                    type="text"
                    placeholder="Enter destination location"
                    value={formData.to}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label htmlFor="date">Date</label>
                  
                   <DatePicker
                    selected={formData.date}
                    onChange={(date) => setFormData({ ...formData, date })}
                    dateFormat="yyyy-MM-dd"
                  />
                </div>
                <div>
                  <label htmlFor="time">Time</label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label htmlFor="passengers">Number of Passengers</label>
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
                </div>
                <div>
                  <label htmlFor="paymentMethod">Payment Method</label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select payment method</option>
                    <option value="Cash">Cash</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Prepaid Credit">Prepaid Credit</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label htmlFor="rideType">Ride Type</label>
                  <select
                    id="rideType"
                    name="rideType"
                    value={formData.rideType}
                    onChange={handleChange}
                    required
                  >
                    <option value="normal">Normal</option>
                    <option value="vip">VIP</option>
                    <option value="co-joint">Co-joint</option>
                  </select>
                </div>
              </div>

              <div className="form-row full-width">
                <label htmlFor="notes">Additional Notes (Optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="Any special requirements or notes for your trip..."
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              {error && (
                <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
              )}

              <div className="form-actions">
                <button
                  type="button"
                  className="clear-btn"
                  onClick={handleClear}
                  disabled={loading}
                >
                  Clear Form
                </button>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Order →"}
                </button>
              </div>
            </form>


         

            {/* Package Info Section */}
       {/* Package Info Section */}
<div className="package-info">
  <h3>Package Information</h3>
  {historyLoading ? (
    <p>Loading package data...</p>
  ) : includedPackage.length === 0 ? ( // Use includedPackage here
    <p>No packages found.</p>
  ) : (
    includedPackage.map((pkg) => (  // Use includedPackage here
      <div key={pkg.id} className="package-card">
        <h4>{pkg.name}</h4>
        <p>{pkg.description}</p>
        <p><strong>Price:</strong> {pkg.price} MAD</p>
        <p><strong>Included Km:</strong> {pkg.includedkm} km</p>
        <p><strong>Category:</strong> {pkg.category}</p>
        <p><strong>Normal Price:</strong> {pkg.normalprice} MAD</p>
        <p><strong>VIP Price:</strong> {pkg.vipprice} MAD</p>
        <p><strong>Co-joint Price:</strong> {pkg.cojointprice} MAD</p>
      </div>
    ))
  )}
</div>


            {/* Add your stats or other info here if needed */}
          </section>
        )}

       
      {activeTab === "history" && (
  <section className="order-history">
    <h3>Order History</h3>
    {historyLoading ? (
      <p>Loading order history...</p>
    ) : orderHistory.length === 0 ? (
      <p>No orders found.</p>
    ) : (
      orderHistory.map((order) => (
        <div key={order.id} className="order-card">
          <div>
            <h4>{order.start_location} → {order.destination}</h4>
            <p>
              {order.ride_date} | {order.ride_time} | {order.number_of_passengers} passenger(s)
            </p>
          </div>
          <div className={`order-status ${order.ride_status.toLowerCase()}`}>
            {order.ride_status}
          </div>
          <div className="order-cost">
            <p>{order.price} MAD</p>
            <span>{order.payment_type}</span>
          </div>
        </div>
      ))
    )}
  </section>
)}

      </main>
    </div>
  );
}
