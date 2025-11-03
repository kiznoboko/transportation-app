// import React from "react";
// import "../Styles/Search_results.css";
// import { FaSearch, FaPlay } from "react-icons/fa";
// import {Link} from "react-router-dom"
// // import car1 from "./images/car1.png"

// const Search_results = () => {
//   return (
//     <div className="transportation-page">
//       {/* ===== Header Placeholder ===== */}
//       <header className="transportation-header">
//         <div className="header-bar">
//         <Link to="/">
//             home
//         </Link>
//         </div>
//       </header>

//       {/* ===== Search Bar Section ===== */}
//       <section className="transportation-search-bar">
//         {/* <car1/> */}

//         <div className="transportation-filters">
//           <input
//             type="text"
//             placeholder="Pick-up location"
//             className="transportation-input"
//           />
//           <input type="text" placeholder="Destination" className="transportation-input" />
//           <input type="date" className="transportation-input" />
//           <input type="time" className="transportation-input" />
//           <select className="transportation-input">
//             <option value="" selected disabled>Select type</option>
//             <option value="car">Car</option>
//             <option value="bus">Bus</option>
//             <option value="train">Train</option>
//             <option value="shared">Shared Ride</option>
//           </select>
//         </div>

//         <button className="transportation-search-btn">
//           <FaSearch />
//         </button>
//       </section>

//       {/* ===== Available Transportation Section ===== */}
//       <section className="transportation-available">
//         <div className="transportation-section-title">
//           <span>Available transportation</span>
//           <FaPlay className="transportation-arrow" />
//         </div>

//         <hr className="transportation-divider" />

//         <div className="transportation-grid">
//           {[...Array(8)].map((_, i) => (
//             <div key={i} className="transportation-card"></div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Search_results;


// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../Styles/Search_results.css";
// import { FaSearch, FaPlay } from "react-icons/fa";
// import { createClient } from "@supabase/supabase-js";

// // Supabase setup
// const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA';
// const supabase = createClient(supabaseUrl, supabaseKey);

// const Search_results = () => {
//   const { state } = useLocation();
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     if (!state) return;

//     const fetchData = async () => {
//       const { departure, destination, date, time } = state;

//       const rideDateTime = date && time ? `${date}T${time}:00` : null;

//       let query = supabase
//         .from("searched_locations")
//         .select("*")
//         .ilike("start_location", `%${departure}%`)
//         .ilike("end_location", `%${destination}%`);

//       if (rideDateTime) {
//         query = query.gte("ride_time", rideDateTime);
//       }

//       const { data, error } = await query;

//       if (!error) setResults(data);
//       else console.error(error);
//     };

//     fetchData();
//   }, [state]);

//   return (
//     <div className="transportation-page">
//       <header className="transportation-header">
//         <div className="header-bar">
//           <a href="/">home</a>
//         </div>
//       </header>

//       <section className="transportation-search-bar">
//         <div className="transportation-filters">
//           <input
//             type="text"
//             value={state?.departure || ""}
//             placeholder="Pick-up location"
//             className="transportation-input"
//             readOnly
//           />
//           <input
//             type="text"
//             value={state?.destination || ""}
//             placeholder="Destination"
//             className="transportation-input"
//             readOnly
//           />
//           <input
//             type="date"
//             value={state?.date || ""}
//             className="transportation-input"
//             readOnly
//           />
//           <input
//             type="time"
//             value={state?.time || ""}
//             className="transportation-input"
//             readOnly
//           />
//           <select className="transportation-input" value={state?.rideType || ""} disabled>
//             <option value="">Select type</option>
//             <option value="normal">normal</option>
//             <option value="vip">vip</option>
//             <option value="co-joint">co-joint</option>
//           </select>
//         </div>

//         <button className="transportation-search-btn">
//           <FaSearch />
//         </button>
//       </section>

//       <section className="transportation-available">
//         <div className="transportation-section-title">
//           <span>Available transportation</span>
//           <FaPlay className="transportation-arrow" />
//         </div>

//         <hr className="transportation-divider" />

//         <div className="transportation-grid">
//           {results.length === 0 ? (
//             <p>No matching rides found.</p>
//           ) : (
//             results.map((ride) => (
//               <div key={ride.id} className="transportation-card">
//                 <p>{ride.start_location} → {ride.end_location}</p>
//                 <p>Time: {new Date(ride.ride_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
//                 <p>Seats: {ride.available_seats}</p>
//               </div>
//             ))
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Search_results;



// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../Styles/Search_results.css";
// import { FaSearch, FaPlay } from "react-icons/fa";
// import { createClient } from "@supabase/supabase-js";
// import { useNavigate } from "react-router-dom";

// // Supabase setup
// const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA';
// const supabase = createClient(supabaseUrl, supabaseKey);

// const Search_results = () => {
//   const navigate = useNavigate()
 
//   const { state } = useLocation();

//   // Local form state initialized from route state or defaults
//   const [formData, setFormData] = useState({
//     departure: state?.departure || "",
//     destination: state?.destination || "",
//     date: state?.date || "",
//     time: state?.time || "",
//     rideType: state?.rideType || "",
//    payment_method: state?.payment_method || "",
//    passengers : state?.passengers || ""

//   });

//   const [results, setResults] = useState([]);

//    const handlereserve = (ride) => {
//   navigate("/Payment_page", { state: { ...formData, selectedRide: ride } });
// };

//   // Fetch function based on current formData
// //   const fetchData = async () => {
// //     const { departure, destination, date, time, rideType, payment_method} = formData;
// //     const rideDateTime = date && time ? `${date}T${time}:00` : null;

// //     let query = supabase
// //       .from("orders_test")
// //       .select("*")
// //       .ilike("start_location", `%${departure}%`)
// //       .ilike("end_location", `%${destination}%`);

// //    if (date) query = query.gte("ride_date", date);
// // if (time) query = query.gte("ride_time", time);
// //     if (rideType) {
// //       query = query.eq("ride_type", rideType);
// //     }

// //     if (payment_method) {
// //   query = query.eq("payment_method", payment_method);
// // }
// //   if (passengers) query = query.eq("passengers", Number(passengers));

// //     const { data, error } = await query;

// //     if (!error) setResults(data);
// //     else console.error(error);
// //   };

// const fetchData = async () => {
//   const { departure, destination, date, time, rideType, payment_method, passengers } = formData;

//   let query = supabase
//     .from("orders_test")
//     .select("*")
//     .ilike("start_location", `%${departure}%`)
//     .ilike("end_location", `%${destination}%`);

//   if (date) query = query.gte("ride_date", date);

//   if (time) {
//     const timeValue = time.length === 5 ? `${time}:00` : time; // "HH:MM:SS"
//     query = query.gte("ride_time", timeValue);
//   }

//   if (rideType) query = query.eq("ride_type", rideType);
//   if (payment_method) query = query.eq("payment_method", payment_method);
//   if (passengers) query = query.eq("passengers", Number(passengers));

//   const { data, error } = await query;
//   if (!error) setResults(data);
//   else console.error(error);
// };


//   // Fetch on mount & whenever formData changes
//   useEffect(() => {
//     fetchData();
//   }, [formData]);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Handle manual form submit (optional, since fetch triggers on change)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchData();
//   };

//   return (
//     <div className="transportation-page">
//       <header className="transportation-header">
//         <div className="header-bar">
//           <a className="SearchResult-navLink" href="#">home</a>
//         </div>
//       </header>

//       <section className="transportation-search-bar">
//         {/* Make this a form so user can submit */}
//         <form onSubmit={handleSubmit} className="transportation-filters">
//           <input
//             type="text"
//             name="departure"
//             value={formData.departure}
//             placeholder="Pick-up location"
//             className="transportation-input"
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="destination"
//             value={formData.destination}
//             placeholder="Destination"
//             className="transportation-input"
//             onChange={handleChange}
//           />
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             className="transportation-input"
//             onChange={handleChange}
//           />
//           <input
//             type="time"
//             name="time"
//             value={formData.time}
//             className="transportation-input"
//             onChange={handleChange}
//           />
//           <select
//             name="rideType"
//             className="transportation-input"
//             value={formData.rideType}
//             onChange={handleChange}
//           >
//             <option value="">Select type</option>
//             <option value="normal">normal</option>
//             <option value="vip">vip</option>
//             <option value="co-joint">co-joint</option>
//           </select>

//           <select
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


//           <select
//   name="payment_method"
//   value={formData.payment_method}
//   onChange={handleChange}
//   className="form-group-box2-item1-payment_methodSelect"
// >
//   <option value="" disabled>your payment type</option>
//   <option value="cash">cash</option>
//   <option value="paypal">paypal</option>
//   <option value="card">card</option>
// </select>


//           <button type="submit" className="transportation-search-btn">
//             <FaSearch />
//           </button>
//         </form>
//       </section>

//       <section className="transportation-available">
//         <div className="transportation-section-title">
//           <span>Available transportation</span>
//           <FaPlay className="transportation-arrow" />
//         </div>

//         <hr className="transportation-divider" />

//         <div className="transportation-grid">
//           {results.length === 0 ? (
//             <p>No matching rides found.</p>
//           ) : (
//             results.map((ride) => (
//               <div key={ride.id} className="transportation-card">
//                 <p>{ride.start_location} → {ride.end_location}</p>
//                 <p>Time: {ride.ride_time}</p>
//                 <p>Seats: {ride.passengers}</p>
                
//                 <button className="btn reserve-ridebtn-from-searchResult1" onClick={handlereserve}>reserve</button>
//               </div>
//             ))
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Search_results;



// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "../Styles/Search_results.css";
// import { FaSearch, FaPlay } from "react-icons/fa";
// import { createClient } from "@supabase/supabase-js";

// // ✅ Supabase setup
// const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA';
// const supabase = createClient(supabaseUrl, supabaseKey);

// const Search_results = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation();

//   // ✅ Initialize form data (from previous page or defaults)
//   const [formData, setFormData] = useState({
//     departure: state?.departure || "",
//     destination: state?.destination || "",
//     date: state?.date || "",
//     time: state?.time || "",
//     rideType: state?.rideType || "",
//     payment_method: state?.payment_method || "",
//     passengers: state?.passengers || "",
//   });

//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // ✅ Correctly navigate to ReservationPage with selected ride
//   const handlereserve = (ride) => {
//     navigate("/Payment_page", { state: { ...formData, selectedRide: ride } });
//   };

//   // ✅ Fetch rides from Supabase
//   const fetchData = async () => {
//     setLoading(true);
//     const {
//       departure,
//       destination,
//       date,
//       time,
//       rideType,
//       payment_method,
//       passengers,
//     } = formData;

//     let query = supabase
//       .from("search_locations_last")
//       .select("*")
//       .ilike("start_location", `%${departure}%`)
//       .ilike("end_location", `%${destination}%`);

//     if (date) query = query.gte("ride_date", date);
//     if (time) {
//       const timeValue = time.length === 5 ? `${time}:00` : time;
//       query = query.gte("ride_time", timeValue);
//     }

//     if (rideType) query = query.eq("ride_type", rideType);
//     // if (payment_method) query = query.eq("payment_method", payment_method);
//     if (passengers) query = query.eq("passengers", Number(passengers));

//     const { data, error } = await query;
//     if (!error) setResults(data);
//     else console.error("Supabase error:", error);
//     setLoading(false);
//   };

//   // ✅ Fetch on mount & whenever form data changes
//   useEffect(() => {
//     fetchData();
//   }, [formData]);

//   // ✅ Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ Manual search submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchData();
//   };

//   return (
//     <div className="transportation-page">
//       <header className="transportation-header">
//         <div className="header-bar">
//           <a className="SearchResult-navLink" href="/">
//             home
//           </a>
//         </div>
//       </header>

//       <section className="transportation-search-bar">
//         <form onSubmit={handleSubmit} className="transportation-filters">
//           <input
//             type="text"
//             name="departure"
//             value={formData.departure}
//             placeholder="Pick-up location"
//             className="transportation-input"
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="destination"
//             value={formData.destination}
//             placeholder="Destination"
//             className="transportation-input"
//             onChange={handleChange}
//           />
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             className="transportation-input"
//             onChange={handleChange}
//           />
//           <input
//             type="time"
//             name="time"
//             value={formData.time}
//             className="transportation-input"
//             onChange={handleChange}
//           />

//           <select
//             name="rideType"
//             className="transportation-input"
//             value={formData.rideType}
//             onChange={handleChange}
//           >
//             <option value="">Select type</option>
//             <option value="normal">normal</option>
//             <option value="vip">vip</option>
//             <option value="co-joint">co-joint</option>
//           </select>

//           <select
//             id="passengers"
//             name="passengers"
//             value={formData.passengers}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select passengers</option>
//             <option value="1">1 passenger</option>
//             <option value="2">2 passengers</option>
//             <option value="3">3 passengers</option>
//             <option value="4">4 passengers</option>
//             <option value="5">5 passengers</option>
//           </select>

//           <select
//             name="payment_method"
//             value={formData.payment_method}
//             onChange={handleChange}
//             className="form-group-box2-item1-payment_methodSelect"
//           >
//             <option value="" disabled>
//               your payment type
//             </option>
//             <option value="cash">cash</option>
//             <option value="paypal">paypal</option>
//             <option value="card">card</option>
//           </select>

//           <button type="submit" className="transportation-search-btn">
//             <FaSearch />
//           </button>
//         </form>
//       </section>

//       <section className="transportation-available">
//         <div className="transportation-section-title">
//           <span>Available transportation</span>
//           <FaPlay className="transportation-arrow" />
//         </div>

//         <hr className="transportation-divider" />

//         {loading ? (
//           <p>Loading rides...</p>
//         ) : (
//           <div className="transportation-grid">
//             {results.length === 0 ? (
//               <p>No matching rides found.</p>
//             ) : (
//               results.map((ride) => (
//                 <div key={ride.id} className="transportation-card">
//                   <p>
//                     {ride.start_location} → {ride.end_location}
//                   </p>
//                   <p>Time: {ride.ride_time}</p>
//                   <p>Seats: {ride.passengers}</p>

//                   <button
//                     className="btn reserve-ridebtn-from-searchResult1"
//                     onClick={() => handlereserve(ride)} // ✅ FIXED
//                   >
//                     reserve
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Search_results;


import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/Search_results.css";
import { FaSearch, FaPlay } from "react-icons/fa";
import { createClient } from "@supabase/supabase-js";

// ✅ Supabase setup
const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA';
const supabase = createClient(supabaseUrl, supabaseKey);

const Search_results = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // ✅ Initialize form data (from previous page or defaults)
  const [formData, setFormData] = useState({
    departure: state?.departure || "",
    destination: state?.destination || "",
    date: state?.date || "",
    time: state?.time || "",
    rideType: state?.rideType || "",
    payment_method: state?.payment_method || "",  // Keep payment method as part of the state
    passengers: state?.passengers || "",
  });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Correctly navigate to ReservationPage with selected ride and payment method
  const handlereserve = (ride) => {
    navigate("/Payment_page", { state: { ...formData, selectedRide: ride } });
  };

  // ✅ Fetch rides from Supabase
  const fetchData = async () => {
    setLoading(true);
    const {
      departure,
      destination,
      date,
      time,
      rideType,
      passengers,
    } = formData;

    let query = supabase
      .from("searched_locations_last")  // Update table name accordingly
      .select("*")
      .ilike("start_location", `%${departure}%`)  // Match start location
      .ilike("end_location", `%${destination}%`); // Match end location

    // Filter by date and time
    if (date) query = query.gte("ride_time", `${date}T00:00:00`);  // Ensure date filtering works properly
    if (time) {
      const timeValue = time.length === 5 ? `${time}:00` : time;  // Ensure time format
      query = query.gte("ride_time", `${date}T${timeValue}`);
    }

    // Filter by ride type
    if (rideType) query = query.eq("ride_type", rideType);

    // Filter by passengers (seats available)
    if (passengers) query = query.gte("available_seats", Number(passengers));

    const { data, error } = await query;
    if (!error) setResults(data);
    else console.error("Supabase error:", error);
    setLoading(false);
  };

  // ✅ Fetch on mount & whenever form data changes
  useEffect(() => {
    fetchData();
  }, [formData]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Manual search submit
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="transportation-page">
      <header className="transportation-header">
        <div className="header-bar">
          <a className="SearchResult-navLink" href="/">
            home
          </a>
        </div>
      </header>

      <section className="transportation-search-bar">
        <form onSubmit={handleSubmit} className="transportation-filters">
          <input
            type="text"
            name="departure"
            value={formData.departure}
            placeholder="Pick-up location"
            className="transportation-input"
            onChange={handleChange}
          />
          <input
            type="text"
            name="destination"
            value={formData.destination}
            placeholder="Destination"
            className="transportation-input"
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            className="transportation-input"
            onChange={handleChange}
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            className="transportation-input"
            onChange={handleChange}
          />

          <select
            name="rideType"
            className="transportation-input"
            value={formData.rideType}
            onChange={handleChange}
          >
            <option value="">Select type</option>
            <option value="normal">normal</option>
            <option value="vip">vip</option>
            <option value="co-joint">co-joint</option>
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

          <select
            name="payment_method"
            value={formData.payment_method}
            onChange={handleChange}
            className="form-group-box2-item1-payment_methodSelect"
          >
            <option value="" disabled>
              Your payment type
            </option>
            <option value="cash">Cash</option>
            <option value="paypal">PayPal</option>
            <option value="card">Card</option>
          </select>

          <button type="submit" className="transportation-search-btn">
            <FaSearch />
          </button>
        </form>
      </section>

      <section className="transportation-available">
        <div className="transportation-section-title">
          <span>Available transportation</span>
          <FaPlay className="transportation-arrow" />
        </div>

        <hr className="transportation-divider" />

        {loading ? (
          <p>Loading rides...</p>
        ) : (
          <div className="transportation-grid">
            {results.length === 0 ? (
              <p>No matching rides found.</p>
            ) : (
              results.map((ride) => (
                <div key={ride.id} className="transportation-card">
                  <p>
                    {ride.start_location} → {ride.end_location}
                  </p>
                  <p>Time: {new Date(ride.ride_time).toLocaleString()}</p> {/* Format date-time */}
                  <p>Seats: {ride.available_seats}</p>
                  <p>Price: {ride.price}MAD/KM</p> {/* Add price display */}

                  <button
                    className="btn reserve-ridebtn-from-searchResult1"
                    onClick={() => handlereserve(ride)} // ✅ FIXED
                  >
                    Reserve
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Search_results;



// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "../Styles/Search_results.css";
// import { FaSearch, FaPlay } from "react-icons/fa";
// import { createClient } from "@supabase/supabase-js";

// // ✅ Supabase setup
// const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA';
// const supabase = createClient(supabaseUrl, supabaseKey);

// const Search_results = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation();

//   // ✅ Initialize form data (from previous page or defaults)
//   const [formData, setFormData] = useState({
//     departure: state?.departure || "",
//     destination: state?.destination || "",
//     date: state?.date || "",
//     time: state?.time || "",
//     rideType: state?.rideType || "",
//     payment_method: state?.payment_method || "",
//     passengers: state?.passengers || "",
//   });

//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // ✅ Correctly navigate to ReservationPage with selected ride and payment method
//   const handlereserve = (ride) => {
//     navigate("/Payment_page", { state: { ...formData, selectedRide: ride } });
//   };

//   // ✅ Fetch rides from Supabase with better error handling and flexible time filtering
//   const fetchData = async () => {
//     setLoading(true);
//     setError(null); // Reset error state
//     const { departure, destination, date, time, rideType, passengers } = formData;

//     let query = supabase
//       .from("search_locations_last")
//       .select("*")
//       .ilike("start_location", `%${departure}%`)
//       .ilike("end_location", `%${destination}%`);

//     // Filter by date
//     if (date) query = query.gte("ride_time", `${date}T00:00:00`);

//     // ✅ Adjust the time to allow a range +/- 15 minutes
//     if (time) {
//       const timeValue = time.length === 5 ? `${time}:00` : time;
//       const timeStart = new Date(`${date}T${timeValue}`).getTime();
//       const timeEnd = timeStart + 15 * 60 * 1000; // Add 15 minutes

//       query = query.gte("ride_time", new Date(timeStart).toISOString())
//                    .lte("ride_time", new Date(timeEnd).toISOString());
//     }

//     // Filter by ride type
//     if (rideType) query = query.eq("ride_type", rideType);

//     // Filter by passengers (seats available)
//     if (passengers) query = query.gte("available_seats", Number(passengers));

//     const { data, error } = await query;
//     if (error) {
//       setError("Something went wrong while fetching the rides. Please try again.");
//       console.error("Supabase error:", error);
//     } else {
//       setResults(data);
//     }
//     setLoading(false);
//   };

//   // ✅ Fetch on mount & whenever form data changes
//   useEffect(() => {
//     fetchData();
//   }, [formData]);

//   // ✅ Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ Manual search submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchData();
//   };

//   return (
//     <div className="transportation-page">
//       <header className="transportation-header">
//         <div className="header-bar">
//           <a className="SearchResult-navLink" href="/">home</a>
//         </div>
//       </header>

//       <section className="transportation-search-bar">
//         <form onSubmit={handleSubmit} className="transportation-filters">
//           <input
//             type="text"
//             name="departure"
//             value={formData.departure}
//             placeholder="Pick-up location"
//             className="transportation-input"
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="destination"
//             value={formData.destination}
//             placeholder="Destination"
//             className="transportation-input"
//             onChange={handleChange}
//           />
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             className="transportation-input"
//             onChange={handleChange}
//           />
//           <input
//             type="time"
//             name="time"
//             value={formData.time}
//             className="transportation-input"
//             onChange={handleChange}
//           />

//           <select
//             name="rideType"
//             className="transportation-input"
//             value={formData.rideType}
//             onChange={handleChange}
//           >
//             <option value="">Select type</option>
//             <option value="normal">Normal</option>
//             <option value="vip">VIP</option>
//             <option value="co-joint">Co-joint</option>
//           </select>

//           <select
//             id="passengers"
//             name="passengers"
//             value={formData.passengers}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select passengers</option>
//             <option value="1">1 passenger</option>
//             <option value="2">2 passengers</option>
//             <option value="3">3 passengers</option>
//             <option value="4">4 passengers</option>
//             <option value="5">5 passengers</option>
//           </select>

//           <select
//             name="payment_method"
//             value={formData.payment_method}
//             onChange={handleChange}
//             className="form-group-box2-item1-payment_methodSelect"
//           >
//             <option value="" disabled>Your payment type</option>
//             <option value="cash">Cash</option>
//             <option value="paypal">PayPal</option>
//             <option value="card">Card</option>
//           </select>

//           <button type="submit" className="transportation-search-btn">
//             <FaSearch />
//           </button>
//         </form>
//       </section>

//       <section className="transportation-available">
//         <div className="transportation-section-title">
//           <span>Available transportation</span>
//           <FaPlay className="transportation-arrow" />
//         </div>

//         <hr className="transportation-divider" />

//         {loading ? (
//           <div className="loading-spinner">
//             <div className="spinner"></div> {/* CSS spinner */}
//             <p>Loading rides...</p>
//           </div>
//         ) : error ? (
//           <div className="error-message">{error}</div> // Show error message if something goes wrong
//         ) : (
//           <div className="transportation-grid">
//             {results.length === 0 ? (
//               <p>No matching rides found.</p>
//             ) : (
//               results.map((ride) => (
//                 <div key={ride.id} className="transportation-card">
//                   <p>{ride.start_location} → {ride.end_location}</p>
//                   <p>Time: {new Date(ride.ride_time).toLocaleString()}</p>
//                   <p>Seats: {ride.available_seats}</p>
//                   <p>Price: ${ride.price}</p> {/* Add price display */}

//                   <button
//                     className="btn reserve-ridebtn-from-searchResult1"
//                     onClick={() => handlereserve(ride)} // ✅ Fixed
//                   >
//                     Reserve
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Search_results;
