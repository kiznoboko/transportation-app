// import Confirm from "./images/confirm.svg";
// import "../Styles/Confirmed_submissions.css"
// const Confirmed_contact = () => {
//     return (
//         <>
//             <h1>Confirmed submission : contact ID : </h1>
//             <img src={Confirm} alt=""  className="confirmed-submissions"/>
//         </>
//     )
// }


// export default Confirmed_contact;


// import { useParams } from "react-router-dom";
// import Confirm from "./images/confirm.svg";
// import "../Styles/Confirmed_submissions.css";

// const Confirmed_contact = () => {
//   // Extract the UUID from the URL
//   const { uuid } = useParams();

//   return (
//     <>
//       <h1>Confirmed submission: Contact ID: {uuid}</h1>
//       <img src={Confirm} alt="Confirmed" className="confirmed-submissions" />
//     </>
//   );
// };

// export default Confirmed_contact;


import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Confirm from "./images/confirm.svg";
import "../Styles/Confirmed_submissions.css";

const Confirmed_contact = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();

  // Redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // redirect to home
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // cleanup on unmount
  }, [navigate]);

  return (
    <>
      <h1>Confirmed submission: Confirmation ID: {uuid}</h1>
      <p>You will be redirected to the homepage shortly...</p>
      <img src={Confirm} alt="Confirmed" className="confirmed-submissions" />
    </>
  );
};

export default Confirmed_contact;

