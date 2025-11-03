// import {Link, useNavigate} from "react-router-dom";
// import "../Styles/cheffaur_submisison.css"
// import { createClient } from '@supabase/supabase-js';

// const Driver_submission = () => {

//     const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA'; // keep this secure!
// const supabase = createClient(supabaseUrl, supabaseKey);

// const [cheffaurForm, setcheffaurForm] = useState("");


// const handleSubmit = async (e) => {

//     let { data, error } = await supabase
//     .from("register")
//     .select("*")
//     .eq("email", loginEmail)
//       // ⚠️ Plain text passwords are insecure
//     .single();

//     "if entered email = login email or registered email",

//     "we insert into table "drivers" all the entered info and we setted pull uuid "

// }

    
//     const navigate = useNavigate
//     const handleGetStartedClick = () => {
//     navigate("/user_interface", { state: { registerActive: true } });
//   };
//     return (
//         <> 
//                 <h1>Driver page </h1>

//                 <p className="cheffaur-tag-warning">must be registered, <li  className="register-cheffaur" onClick={handleGetStartedClick}>Register here</li></p>
                
//                 <form action="">
//                         <div className="form-group-cheffaur">
//                             <label htmlFor="" className="form-label-cheffaur">Full name:</label>
//                             <input type="text" className="form-control-cheffaur" placeholder="full name" />
                            
//                         </div>
//                         <div className="form-group-cheffaur">
//                             <label htmlFor="" className="form-label-cheffaur">Email address (real email address):</label>
//                             <input type="text" className="form-control-cheffaur" placeholder="Email address :" id="loginEmail"
//                   className="form-control"
//                   placeholder="Enter your email"
//                   value={loginEmail}
//                   onChange={(e) => setLoginEmail(e.target.value)}
//                   required />
                            
//                         </div>
//                          <div className="form-group-cheffaur">
//                             <label htmlFor="" className="form-label-cheffaur">Phone number :</label>
//                             <input type="text" className="form-control-cheffaur" placeholder="Contact phone number :" />
                            
//                         </div>
//                          <div className="form-group-cheffaur">
//                             <label htmlFor="" className="form-label-cheffaur">Driver license :</label>
//                             <input type="text" className="form-control-cheffaur" placeholder="Driver licence" />
                            
//                         </div>
//                         <button type="submit" onClick={handleSubmit}>submit</button>
//                 </form>

//         </>
//     )
// }

// export default Driver_submission;




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { createClient } from "@supabase/supabase-js";
// import "../Styles/cheffaur_submisison.css";

//     const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA'; // keep this secure!
// const supabase = createClient(supabaseUrl, supabaseKey);

// const Driver_submission = () => {
//   const navigate = useNavigate();

//   // 🧩 Form states
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [driverLicense, setDriverLicense] = useState("");

//   const handleGetStartedClick = () => {
//     navigate("/user_interface", { state: { registerActive: true } });
//   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // 🔍 Check if the email exists in "register" table
// //     const { data: existingUser, error: checkError } = await supabase
// //       .from("register")
// //       .select("*")
// //       .eq("email", email)
// //       .single();

// //     if (checkError || !existingUser) {
// //       alert("Email not registered. Please register first.");
// //       return;
// //     }

// //     // ✅ Insert driver data into "drivers" table
// //     const { data: insertData, error: insertError } = await supabase
// //       .from("drivers")
// //       .insert([
// //         {
// //           full_name: fullName,
// //           email: email,
// //           phone_number: phoneNumber,
// //           driver_license: driverLicense,
// //           status: "pending",
// //         },
// //       ]);

// //     if (insertError) {
// //       console.error(insertError);
// //       alert("Failed to submit driver info.");
// //     } else {
// //       alert("Driver submitted successfully!");
// //       // Optionally clear form
// //       setFullName("");
// //       setEmail("");
// //       setPhoneNumber("");
// //       setDriverLicense("");
// //     }
// //   };


// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // 🔍 Check if the email exists in "register" table
//   const { data: existingUser, error: checkError } = await supabase
//     .from("register")
//     .select("*")
//     .eq("email", email)
//     .single();

//   if (checkError || !existingUser) {
//     alert("Email not registered. Please register first.");
//     return;
//   }

//   // ✅ Insert driver data into "drivers" table
//   const { data: insertData, error: insertError } = await supabase
//     .from("drivers")
//     .insert([
//       {
//         full_name: fullName,
//         email: email,
//         phone_number: phoneNumber,
//         driver_license: driverLicense,
//         status: "pending",
//       },
//     ])
//     .select(); // <- this ensures Supabase returns the inserted row!

//   if (insertError) {
//     console.error(insertError);
//     alert("Failed to submit driver info.");
//   } else {
//     alert("Driver submitted successfully!");

//     // 🧹 Clear form
//     setFullName("");
//     setEmail("");
//     setPhoneNumber("");
//     setDriverLicense("");

//     // 🔁 Fetch the inserted driver's UUID (or directly from insertData)
//     let driverUUID;
//     if (insertData && insertData.length > 0) {
//       // if Supabase returns inserted record
//       driverUUID = insertData[0].id;
//     } else {
//       // fallback: re-query by email
//       const { data: driverRecord, error: fetchError } = await supabase
//         .from("drivers")
//         .select("id")
//         .eq("email", email)
//         .single();

//       if (fetchError) {
//         console.error(fetchError);
//         alert("Failed to retrieve driver UUID.");
//         return;
//       }

//       driverUUID = driverRecord.id;
//     }

//     console.log("✅ Driver UUID:", driverUUID);
//     alert(`Driver UUID: ${driverUUID}`);
//   }
// };

//   return (
//     <>
//       <h1>Driver Page</h1>

//       <p className="cheffaur-tag-warning">
//         Must be registered,{" "}
//         <span className="register-cheffaur" onClick={handleGetStartedClick}>
//           Register here
//         </span>
//       </p>

//       <form onSubmit={handleSubmit}>
//         <div className="form-group-cheffaur">
//           <label className="form-label-cheffaur">Full name:</label>
//           <input
//             type="text"
//             className="form-control-cheffaur"
//             placeholder="Full name"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group-cheffaur">
//           <label className="form-label-cheffaur">Email address:</label>
//           <input
//             type="email"
//             className="form-control-cheffaur"
//             placeholder="Email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group-cheffaur">
//           <label className="form-label-cheffaur">Phone number:</label>
//           <input
//             type="text"
//             className="form-control-cheffaur"
//             placeholder="Contact phone number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group-cheffaur">
//           <label className="form-label-cheffaur">Driver license:</label>
//           <input
//             type="text"
//             className="form-control-cheffaur"
//             placeholder="Driver license"
//             value={driverLicense}
//             onChange={(e) => setDriverLicense(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default Driver_submission;




import { Link, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import "../Styles/cheffaur_submisison.css";

// 🧩 Supabase client
    const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA'; // keep this secure!
const supabase = createClient(supabaseUrl, supabaseKey);

const Driver_submission = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [driverLicense, setDriverLicense] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔍 1. Check if email exists in `register` table
    const { data: existingUser, error: checkError } = await supabase
      .from("register")
      .select("*")
      .eq("email", email)
      .single();

    if (checkError || !existingUser) {
      alert("Email not registered. Please register first.");
      return;
    }

    // ✅ 2. Insert into `drivers` table
    const { data: insertData, error: insertError } = await supabase
      .from("drivers")
      .insert([
        {
          full_name: fullName,
          email: email,
          phone_number: phoneNumber,
          driver_license: driverLicense,
          status: "pending",
        },
      ])
      .select();

    if (insertError) {
      console.error(insertError);
      alert("❌ Failed to submit driver info.");
      return;
    }

    // 🧾 3. Retrieve UUID
    const driverUUID = insertData?.[0]?.id;
    if (!driverUUID) {
      alert("UUID not found after insert.");
      return;
    }

    // 💾 4. Optionally store UUID locally
    localStorage.setItem("driver_uuid", driverUUID);

    // ✅ 5. Redirect to /driver/:uuid
    navigate(`/driver/${driverUUID}`);
  };

  const handleGetStartedClick = () => {
    navigate("/user_interface", { state: { registerActive: true } });
  };

  return (
    <>
      <h1 className="h1-cheffaur-page">Driver Page</h1>
      <p className="cheffaur-tag-warning">
        Must be registered,{" "}
        <li className="register-cheffaur" onClick={handleGetStartedClick}>
          Register here
        </li>
      </p>

      <form onSubmit={handleSubmit} className="form-cheffaur-submisison">
        <div className="form-group-cheffaur">
          <label className="form-label-cheffaur">Full name:</label>
          <input
            type="text"
            className="form-control-cheffaur"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-group-cheffaur">
          <label className="form-label-cheffaur">
            Email address (real email):
          </label>
          <input
            type="email"
            className="form-control-cheffaur"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group-cheffaur">
          <label className="form-label-cheffaur">Phone number:</label>
          <input
            type="text"
            className="form-control-cheffaur"
            placeholder="Contact phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group-cheffaur">
          <label className="form-label-cheffaur">Driver license:</label>
          <input
            type="text"
            className="form-control-cheffaur"
            placeholder="Driver license"
            value={driverLicense}
            onChange={(e) => setDriverLicense(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="cheffaur-submission-btn">Submit</button>
      </form>
    </>
  );
};

export default Driver_submission;
