// import { useState } from "react";
// import {Link, useNavigate} from "react-router-dom";
// import "../Styles/contactus.css";
// import "../Styles/cheffaur_submisison.css";
// import { createClient } from "@supabase/supabase-js";
// const ContactUS = () => {


//         const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
//     const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA'; // keep this secure!
//     const supabase = createClient(supabaseUrl, supabaseKey);

//      const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [organization, setOrganization] = useState("");
//   const [subject, setSubject] = useState("");
//   const [subjectDetails, setSubjectDetails] = useState("");
//   const [feedback, setFeedback] = useState("");
// const navigate = useNavigate()
//   const handleSubmitContactForm = async (e) => {
//     e.preventDefault(); // prevent page reload

//     const { data: insertData, error: insertError } = await supabase
//       .from("contact_submissions")
//       .insert([
//         {
//           full_name: fullName,
//           email: email,
//           phone_number: phoneNumber,
//           organization: organization,
//           subject: subject,
//           subject_details: subjectDetails,
//           feedback: feedback,
//         },
//       ])
//       .select();

//     if (insertError) {
//       console.error(insertError);
//       alert("❌ Failed to submit contact form.");
//       return;
//     }

//     alert("✅ Contact form submitted successfully!");
//     // Optionally clear the form
//     setFullName("");
//     setEmail("");
//     setPhoneNumber("");
//     setOrganization("");
//     setSubject("");
//     setSubjectDetails("");
//     setFeedback("");

//     navigate("//Confirmed/:uuid")
//   };

//     return (
//         <>
//             <div className="Contactusform-wrapper">
//                 <Link to="/">home</Link>
//                 <fieldset className="Contactusfieldset">
//                     <legend>contact support form</legend>
//                     <form  method="POST" className="Contactusform">
//                         <div className="Contactusform-group">
//                             <label htmlFor="" className="Contactusform-label">Full name</label>
//                             <input type="text" className="Contactusform-control" placeholder="full name" required/>
//                         </div>
//                         <div className="Contactusform-group">
//                             <label htmlFor="" className="Contactusform-label">email</label>
//                             <input type="email" className="Contactusform-control" placeholder="Enter your personal/business valid email" required/>
//                         </div>
//                          <div className="Contactusform-group">
//                             <label htmlFor="" className="Contactusform-label" >phone number</label>
//                             <input type="number" className="Contactusform-control" placeholder="personal phone number or business phone number " required/>
//                         </div>
//                          <div className="Contactusform-group">
//                             <label htmlFor="" className="Contactusform-label">Organization email/name/domaine</label>
//                             <input type="text" className="Contactusform-control" placeholder="organization info (enter no organization if no organization term)" required />
//                         </div>
//                          <div className="Contactusform-group">
//                             <label htmlFor="" className="Contactusform-label">Contact subject</label>
//                             <input type="text" className="Contactusform-control" placeholder="contact subject, specify main contact subject" required />
//                         </div>
//                          <div className="Contactusform-group">
//                             <label htmlFor="" className="Contactusform-label">subject details</label>
//                             <textarea type="text" className="Contactusform-control textArea-input"  placeholder="details fro contact subject" required />
//                         </div>
//                         <div className="Contactusform-group">
//                             <label htmlFor="" className="Contactusform-label">feedback</label>
//                             <textarea name="" className="Contactusform-control textArea-input" placeholder="thoughtful feedback. (optional but we appreciate it (write no feedback if no feedback))" />
//                         </div>

//                         <button className="submit-formbtn" onClick={handleSubmitContactForm} >submit</button>
//                     </form>
//                 </fieldset>
//             </div>
        
//         </>
//     )

// } 

// export default ContactUS;





import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/contactus.css";
import "../Styles/cheffaur_submisison.css";
import { createClient } from "@supabase/supabase-js";

        const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA'; // keep this secure!
    const supabase = createClient(supabaseUrl, supabaseKey);

const ContactUS = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organization, setOrganization] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectDetails, setSubjectDetails] = useState("");
  const [feedback, setFeedback] = useState("");

  const navigate = useNavigate();

  const handleSubmitContactForm = async (e) => {
    e.preventDefault();

    const { data: insertData, error: insertError } = await supabase
      .from("contact_submissions")
      .insert([
        {
          full_name: fullName,
          email: email,
          phone_number: phoneNumber,
          organization: organization,
          subject: subject,
          subject_details: subjectDetails,
          feedback: feedback,
        },
      ])
      .select();

    if (insertError) {
      console.error(insertError);
      alert("❌ Failed to submit contact form.");
      return;
    }

    const contactUUID = insertData?.[0]?.id;
    if (!contactUUID) {
      alert("❌ UUID not found after submission.");
      return;
    }

    // Clear the form
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setOrganization("");
    setSubject("");
    setSubjectDetails("");
    setFeedback("");

    // Navigate to confirmation page with UUID
    navigate(`/confirmed/${contactUUID}`);
  };

  return (
    <div className="Contactusform-wrapper">
      <Link to="/">home</Link>
      <fieldset className="Contactusfieldset">
        <legend>contact support form</legend>
        <form className="Contactusform" onSubmit={handleSubmitContactForm}>
          <div className="Contactusform-group">
            <label className="Contactusform-label">Full name</label>
            <input
              type="text"
              className="Contactusform-control"
              placeholder="full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="Contactusform-group">
            <label className="Contactusform-label">Email</label>
            <input
              type="email"
              className="Contactusform-control"
              placeholder="Enter your personal/business valid email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="Contactusform-group">
            <label className="Contactusform-label">Phone number</label>
            <input
              type="number"
              className="Contactusform-control"
              placeholder="personal phone number or business phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="Contactusform-group">
            <label className="Contactusform-label">Organization email/name/domain</label>
            <input
              type="text"
              className="Contactusform-control"
              placeholder="organization info (enter no organization if none)"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              required
            />
          </div>

          <div className="Contactusform-group">
            <label className="Contactusform-label">Contact subject</label>
            <input
              type="text"
              className="Contactusform-control"
              placeholder="contact subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="Contactusform-group">
            <label className="Contactusform-label">Subject details</label>
            <textarea
              className="Contactusform-control textArea-input"
              placeholder="details for contact subject"
              value={subjectDetails}
              onChange={(e) => setSubjectDetails(e.target.value)}
              required
            />
          </div>

          <div className="Contactusform-group">
            <label className="Contactusform-label">Feedback</label>
            <textarea
              className="Contactusform-control textArea-input"
              placeholder="optional feedback (write 'no feedback' if none)"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-formbtn">
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default ContactUS;
