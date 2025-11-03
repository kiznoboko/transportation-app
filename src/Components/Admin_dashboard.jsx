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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);

      // Contact Submissions
      const { data: contacts, error: contactError } = await supabase
        .from("contact_submissions")
        .select("*");
      if (contactError) console.error("Contacts error:", contactError);
      else setContactSubmissions(contacts);

      // Drivers
      const { data: driversData, error: driversError } = await supabase
        .from("drivers")
        .select("*");
      if (driversError) console.error("Drivers error:", driversError);
      else setDrivers(driversData);

      // Searched Locations
      const { data: locationsData, error: locationsError } = await supabase
        .from("searched_locations")
        .select("*");
      if (locationsError) console.error("Locations error:", locationsError);
      else setSearchedLocations(locationsData);

      // Newsletter Subscriptions
      const { data: newsletterData, error: newsletterError } = await supabase
        .from("newsletter_subscriptions")
        .select("*");
      if (newsletterError) console.error("Newsletter error:", newsletterError);
      else setNewsletterSubscriptions(newsletterData);

      setLoading(false);
    };

    fetchAllData();
  }, []);

  if (loading) return <p>Loading dashboard data...</p>;

//   return (
//     <div className="admin_dashboard_wrapper">
//       <h1>Admin Dashboard</h1>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="#contacts">Contact Submissions</Link>
//         <Link to="#drivers">Drivers</Link>
//         <Link to="#locations">Searched Locations</Link>
//         <Link to="#newsletter">Newsletter Subscribers</Link>
//       </nav>

//       <div className="admin_dashboard_main_container">
//         {/* Contact Submissions */}
//         <section id="contacts" className="dashboard_section">
//           <h2>Contact Submissions</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Full Name</th>
//                 <th>Email</th>
//                 <th>Subject</th>
//                 <th>Details</th>
//                 <th>Feedback</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {contactSubmissions.map((c) => (
//                 <tr key={c.id}>
//                   <td>{c.id}</td>
//                   <td>{c.full_name}</td>
//                   <td>{c.email}</td>
//                   <td>{c.subject}</td>
//                   <td>{c.subject_details}</td>
//                   <td>{c.feedback}</td>
//                   <td>{c.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </section>

//         {/* Drivers */}
//         <section id="drivers" className="dashboard_section">
//           <h2>Drivers</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Full Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>License</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {drivers.map((d) => (
//                 <tr key={d.id}>
//                   <td>{d.id}</td>
//                   <td>{d.full_name}</td>
//                   <td>{d.email}</td>
//                   <td>{d.phone_number}</td>
//                   <td>{d.driver_license}</td>
//                   <td>{d.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </section>

//         {/* Searched Locations */}
//         <section id="locations" className="dashboard_section">
//           <h2>Searched Locations</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>User ID</th>
//                 <th>From</th>
//                 <th>To</th>
//                 <th>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {searchedLocations.map((l) => (
//                 <tr key={l.id}>
//                   <td>{l.id}</td>
//                   <td>{l.user_id}</td>
//                   <td>{l.from_location}</td>
//                   <td>{l.to_location}</td>
//                   <td>{l.search_date}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </section>

//         {/* Newsletter Subscribers */}
//         <section id="newsletter" className="dashboard_section">
//           <h2>Newsletter Subscriptions</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Email</th>
//                 <th>UUID</th>
//                 <th>Subscribed At</th>
//               </tr>
//             </thead>
//             <tbody>
//               {newsletterSubscriptions.map((n) => (
//                 <tr key={n.id}>
//                   <td>{n.id}</td>
//                   <td>{n.email}</td>
//                   <td>{n.uuid}</td>
//                   <td>{n.created_at}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </section>
//       </div>
//     </div>
//   );
    return (
  <div className="admin-dashboard-wrapper">
    <h1>Admin Dashboard</h1>

    <nav className="admin-dashboard-nav">
      <Link to="/">Home</Link>
      <Link to="#contacts">Contact Submissions</Link>
      <Link to="#drivers">Drivers</Link>
      <Link to="#locations">Searched Locations</Link>
      <Link to="#newsletter">Newsletter Subscribers</Link>
    </nav>

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
            </tr>
          </thead>
          <tbody>
            {searchedLocations.map((l) => (
              <tr key={l.id}>
                <td>{l.id}</td>
                <td>{l.user_id}</td>
                <td>{l.from_location}</td>
                <td>{l.to_location}</td>
                <td>{l.search_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Newsletter Subscriptions */}
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
    </div>
  </div>
);


};

export default Admin_dashboard;
