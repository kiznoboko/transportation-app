// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { createClient } from "@supabase/supabase-js";
// import "../Styles/dashboard1.css";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Logo from "../../public/Logo.svg"


// const Driver = () => {
//     const supabaseUrl = "https://xdbhtxoheaqgrbruapxv.supabase.co"; // <-- your URL
//     const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA"; // <-- your anon or service key
//     const supabase = createClient(supabaseUrl, supabaseKey);
    
//     return (
//         <>
//                 <div className="driver-page-dashboard">
//                     <nav>
//                         <h1>Driver page</h1>
//                         <img src={Logo} alt="" className="driver-logo-page" />

//                     </nav>
//                     <div className="driver-mainContainer">
//                         <button>current trajectories</button>
//                         <button>post a trajectory</button>
//                     </div>
//                 </div>
//         </>
//     )
// }

// export default Driver;




// import React, { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
// import "../Styles/dashboard1.css";
// import Logo from "../../public/Logo.svg";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Driver = () => {
//  const supabaseUrl = "https://xdbhtxoheaqgrbruapxv.supabase.co"; // <-- your URL
//     const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA"; // <-- your anon or service key
//     const supabase = createClient(supabaseUrl, supabaseKey);

//   const [trajectories, setTrajectories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     start_location: "",
//     end_location: "",
//     ride_time: new Date(),
//     available_seats: 1,
//     price: "",
//     ride_type: "normal",
//   });

//   // Fetch current trajectories
//   const fetchTrajectories = async () => {
//     setLoading(true);
//     const { data, error } = await supabase
//       .from("searched_locations_last")
//       .select("*")
//       .order("created_at", { ascending: false }); // latest first
//     if (error) console.error(error);
//     else setTrajectories(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchTrajectories();
//   }, []);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle date change
//   const handleDateChange = (date) => {
//     setFormData((prev) => ({ ...prev, ride_time: date }));
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { start_location, end_location, ride_time, available_seats, price, ride_type } = formData;

//     const { data, error } = await supabase.from("searched_locations_last").insert([
//       {
//         start_location,
//         end_location,
//         ride_time: ride_time.toISOString(), // convert to timestamptz
//         available_seats: Number(available_seats),
//         price: Number(price),
//         ride_type,
//       },
//     ]).select(); // return inserted row

//     if (error) {
//       console.error("Insert error:", error);
//       alert("Failed to post trajectory");
//     } else {
//       alert("Trajectory posted!");
//       setTrajectories((prev) => [data[0], ...prev]); // show new trajectory at top
//     }
//   };

//   return (
//     <div className="driver-page-dashboard">
//       <nav className="driver-nav">
//         <h1>Driver Page</h1>
//         <img src={Logo} alt="Logo" className="driver-logo-page" />
//       </nav>

//       <div className="driver-mainContainer">
//         <div className="driver-section">
//           <h2>Post a Trajectory</h2>
//           <form onSubmit={handleSubmit} className="driver-form">
//             <input
//               type="text"
//               name="start_location"
//               placeholder="Start location"
//               value={formData.start_location}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="end_location"
//               placeholder="End location"
//               value={formData.end_location}
//               onChange={handleChange}
//               required
//             />
//             <DatePicker
//               selected={formData.ride_time}
//               onChange={handleDateChange}
//               showTimeSelect
//               dateFormat="yyyy-MM-dd HH:mm"
//             />
//             <input
//               type="number"
//               name="available_seats"
//               placeholder="Available seats"
//               value={formData.available_seats}
//               onChange={handleChange}
//               min={1}
//               max={10}
//             />
//             <input
//               type="number"
//               name="price"
//               placeholder="Price per KM"
//               value={formData.price}
//               onChange={handleChange}
//               min={0}
//               step={0.01}
//             />
//             <select
//               name="ride_type"
//               value={formData.ride_type}
//               onChange={handleChange}
//             >
//               <option value="normal">Normal</option>
//               <option value="vip">VIP</option>
//               <option value="co-joint">Co-joint</option>
//             </select>
//             <button type="submit">Post Trajectory</button>
//           </form>
//         </div>

//         <div className="driver-section">
//           <h2>Current Trajectories</h2>
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <table className="driver-table">
//               <thead>
//                 <tr>
//                   <th>Start</th>
//                   <th>End</th>
//                   <th>Time</th>
//                   <th>Seats</th>
//                   <th>Price</th>
//                   <th>Type</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {trajectories.map((t) => (
//                   <tr key={t.id}>
//                     <td>{t.start_location}</td>
//                     <td>{t.end_location}</td>
//                     <td>{new Date(t.ride_time).toLocaleString()}</td>
//                     <td>{t.available_seats}</td>
//                     <td>{t.price} MAD/KM</td>
//                     <td>{t.ride_type}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Driver;


// import React, { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
// import "../Styles/dashboard1.css";
// import Logo from "../../public/Logo.svg";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Driver = () => {
//   const supabaseUrl = "https://xdbhtxoheaqgrbruapxv.supabase.co"; // <-- your URL
//     const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA"; // <-- your anon or service key
//     const supabase = createClient(supabaseUrl, supabaseKey);

//   const [trajectories, setTrajectories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     start_location: "",
//     end_location: "",
//     ride_date: new Date(),
//     ride_time: "12:00",
//     passengers: 1,
//     status: "pending",
//     payment_method: "cash",
//     notes: "",
//     ride_type: "normal",
//   });

//   // Fetch current trajectories
//   const fetchTrajectories = async () => {
//     setLoading(true);
//     const { data, error } = await supabase
//       .from("orders_test") // <-- replace with your table name
//       .select("*")
//       .order("created_at", { ascending: false });
//     if (error) console.error(error);
//     else setTrajectories(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchTrajectories();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleDateChange = (date) => {
//     setFormData((prev) => ({ ...prev, ride_date: date }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const {
//       start_location,
//       end_location,
//       ride_date,
//       ride_time,
//       passengers,
//       status,
//       payment_method,
//       notes,
//       ride_type,
//     } = formData;

//     const { data, error } = await supabase
//       .from("ride_order") // <-- same table
//       .insert([
//         {
//           start_location,
//           end_location,
//           ride_date: ride_date.toISOString().split("T")[0], // date only
//           ride_time, // time without timezone
//           passengers: Number(passengers),
//           status,
//           payment_method,
//           notes,
//           ride_type,
//         },
//       ])
//       .select();

//     if (error) {
//       console.error("Insert error:", error);
//       alert("Failed to post trajectory");
//     } else {
//       alert("Trajectory posted!");
//       setTrajectories((prev) => [data[0], ...prev]); // show newest first
//     }
//   };

//   return (
//     <div className="driver-page-dashboard">
//       <nav className="driver-nav">
//         <h1>Driver Page</h1>
//         <img src={Logo} alt="Logo" className="driver-logo-page" />
//       </nav>

//       <div className="driver-mainContainer">
//         <div className="driver-section">
//           <h2>Post a Trajectory</h2>
//           <form onSubmit={handleSubmit} className="driver-form">
//             <input
//               type="text"
//               name="start_location"
//               placeholder="Start location"
//               value={formData.start_location}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="end_location"
//               placeholder="End location"
//               value={formData.end_location}
//               onChange={handleChange}
//               required
//             />
//             <DatePicker
//               selected={formData.ride_date}
//               onChange={handleDateChange}
//               dateFormat="yyyy-MM-dd"
//             />
//             <input
//               type="time"
//               name="ride_time"
//               value={formData.ride_time}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="number"
//               name="passengers"
//               placeholder="Passengers"
//               value={formData.passengers}
//               onChange={handleChange}
//               min={1}
//             />
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//             >
//               <option value="pending">Pending</option>
//               <option value="confirmed">Confirmed</option>
//               <option value="completed">Completed</option>
//             </select>
//             <select
//               name="payment_method"
//               value={formData.payment_method}
//               onChange={handleChange}
//             >
//               <option value="cash">Cash</option>
//               <option value="card">Card</option>
//               <option value="paypal">PayPal</option>
//             </select>
//             <input
//               type="text"
//               name="notes"
//               placeholder="Notes"
//               value={formData.notes}
//               onChange={handleChange}
//             />
//             <select
//               name="ride_type"
//               value={formData.ride_type}
//               onChange={handleChange}
//             >
//               <option value="normal">Normal</option>
//               <option value="vip">VIP</option>
//               <option value="co-joint">Co-joint</option>
//             </select>
//             <button type="submit">Post Trajectory</button>
//           </form>
//         </div>

//         {/* <div className="driver-section">
//           <h2>Current Trajectories</h2>
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <table className="driver-table" >
//               <thead>
//                 <tr>
//                   <th>Start</th>
//                   <th>End</th>
//                   <th>Date</th>
//                   <th>Time</th>
//                   <th>Passengers</th>
//                   <th>Status</th>
//                   <th>Payment</th>
//                   <th>Notes</th>
//                   <th>Type</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {trajectories.map((t) => (
//                   <tr key={t.id}>
//                     <td>{t.start_location}</td>
//                     <td>{t.end_location}</td>
//                     <td>{t.ride_date}</td>
//                     <td>{t.ride_time}</td>
//                     <td>{t.passengers}</td>
//                     <td>{t.status}</td>
//                     <td>{t.payment_method}</td>
//                     <td>{t.notes}</td>
//                     <td>{t.ride_type}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div> */}


//         <div className="driver-section">
//   <h2>Current Trajectories</h2>
//   {loading ? (
//     <p>Loading...</p>
//   ) : (
//     <div className="driver-section">
//   <h2>Current Trajectories</h2>
//   {loading ? (
//     <p>Loading...</p>
//   ) : (
//     <table className="driver-table">
//       <thead>
//         <tr>
//           <th>Client Name</th>
//           <th>Email</th>
//           <th>Phone</th>
//           <th>Start</th>
//           <th>Destination</th>
//           <th>Date</th>
//           <th>Time</th>
//           <th>Passengers</th>
//           <th>Seats Available</th>
//           <th>Price</th>
//           <th>Ride Type</th>
//           <th>Status</th>
//           <th>Payment</th>
//         </tr>
//       </thead>
//       <tbody>
//         {trajectories.map((t) => (
//           <tr key={t.id}>
//             <td>{t.client_full_name}</td>
//             <td>{t.email_address}</td>
//             <td>{t.phone_number}</td>
//             <td>{t.start_location}</td>
//             <td>{t.destination}</td>
//             <td>{t.ride_date}</td>
//             <td>{t.ride_time}</td>
//             <td>{t.number_of_passengers}</td>
//             <td>{t.seats_available}</td>
//             <td>{t.price}</td>
//             <td>{t.ride_type}</td>
//             <td>
//               <select
//                 value={t.ride_status}
//                 onChange={async (e) => {
//                   const newStatus = e.target.value;

//                   // Update local state
//                   setTrajectories((prev) =>
//                     prev.map((item) =>
//                       item.id === t.id ? { ...item, ride_status: newStatus } : item
//                     )
//                   );

//                   // Update in Supabase
//                   const { data, error } = await supabase
//                     .from("ride_order") // table name
//                     .update({ ride_status: newStatus })
//                     .eq("id", t.id);

//                   if (error) {
//                     console.error("Failed to update status:", error);
//                     alert("Error updating status");
//                   } else {
//                     console.log("Status updated:", data);
//                   }
//                 }}
//               >
//                 <option value="pending">Pending</option>
//                 <option value="confirmed">Confirmed</option>
//                 <option value="completed">Completed</option>
//               </select>
//             </td>
//             <td>{t.payment_type}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )}
// </div>

//   )}
// </div>

//       </div>
//     </div>
//   );
// };

// export default Driver;



import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "../Styles/dashboard1.css";
import Logo from "../../public/Logo.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Styles/Driver_page.css"

const Driver = () => {
    const supabaseUrl = "https://xdbhtxoheaqgrbruapxv.supabase.co"; // <-- your URL
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA"; // <-- your anon or service key
    const supabase = createClient(supabaseUrl, supabaseKey);
  const [trajectories, setTrajectories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trajectoryData, setTrajectoryData] = useState([]);
const [loadingTrajectory, setLoadingTrajectory] = useState(false);
 const [driverInfo, setDriverInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    start_location: "",
    destination: "",
    ride_date: new Date(),
    ride_time: "12:00",
    number_of_passengers: 1,
    seats_available: 1,
    price: 0,
    ride_status: "pending",
    payment_type: "cash",
    client_full_name: "",
    email_address: "",
    phone_number: "",
    notes: "",
    ride_type: "normal",
  });

  // Fetch current trajectories
  const fetchTrajectories = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("ride_order")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error(error);
    else setTrajectories(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrajectories();
  }, []);


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
      setDriverInfo(storedUser);
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("userData");
    window.location.href = "/"; // redirect to homepage or login page
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, ride_date: date }));
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const {
//       start_location,
//       destination,
//       ride_date,
//       ride_time,
//       number_of_passengers,
//       seats_available,
//       price,
//       ride_status,
//       payment_type,
//       client_full_name,
//       email_address,
//       phone_number,
//       notes,
//       ride_type,
//     } = formData;

//     const { data, error } = await supabase
//       .from("ride_order")
//       .insert([
//         {
//           start_location,
//           destination,
//           ride_date: ride_date.toISOString().split("T")[0],
//           ride_time,
//           number_of_passengers: Number(number_of_passengers),
//           seats_available: Number(seats_available),
//           price: Number(price),
//           ride_status,
//           payment_type,
//           client_full_name,
//           email_address,
//           phone_number,
//           notes,
//           ride_type,
//         },
//       ])
//       .select();

//     if (error) {
//       console.error("Insert error:", error);
//       alert("Failed to post trajectory");
//     } else {
//       alert("Trajectory posted!");
//       setTrajectories((prev) => [data[0], ...prev]);
//       setFormData({
//         start_location: "",
//         destination: "",
//         ride_date: new Date(),
//         ride_time: "12:00",
//         number_of_passengers: 1,
//         seats_available: 1,
//         price: 0,
//         ride_status: "pending",
//         payment_type: "cash",
//         client_full_name: "",
//         email_address: "",
//         phone_number: "",
//         notes: "",
//         ride_type: "normal",
//       });
//     }
//   };

        // Posting a new trajectory to the trajectory table
const handleSubmit = async (e) => {
  e.preventDefault();

  const { start_location, end_location, ride_time, price, available_seats, ride_type } = formData;

  const rideTimeISO = new Date(
    `${formData.ride_date.toISOString().split("T")[0]}T${ride_time}`
  ).toISOString();

  const { data, error } = await supabase
    .from("searched_locations_last")
    .insert([
      {
        start_location,
        end_location,
        ride_time: rideTimeISO,
        price: Number(price),
        available_seats: Number(available_seats),
        ride_type,
      },
    ])
    .select();

  if (error) {
    console.error("Insert error:", error);
    alert("Failed to post trajectory");
  } else {
    alert("Trajectory posted!");
    // Optionally reset form
    setFormData({
      ...formData,
      start_location: "",
      end_location: "",
      ride_time: "12:00",
      available_seats: 1,
      price: 0,
      ride_type: "normal",
    });
  }
};


const fetchTrajectory = async () => {
  setLoadingTrajectory(true);
  const { data, error } = await supabase
    .from("searched_locations_last")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching trajectories:", error);
    alert("Failed to fetch trajectories");
  } else {
    setTrajectoryData(data);
  }
  setLoadingTrajectory(false);
};



  return (
    <div className="driver-page-dashboard">
      <nav className="driver-nav">
        <div className="driver_tag_navBar">
           <img src={Logo} alt="Logo" className="driver-logo-page" />
        <h1>Driver Page</h1>
        </div>
        
       
        {driverInfo.username ? (
        <>
          <p><strong>Username:</strong> {driverInfo.username}</p>
          <p><strong>Email:</strong> {driverInfo.email}</p>
          <p><strong>Password:</strong> {driverInfo.password}</p>
        </>
      ) : (
        <p>No driver info found.</p>
      )}

      <button type="button" className="btn-logout" onClick={handleLogout}>
        Logout
      </button>
      </nav>

      <div className="driver-mainContainer">
        {/* Post a Trajectory Form */}
        {/* <div className="driver-section">
          <h2>Post a Trajectory</h2>
          <form onSubmit={handleSubmit} className="driver-form">
            <input
              type="text"
              name="client_full_name"
              placeholder="Client Name"
              value={formData.client_full_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email_address"
              placeholder="Email"
              value={formData.email_address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="start_location"
              placeholder="Start Location"
              value={formData.start_location}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={formData.destination}
              onChange={handleChange}
              required
            />
            <DatePicker
              selected={formData.ride_date}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
            />
            <input
              type="time"
              name="ride_time"
              value={formData.ride_time}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="number_of_passengers"
              placeholder="Passengers"
              value={formData.number_of_passengers}
              onChange={handleChange}
              min={1}
            />
            <input
              type="number"
              name="seats_available"
              placeholder="Seats Available"
              value={formData.seats_available}
              onChange={handleChange}
              min={1}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              step="0.01"
            />
            <select
              name="ride_status"
              value={formData.ride_status}
              onChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
            </select>
            <select
              name="payment_type"
              value={formData.payment_type}
              onChange={handleChange}
            >
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="paypal">PayPal</option>
            </select>
            <input
              type="text"
              name="notes"
              placeholder="Notes"
              value={formData.notes}
              onChange={handleChange}
            />
            <select
              name="ride_type"
              value={formData.ride_type}
              onChange={handleChange}
            >
              <option value="normal">Normal</option>
              <option value="vip">VIP</option>
              <option value="co-joint">Co-joint</option>
            </select>
            <button type="submit">Post Trajectory</button>
          </form>
        </div> */}


        <div className="driver-section">
  <h2>Post a Trajectory</h2>
  <form onSubmit={handleSubmit} className="driver-form">
    <input
      type="text"
      name="start_location"
      placeholder="Start location"
      value={formData.start_location}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="end_location"
      placeholder="End location"
      value={formData.end_location}
      onChange={handleChange}
      required
    />
    <DatePicker
      selected={formData.ride_date}
      onChange={handleDateChange}
      dateFormat="yyyy-MM-dd"
    />
    <input
      type="time"
      name="ride_time"
      value={formData.ride_time}
      onChange={handleChange}
      required
    />
    <input
      type="number"
      name="available_seats"
      placeholder="Available Seats"
      value={formData.available_seats}
      onChange={handleChange}
      min={1}
      required
    />
    <input
      type="number"
      name="price"
      placeholder="Price"
      value={formData.price}
      onChange={handleChange}
      step="0.01"
      required
    />
    <select
      name="ride_type"
      value={formData.ride_type}
      onChange={handleChange}
      required
    >
      <option value="normal">Normal</option>
      <option value="vip">VIP</option>
      <option value="co-joint">Co-joint</option>
    </select>
    <button type="submit">Post Trajectory</button>
    <button type="button" onClick={fetchTrajectory}>check  Trajectory</button>
  </form>
</div>


                    <div className="driver-section">
  <h2>Available Trajectories</h2>
  {loadingTrajectory ? (
    <p>Loading...</p>
  ) : (
    <table className="driver-table">
      <thead>
        <tr>
          <th>Start</th>
          <th>End</th>
          <th>Ride Time</th>
          <th>Price</th>
          <th>Available Seats</th>
          <th>Ride Type</th>
        </tr>
      </thead>
      <tbody>
        {trajectoryData.map((t) => (
          <tr key={t.id}>
            <td>{t.start_location}</td>
            <td>{t.end_location}</td>
            <td>{new Date(t.ride_time).toLocaleString()}</td>
            <td>{t.price}</td>
            <td>{t.available_seats}</td>
            <td>{t.ride_type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>


        {/* Current Trajectories */}
        <div className="driver-section">
          <h2>Current Pending Trajectories</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="driver-table">
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Start</th>
                  <th>Destination</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Passengers</th>
                  <th>Seats Available</th>
                  <th>Price</th>
                  <th>Ride Type</th>
                  <th>Status</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {trajectories.map((t) => (
                  <tr key={t.id}>
                    <td>{t.client_full_name}</td>
                    <td>{t.email_address}</td>
                    <td>{t.phone_number}</td>
                    <td>{t.start_location}</td>
                    <td>{t.destination}</td>
                    <td>{t.ride_date}</td>
                    <td>{t.ride_time}</td>
                    <td>{t.number_of_passengers}</td>
                    <td>{t.seats_available}</td>
                    <td>{t.price}</td>
                    <td>{t.ride_type}</td>
                    <td>
                      {/* <select
                        value={t.ride_status}
                        onChange={async (e) => {
                          const newStatus = e.target.value;

                          // Update local state
                          setTrajectories((prev) =>
                            prev.map((item) =>
                              item.id === t.id
                                ? { ...item, ride_status: newStatus }
                                : item
                            )
                          );

                          // Update in Supabase
                          const { data, error } = await supabase
                            .from("ride_order")
                            .update({ ride_status: newStatus })
                            .eq("id", t.id);

                          if (error) {
                            console.error("Failed to update status:", error);
                            alert("Error updating status");
                          }
                        }}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Standard</option>
                        <option value="completed">Completed</option>
                      </select> */}


                      <select
  value={t.ride_status}
  onChange={async (e) => {
    const newStatus = e.target.value;

    // Update local state
    setTrajectories(prev =>
      prev.map(item =>
        item.id === t.id ? { ...item, ride_status: newStatus } : item
      )
    );

    // Update in Supabase
    const { error } = await supabase
      .from("ride_order")
      .update({ ride_status: newStatus })
      .eq("id", t.id);

    if (error) {
      console.error("Failed to update status:", error);
      alert("Error updating status. Allowed values: Pending, Confirmed, Completed, Cancelled");
    }
  }}
>
  <option value="Pending">Pending</option>
  <option value="Confirmed">Confirmed</option>
  <option value="Completed">Completed</option>
  <option value="Cancelled">Cancelled</option>
</select>

                    </td>
                    <td>{t.payment_type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Driver;
