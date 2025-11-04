// import { useEffect, useState } from "react";
// import "../Styles/admin_dashboard.css";
// import { Link } from "react-router-dom";
// import { createClient } from "@supabase/supabase-js";

// const Admin_dashboard = () => {
//     const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA'; // keep this secure!
// const supabase = createClient(supabaseUrl, supabaseKey);

//   const [contactSubmissions, setContactSubmissions] = useState([]);
//   const [drivers, setDrivers] = useState([]);
//   const [searchedLocations, setSearchedLocations] = useState([]);
//   const [newsletterSubscriptions, setNewsletterSubscriptions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAllData = async () => {
//       setLoading(true);

//       // Contact Submissions
//       const { data: contacts, error: contactError } = await supabase
//         .from("contact_submissions")
//         .select("*");
//       if (contactError) console.error("Contacts error:", contactError);
//       else setContactSubmissions(contacts);

//       // Drivers
//       const { data: driversData, error: driversError } = await supabase
//         .from("drivers")
//         .select("*");
//       if (driversError) console.error("Drivers error:", driversError);
//       else setDrivers(driversData);

//       // Searched Locations
//       const { data: locationsData, error: locationsError } = await supabase
//         .from("searched_locations_last")
//         .select("*");
//       if (locationsError) console.error("Locations error:", locationsError);
//       else setSearchedLocations(locationsData);

//       // Newsletter Subscriptions
//       const { data: newsletterData, error: newsletterError } = await supabase
//         .from("newsletter_subscriptions")
//         .select("*");
//       if (newsletterError) console.error("Newsletter error:", newsletterError);
//       else setNewsletterSubscriptions(newsletterData);

//       setLoading(false);
//     };

//     fetchAllData();
//   }, []);

//   if (loading) return <p>Loading dashboard data...</p>;

// //   return (
// //     <div className="admin_dashboard_wrapper">
// //       <h1>Admin Dashboard</h1>
// //       <nav>
// //         <Link to="/">Home</Link>
// //         <Link to="#contacts">Contact Submissions</Link>
// //         <Link to="#drivers">Drivers</Link>
// //         <Link to="#locations">Searched Locations</Link>
// //         <Link to="#newsletter">Newsletter Subscribers</Link>
// //       </nav>

// //       <div className="admin_dashboard_main_container">
// //         {/* Contact Submissions */}
// //         <section id="contacts" className="dashboard_section">
// //           <h2>Contact Submissions</h2>
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>ID</th>
// //                 <th>Full Name</th>
// //                 <th>Email</th>
// //                 <th>Subject</th>
// //                 <th>Details</th>
// //                 <th>Feedback</th>
// //                 <th>Status</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {contactSubmissions.map((c) => (
// //                 <tr key={c.id}>
// //                   <td>{c.id}</td>
// //                   <td>{c.full_name}</td>
// //                   <td>{c.email}</td>
// //                   <td>{c.subject}</td>
// //                   <td>{c.subject_details}</td>
// //                   <td>{c.feedback}</td>
// //                   <td>{c.status}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </section>

// //         {/* Drivers */}
// //         <section id="drivers" className="dashboard_section">
// //           <h2>Drivers</h2>
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>ID</th>
// //                 <th>Full Name</th>
// //                 <th>Email</th>
// //                 <th>Phone</th>
// //                 <th>License</th>
// //                 <th>Status</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {drivers.map((d) => (
// //                 <tr key={d.id}>
// //                   <td>{d.id}</td>
// //                   <td>{d.full_name}</td>
// //                   <td>{d.email}</td>
// //                   <td>{d.phone_number}</td>
// //                   <td>{d.driver_license}</td>
// //                   <td>{d.status}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </section>

// //         {/* Searched Locations */}
// //         <section id="locations" className="dashboard_section">
// //           <h2>Searched Locations</h2>
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>ID</th>
// //                 <th>User ID</th>
// //                 <th>From</th>
// //                 <th>To</th>
// //                 <th>Date</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {searchedLocations.map((l) => (
// //                 <tr key={l.id}>
// //                   <td>{l.id}</td>
// //                   <td>{l.user_id}</td>
// //                   <td>{l.from_location}</td>
// //                   <td>{l.to_location}</td>
// //                   <td>{l.search_date}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </section>

// //         {/* Newsletter Subscribers */}
// //         <section id="newsletter" className="dashboard_section">
// //           <h2>Newsletter Subscriptions</h2>
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>ID</th>
// //                 <th>Email</th>
// //                 <th>UUID</th>
// //                 <th>Subscribed At</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {newsletterSubscriptions.map((n) => (
// //                 <tr key={n.id}>
// //                   <td>{n.id}</td>
// //                   <td>{n.email}</td>
// //                   <td>{n.uuid}</td>
// //                   <td>{n.created_at}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </section>
// //       </div>
// //     </div>
// //   );
//     return (
//   <div className="admin-dashboard-wrapper">
//     <h1>Admin Dashboard</h1>

//     <nav className="admin-dashboard-nav">
//       <Link to="/">Home</Link>
//       <Link to="#contacts">Contact Submissions</Link>
//       <Link to="#drivers">Drivers</Link>
//       <Link to="#locations">Searched Locations</Link>
//       <Link to="#newsletter">Newsletter Subscribers</Link>
//     </nav>

//     <div className="admin-dashboard-main-container">
//       {/* Contact Submissions */}
//       <section id="contacts" className="admin-dashboard-section">
//         <h2>Contact Submissions</h2>
//         <table className="admin-dashboard-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Full Name</th>
//               <th>Email</th>
//               <th>Subject</th>
//               <th>Details</th>
//               <th>Feedback</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contactSubmissions.map((c) => (
//               <tr key={c.id}>
//                 <td>{c.id}</td>
//                 <td>{c.full_name}</td>
//                 <td>{c.email}</td>
//                 <td>{c.subject}</td>
//                 <td>{c.subject_details}</td>
//                 <td>{c.feedback}</td>
//                 <td>{c.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       {/* Drivers */}
//       <section id="drivers" className="admin-dashboard-section">
//         <h2>Drivers</h2>
//         <table className="admin-dashboard-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Full Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>License</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {drivers.map((d) => (
//               <tr key={d.id}>
//                 <td>{d.id}</td>
//                 <td>{d.full_name}</td>
//                 <td>{d.email}</td>
//                 <td>{d.phone_number}</td>
//                 <td>{d.driver_license}</td>
//                 <td>{d.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       {/* Searched Locations */}
//       <section id="locations" className="admin-dashboard-section">
//         <h2>Searched Locations</h2>
//         <table className="admin-dashboard-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>User ID</th>
//               <th>From</th>
//               <th>To</th>
//               <th>Date</th>
//               <th>Type</th>
//             </tr>
//           </thead>
//           <tbody>
//             {searchedLocations.map((l) => (
//               <tr key={l.id}>
//                 <td>{l.id}</td>
//                 <td>{l.user_id}</td>
//                 <td>{l.start_location}</td>
//                 <td>{l.end_location}</td>
//                 <td>{l.ride_time}</td>
//                 <td>{l.ride_type}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       {/* Newsletter Subscriptions */}
//       <section id="newsletter" className="admin-dashboard-section">
//         <h2>Newsletter Subscriptions</h2>
//         <table className="admin-dashboard-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Email</th>
//               <th>UUID</th>
//               <th>Subscribed At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {newsletterSubscriptions.map((n) => (
//               <tr key={n.id}>
//                 <td>{n.id}</td>
//                 <td>{n.email}</td>
//                 <td>{n.uuid}</td>
//                 <td>{n.created_at}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>
//     </div>
//   </div>
// );


// };

// export default Admin_dashboard;


import { useEffect, useState } from "react";
import "../Styles/admin_dashboard.css";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const Admin_dashboard = () => {
    const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA'; // keep this secure!
const supabase = createClient(supabaseUrl, supabaseKey);

  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [searchedLocations, setSearchedLocations] = useState([]);
  const [newsletterSubscriptions, setNewsletterSubscriptions] = useState([]);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [rideOrders, setRideOrders] = useState([]);
  const [packages, setPackages] = useState([]);
  const [packageSubmissions, setPackageSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
   const [AdminInfo, setAdminInfo] = useState({
      username: "",
      email: "",
      password: "",
    });


     const handleLogout = () => {
    localStorage.removeItem("userData");
    window.location.href = "/"; // redirect to homepage or login page
  };

     useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("userData"));
      if (storedUser) {
        setAdminInfo(storedUser);
      }
    }, []);

 

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);

      try {
        // Contact Submissions
        const { data: contacts } = await supabase
          .from("contact_submissions")
          .select("*");
        setContactSubmissions(contacts || []);

        // Drivers
        const { data: driversData } = await supabase.from("drivers").select("*");
        setDrivers(driversData || []);

        // Searched Locations
        const { data: locationsData } = await supabase
          .from("searched_locations")
          .select("*");
        setSearchedLocations(locationsData || []);

        // Newsletter
        const { data: newsletterData } = await supabase
          .from("newsletter_subscriptions")
          .select("*");
        setNewsletterSubscriptions(newsletterData || []);

        // Registered Users
        const { data: usersData } = await supabase.from("register").select("*");
        setRegisteredUsers(usersData || []);

        // Ride Orders
        const { data: rideData } = await supabase.from("ride_order").select("*");
        setRideOrders(rideData || []);

        // Packages
        const { data: packagesData } = await supabase.from("packages").select("*");
        setPackages(packagesData || []);

        // Package Submissions
        const { data: pkgSub } = await supabase
          .from("package_submissions_choice")
          .select("*");
        setPackageSubmissions(pkgSub || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }

      setLoading(false);
    };

    fetchAllData();
  }, []);

  if (loading) return <p>Loading dashboard data...</p>;

 

  
  return (
    <div className="admin-dashboard-wrapper">
      <h1>Admin Dashboard</h1>

      <nav className="admin-dashboard-nav">
        <Link to="/">Home</Link>
        <Link to="#contacts">Contact Submissions</Link>
        <Link to="#drivers">Drivers</Link>
        <Link to="#locations">Searched Locations</Link>
        <Link to="#newsletter">Newsletter Subscribers</Link>
        <Link to="#users">Registered Users</Link>
        <Link to="#rides">Ride Orders</Link>
        <Link to="#packages">Packages</Link>
        <Link to="#pkg_submissions">Package Submissions</Link>
        <button className="btn-logout" onClick={handleLogout}>logout</button>
      </nav>

       <marquee className="admin-marquee">
        Welcome, <strong>{AdminInfo.username || "Admin"}</strong> — 
        Email: {AdminInfo.email || "N/A"} 
        
      </marquee>

      <div className="admin-dashboard-main-container">

        {/* Contact Submissions */}
        <section id="contacts" className="admin-dashboard-section">
          <h2>Contact Submissions</h2>
          <table className="admin-dashboard-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Details</th>
                <th>Feedback</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {contactSubmissions.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.full_name}</td>
                  <td>{c.email}</td>
                  <td>{c.subject}</td>
                  <td>{c.subject_details}</td>
                  <td>{c.feedback}</td>
                  <td>{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Drivers */}
        <section id="drivers" className="admin-dashboard-section">
          <h2>Drivers</h2>
          <table className="admin-dashboard-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>License</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((d) => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.full_name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone_number}</td>
                  <td>{d.driver_license}</td>
                  <td>{d.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Searched Locations */}
        <section id="locations" className="admin-dashboard-section">
          <h2>Searched Locations</h2>
          <table className="admin-dashboard-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>From</th>
                <th>To</th>
                <th>Date</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {searchedLocations.map((l) => (
                <tr key={l.id}>
                  <td>{l.id}</td>
                  <td>{l.user_id}</td>
                  <td>{l.start_location}</td>
                  <td>{l.end_location}</td>
                  <td>{l.ride_time}</td>
                  <td>{l.ride_type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="admin-dashboard-section">
          <h2>Newsletter Subscriptions</h2>
          <table className="admin-dashboard-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>UUID</th>
                <th>Subscribed At</th>
              </tr>
            </thead>
            <tbody>
              {newsletterSubscriptions.map((n) => (
                <tr key={n.id}>
                  <td>{n.id}</td>
                  <td>{n.email}</td>
                  <td>{n.uuid}</td>
                  <td>{n.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Registered Users */}
        <section id="users" className="admin-dashboard-section">
          <h2>Registered Users</h2>
          <table className="admin-dashboard-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {registeredUsers.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{u.password}</td>
                  <td>{u.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Ride Orders */}
        <section id="rides" className="admin-dashboard-section">
          <h2>Ride Orders</h2>
          <table className="admin-dashboard-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Client Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>From</th>
                <th>Destination</th>
                <th>Date</th>
                <th>Time</th>
                <th>Passengers</th>
                <th>Seats</th>
                <th>Price</th>
                <th>Type</th>
                <th>Status</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {rideOrders.map((r) => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.client_full_name}</td>
                  <td>{r.email_address}</td>
                  <td>{r.phone_number}</td>
                  <td>{r.start_location}</td>
                  <td>{r.destination}</td>
                  <td>{r.ride_date}</td>
                  <td>{r.ride_time}</td>
                  <td>{r.number_of_passengers}</td>
                  <td>{r.seats_available}</td>
                  <td>{r.price}</td>
                  <td>{r.ride_type}</td>
                  <td>{r.ride_status}</td>
                  <td>{r.payment_type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Packages */}
        <section id="packages" className="admin-dashboard-section">
          <h2>Packages</h2>
          <table className="admin-dashboard-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Included KM</th>
                <th>Normal</th>
                <th>VIP</th>
                <th>Cojoint</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.description}</td>
                  <td>{p.price}</td>
                  <td>{p.includedkm}</td>
                  <td>{p.normalprice}</td>
                  <td>{p.vipprice}</td>
                  <td>{p.cojointprice}</td>
                  <td>{p.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Package Submissions */}
        <section id="pkg_submissions" className="admin-dashboard-section">
          <h2>Packaged users</h2>
          <table className="admin-dashboard-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Package ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {packageSubmissions.map((ps) => (
                <tr key={ps.id}>
                  <td>{ps.id}</td>
                  <td>{ps.package_id}</td>
                  <td>{ps.full_name}</td>
                  <td>{ps.email}</td>
                  <td>{ps.phone}</td>
                  <td>{ps.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

      </div>
    </div>
  );
};

export default Admin_dashboard;
