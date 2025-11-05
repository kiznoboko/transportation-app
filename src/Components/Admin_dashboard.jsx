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
import { Link, useNavigate } from "react-router-dom";
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

    const navigate = useNavigate()

     const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/"); // redirect to homepage or login page
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

//  const handleAccess = async (user) => {
//   try {
//     // ✅ 1. Insert user into the drivers table
//     const { error: insertError } = await supabase.from("drivers").insert([
//       {
//         full_name: user.username,  // or user.full_name if it exists
//         email: user.email,
//         phone_number: user.phone_number || "", // optional
//         driver_license: "", // you can leave this empty or prompt later
//         status: "approved", // set default status
//       },
//     ]);

//     if (insertError) {
//       if (insertError.code === "23505") {
//         alert("This user already has access as a driver.");
//         return;
//       } else {
//         console.error("Insert error:", insertError);
//         alert("Failed to grant access to driver.");
//         return;
//       }
//     }

//     // ✅ 2. Remove the user from the register table
//     const { error: deleteError } = await supabase
//       .from("register")
//       .delete()
//       .eq("email", user.email);

//     if (deleteError) {
//       console.error("Delete error:", deleteError);
//       alert("Failed to remove user from register table.");
//       return;
//     }

//     alert(`Access granted to ${user.username || user.email}`);
    
//     // ✅ 3. Optionally refresh your registered users list
//     setRegisteredUsers((prev) =>
//       prev.filter((u) => u.email !== user.email)
//     );
//   } catch (err) {
//     console.error("Error in handleAccess:", err);
//   }
// };

// const handleAccess = async (user) => {
//   try {
//     // Upsert avoids duplicate email errors
//     const { data, error } = await supabase
//       .from("drivers")
//       .upsert([
//         {
//           full_name: user.username,
//           email: user.email,
//           phone_number: user.phone_number || "",
//           driver_license: "", // add real value if available
//           status: "approved",
//         },
//       ])
//       .select();

//     if (error) {
//       console.error("Insert/Upsert error:", error);
//       return;
//     }

//     // Remove user from register table after granting access
//     const { error: deleteError } = await supabase
//       .from("register")
//       .delete()
//       .eq("id", user.id);

//     if (deleteError) {
//       console.error("Delete from register error:", deleteError);
//       return;
//     }

//     // Update local state to remove the user from the table immediately
//     setRegisteredUsers((prev) => prev.filter((u) => u.id !== user.id));
//     console.log("User granted access and removed from register");
//   } catch (err) {
//     console.error("handleAccess error:", err);
//   }
// };


// const handleAccess = async (user) => {
//   if (!user.username || !user.email) {
//     console.error("Missing required user info");
//     return;
//   }

//   try {
//     const { data, error } = await supabase
//       .from("drivers")
//       .insert([
//         {
//           full_name: user.username, // must not be null
//           email: user.email,        // must not be null
//           phone_number: user.phone_number || "N/A", 
//           driver_license: user.driver_license || "N/A", // if nullable, you can omit
//           status: "approved",
//         },
//       ])
//       .select();

//     if (error) {
//       console.error("Insert error:", error);
//       return;
//     }

//     // Remove user from register table
//     const { error: deleteError } = await supabase
//       .from("register")
//       .delete()
//       .eq("id", user.id);

//     if (deleteError) {
//       console.error("Delete error:", deleteError);
//       return;
//     }

//     setRegisteredUsers(prev => prev.filter(u => u.id !== user.id));
//     console.log("User granted access and removed from register");
//   } catch (err) {
//     console.error("handleAccess error:", err);
//   }
// };


// const handleAccess = async (email) => {
//   try {
//     // 1️⃣ Fetch the user info from register by email
//     const { data: userData, error: fetchError } = await supabase
//       .from("register")
//       .select("*")
//       .eq("email", email)
//       .single(); // get single record

//     if (fetchError) {
//       console.error("Fetch user error:", fetchError);
//       return;
//     }

//     // 2️⃣ Insert into drivers table
//     const { data: driverData, error: insertError } = await supabase
//       .from("drivers")
//       .insert([
//         {
//           full_name: userData.username, // NOT NULL
//           email: userData.email,        // NOT NULL
//           phone_number: userData.phone_number || "N/A",
//           driver_license: userData.driver_license || "N/A", // optional
//           status: "approved",
//         },
//       ])
//       .select();

//     if (insertError) {
//       console.error("Insert driver error:", insertError);
//       return;
//     }

//     // 3️⃣ Delete user from register
//     const { error: deleteError } = await supabase
//       .from("register")
//       .delete()
//       .eq("email", email);

//     if (deleteError) {
//       console.error("Delete from register error:", deleteError);
//       return;
//     }

//     // 4️⃣ Update local state
//     setRegisteredUsers(prev => prev.filter(u => u.email !== email));

//     console.log("User access granted and removed from register successfully!");
//   } catch (err) {
//     console.error("handleAccess error:", err);
//   }
// };


// const handleAccess = async (email) => {
//   try {
//     // fetch user from register by email
//     const { data: userData, error: fetchError } = await supabase
//       .from("register")
//       .select("*")
//       .eq("email", email)   // <-- email MUST be a string
//       .single();            // returns single object

//     if (fetchError) {
//       console.error("Fetch user error:", fetchError);
//       return;
//     }

//     // insert into drivers
//     const { data: driverData, error: insertError } = await supabase
//       .from("drivers")
//       .insert([
//         {
//           full_name: userData.username, // NOT NULL
//           email: userData.email,        // NOT NULL
//           phone_number: userData.phone_number || "N/A",
//           driver_license: userData.driver_license || "N/A",
//           status: "approved",
//         },
//       ])
//       .select();

//     if (insertError) {
//       console.error("Insert driver error:", insertError);
//       return;
//     }

//     // delete from register
//     const { error: deleteError } = await supabase
//       .from("register")
//       .delete()
//       .eq("email", email);

//     if (deleteError) {
//       console.error("Delete from register error:", deleteError);
//       return;
//     }

//     setRegisteredUsers((prev) => prev.filter((u) => u.email !== email));
//     console.log("User access granted and removed from register!");
//   } catch (err) {
//     console.error("handleAccess error:", err);
//   }
// };


// const handleAccess = async (email) => {
//   try {
//     // 1. Fetch the user from 'register' table by email
//     const { data: user, error: fetchError } = await supabase
//       .from("register")
//       .select("*")
//       .eq("email", email)
//       .single(); // get a single row

//     if (fetchError) {
//       console.error("Fetch user error:", fetchError);
//       return;
//     }

//     // 2. Update the driver's status in 'drivers' table
//     const { data: updatedDriver, error: updateError } = await supabase
//       .from("drivers")
//       .update({ status: "approved" }) // or the status you want
//       .eq("email", user.email);

//     if (updateError) {
//       console.error("Update driver status error:", updateError);
//       return;
//     }

//     // 3. Delete the user from 'register' table
//     const { error: deleteError } = await supabase
//       .from("register")
//       .delete()
//       .eq("email", user.email);

//     if (deleteError) {
//       console.error("Delete user error:", deleteError);
//       return;
//     }

//     console.log("User access granted and removed from register.");
//   } catch (err) {
//     console.error("Unexpected error:", err);
//   }
// };


// const handleAccess = async (email) => {
//   try {
//     // 1. Fetch the user from 'register' table
//     const { data: user, error: fetchError } = await supabase
//       .from("register")
//       .select("*")
//       .eq("email", email)
//       .single();

//     if (fetchError) {
//       console.error("Fetch user error:", fetchError);
//       return;
//     }

//     // 2. Insert user into 'drivers' table
//     const { data: newDriver, error: insertError } = await supabase
//       .from("drivers")
//       .insert([
//         {
//           email: user.email,
//           full_name: user.full_name,
//           phone_number: user.phone_number,
//           driver_license: user.driver_license,
//           status: "approved", // set status here
//         }
//       ]);

//     if (insertError) {
//       console.error("Insert into drivers error:", insertError);
//       return;
//     }

//     // 3. Delete the user from 'register' table
//     const { error: deleteError } = await supabase
//       .from("register")
//       .delete()
//       .eq("email", user.email);

//     if (deleteError) {
//       console.error("Delete user error:", deleteError);
//       return;
//     }

//     // 4. Insert the deleted user into 'driver_table'
//     const { data: insertedUser, error: driverTableError } = await supabase
//       .from("driver") // replace with your target table
//       .insert([
//         {
//           username: user.full_name,
//           email: user.email,
//           password: user.password || "", // set password if available
//           created_at: new Date().toISOString(), // current timestamp
//         }
//       ]);

//     if (driverTableError) {
//       console.error("Insert into driver_table error:", driverTableError);
//       return;
//     }

//     console.log("User moved from register → drivers → driver successfully.");
//   } catch (err) {
//     console.error("Unexpected error:", err);
//   }
// };


// const handleAccess = async (email) => {
//   try {
//     // 1. Fetch the user from 'register' table
//     const { data: user, error: fetchError } = await supabase
//       .from("register")
//       .select("*")
//       .eq("email", email)
//       .single();

//     if (fetchError) {
//       console.error("Fetch user error:", fetchError);
//       return;
//     }

//     // Check required fields for drivers table
//     if (!user.full_name || !user.phone_number || !user.driver_license) {
//       console.error("Missing required fields for drivers table:", user);
//       return;
//     }

//     // 2. Insert user into 'drivers' table
//     const { data: newDriver, error: insertDriverError } = await supabase
//       .from("drivers")
//       .insert([
//         {
//           email: user.email,
//           full_name: user.full_name,
//           phone_number: user.phone_number,
//           driver_license: user.driver_license,
//           status: "approved",
//         }
//       ]);

//     if (insertDriverError) {
//       console.error("Insert into drivers error:", insertDriverError);
//       return;
//     }

//     // 3. Insert user into 'driver_table' (for login)
//     const { data: newAccount, error: insertAccountError } = await supabase
//       .from("driver")
//       .insert([
//         {
//           username: user.full_name,
//           email: user.email,
//           password: user.password || "", // adjust if password exists
//         }
//       ]);

//     if (insertAccountError) {
//       console.error("Insert into driver error:", insertAccountError);
//       return;
//     }

//     // 4. Delete the user from 'register' table
//     const { error: deleteError } = await supabase
//       .from("register")
//       .delete()
//       .eq("email", user.email);

//     if (deleteError) {
//       console.error("Delete from register error:", deleteError);
//       return;
//     }

//     console.log("User successfully moved: register → drivers → driver_table");
//   } catch (err) {
//     console.error("Unexpected error:", err);
//   }
// };


const handleAccess = async (email) => {
  try {
    // 1. Fetch the user from 'register' table
    const { data: user, error: fetchError } = await supabase
      .from("register")
      .select("*")
      .eq("email", email)
      .single();

    if (fetchError) {
      console.error("Fetch user error:", fetchError);
      return;
    }

    // 2. Update the status in 'drivers' table
    const { data: updatedDriver, error: updateError } = await supabase
      .from("drivers")
      .update({ status: "approved" }) // set new status
      .eq("email", email);

    if (updateError) {
      console.error("Update driver status error:", updateError);
      return;
    }

    // 3. Delete the user from 'register' table
    const { error: deleteError } = await supabase
      .from("register")
      .delete()
      .eq("email", email);

    if (deleteError) {
      console.error("Delete user error:", deleteError);
      return;
    }

    // 4. Optionally, insert the deleted user into 'driver_table'
    const { data: insertedUser, error: driverTableError } = await supabase
      .from("driver")
      .insert([
        {
          username: user.username || user.full_name || "Unknown",
          email: user.email,
          password: user.password || "",
          created_at: new Date().toISOString(),
        }
      ]);

    if (driverTableError) {
      console.error("Insert into driver error:", driverTableError);
      return;
    }

    console.log("User status updated in drivers, removed from register, and inserted into driver_table.");
  } catch (err) {
    console.error("Unexpected error:", err);
  }
};






  
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
                <th>change status</th>
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
                  <td><button
  className="btn tbn-submit"
  onClick={() => handleAccess(d.email)}
>
  donner l’accès
</button></td>
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
