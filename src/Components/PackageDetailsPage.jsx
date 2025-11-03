// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const PackageDetailsPage = () => {
//   const { id } = useParams(); // Get the package ID from the URL
//   const [packageData, setPackageData] = useState(null);

//   useEffect(() => {
//     // Fetch package details from your data source (e.g., an API or a local array)
//     const fetchPackageDetails = async () => {
//       // Example: fetch the package by ID (this should be replaced by real logic)
//       const fetchedPackage = mockPackageData.find((pkg) => pkg.id === parseInt(id));
//       setPackageData(fetchedPackage);
//     };

//     fetchPackageDetails();
//   }, [id]);

//   if (!packageData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="package-details">
//       <h2>{packageData.name} Package Details</h2>
//       <p>{packageData.description}</p>
//       <p>Price: {packageData.price}</p>
//       <ul>
//         <li>Included km: {packageData.includedKm}</li>
//         <li>Normal Ride Price: {packageData.normalPrice}</li>
//         <li>VIP Ride Price: {packageData.vipPrice}</li>
//         <li>Co-joint Ride Price: {packageData.coJointPrice}</li>
//       </ul>
//       <button>Purchase Package</button>
//     </div>
//   );
// };

// export default PackageDetailsPage;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// // Mock data for simplicity, similar to the one in PackagesPage.jsx
// const packages = [
//   {
//     id: "1",
//     name: "Basic Daily Package",
//     description: "Best for short trips.",
//     price: "70 MAD",
//     includedKm: "20 km",
//     normalPrice: "70 MAD",
//     vipPrice: "140 MAD",
//     coJointPrice: "40 MAD/person",
//     category: "Daily",
//   },
//   {
//     id: "2",
//     name: "Extended Daily Package",
//     description: "Ideal for longer routes.",
//     price: "170 MAD",
//     includedKm: "50 km",
//     normalPrice: "170 MAD",
//     vipPrice: "350 MAD",
//     coJointPrice: "100 MAD/person",
//     category: "Daily",
//   },
//   {
//     id: "3",
//     name: "Normal Monthly Package",
//     description: "Ideal for regular commuters.",
//     price: "1600 MAD/month",
//     includedKm: "500 km",
//     normalPrice: "1600 MAD/month",
//     vipPrice: "3200 MAD/month",
//     coJointPrice: "900 MAD/month/person",
//     category: "Monthly",
//   },
//   {
//     id: "4",
//     name: "VIP Monthly Package",
//     description: "For those seeking luxury and comfort.",
//     price: "3200 MAD/month",
//     includedKm: "500 km",
//     normalPrice: "3200 MAD/month",
//     vipPrice: "6400 MAD/month",
//     coJointPrice: "1500 MAD/month/person",
//     category: "Monthly",
//   },
//   {
//     id: "5",
//     name: "Normal Yearly Package",
//     description: "Ideal for long-term use.",
//     price: "18000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "18000 MAD/year",
//     vipPrice: "36000 MAD/year",
//     coJointPrice: "10800 MAD/year/person",
//     category: "Yearly",
//   },
//   {
//     id: "6",
//     name: "VIP Yearly Package",
//     description: "Maximum savings with luxury rides.",
//     price: "36000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "36000 MAD/year",
//     vipPrice: "72000 MAD/year",
//     coJointPrice: "21600 MAD/year/person",
//     category: "Yearly",
//   },
// ];

// const PackageDetailsPage = () => {
//   const { id } = useParams(); // Get the package id from the URL
//   const [packageData, setPackageData] = useState(null);

//   useEffect(() => {
//     const fetchedPackage = packages.find((pkg) => pkg.id === id);
//     setPackageData(fetchedPackage);
//   }, [id]);

//   if (!packageData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="package-details">
//       <h2>{packageData.name} Details</h2>
//       <p>{packageData.description}</p>
//       <p>Price: {packageData.price}</p>
//       <ul>
//         <li>Included km: {packageData.includedKm}</li>
//         <li>Normal Ride: {packageData.normalPrice}</li>
//         <li>VIP Ride: {packageData.vipPrice}</li>
//         <li>Co-joint Ride: {packageData.coJointPrice}</li>
//       </ul>
//       <button>Purchase Package</button>
//     </div>
//   );
// };

// export default PackageDetailsPage;



// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// // Mock data for simplicity
// const packages = {
//   1: {
//     id: "1",
//     name: "Basic Daily Package",
//     description: "Best for short trips. Perfect for daily short commutes.",
//     price: "70 MAD",
//     includedKm: "20 km",
//     normalPrice: "70 MAD",
//     vipPrice: "140 MAD",
//     coJointPrice: "40 MAD/person",
//     category: "Daily"
//   },
//   2: {
//     id: "2",
//     name: "Extended Daily Package",
//     description: "Ideal for longer routes. For more extensive travel within the day.",
//     price: "170 MAD",
//     includedKm: "50 km",
//     normalPrice: "170 MAD",
//     vipPrice: "350 MAD",
//     coJointPrice: "100 MAD/person",
//     category: "Daily"
//   },
//   3: {
//     id: "3",
//     name: "Normal Monthly Package",
//     description: "For regular commuters, offering the best value for monthly travel.",
//     price: "1600 MAD",
//     includedKm: "500 km",
//     normalPrice: "1600 MAD/month",
//     vipPrice: "3200 MAD/month",
//     coJointPrice: "900 MAD/person/month",
//     category: "Monthly"
//   },
//   4: {
//     id: "4",
//     name: "VIP Monthly Package",
//     description: "Luxury travel with priority service and top-class comfort.",
//     price: "3200 MAD",
//     includedKm: "Unlimited km",
//     normalPrice: "3200 MAD/month",
//     vipPrice: "3200 MAD/month",
//     coJointPrice: "900 MAD/person/month",
//     category: "Monthly"
//   },
//   5: {
//     id: "5",
//     name: "Co-joint Monthly Package",
//     description: "A cost-effective option for multiple people to travel together.",
//     price: "900 MAD",
//     includedKm: "500 km",
//     normalPrice: "900 MAD/month/person",
//     vipPrice: "1800 MAD/month/person",
//     coJointPrice: "900 MAD/person/month",
//     category: "Monthly"
//   },
//   6: {
//     id: "6",
//     name: "Normal Yearly Package",
//     description: "Great for long-term travel needs. Save up to 20% annually.",
//     price: "18000 MAD",
//     includedKm: "6000 km",
//     normalPrice: "18000 MAD/year",
//     vipPrice: "36000 MAD/year",
//     coJointPrice: "10800 MAD/year/person",
//     category: "Yearly"
//   },
//   7: {
//     id: "7",
//     name: "VIP Yearly Package",
//     description: "Top-tier service for frequent travelers. Save up to 25% annually.",
//     price: "36000 MAD",
//     includedKm: "Unlimited km",
//     normalPrice: "36000 MAD/year",
//     vipPrice: "36000 MAD/year",
//     coJointPrice: "10800 MAD/year/person",
//     category: "Yearly"
//   },
//   8: {
//     id: "8",
//     name: "Co-joint Yearly Package",
//     description: "Affordable, eco-friendly travel for groups with a joint package.",
//     price: "10800 MAD",
//     includedKm: "6000 km",
//     normalPrice: "10800 MAD/year/person",
//     vipPrice: "21600 MAD/year/person",
//     coJointPrice: "10800 MAD/year/person",
//     category: "Yearly"
//   }
// };

// const PackageDetailsPage = () => {
//   const { id } = useParams();
//   const [packageData, setPackageData] = useState(null);

//   useEffect(() => {
//     const selectedPackage = packages[id];
//     setPackageData(selectedPackage);
//   }, [id]);

//   if (!packageData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="package-details">
//       <h2>{packageData.name} Details</h2>
//       <p>{packageData.description}</p>
//       <ul>
//         <li><strong>Included km:</strong> {packageData.includedKm}</li>
//         <li><strong>Normal Ride:</strong> {packageData.normalPrice}</li>
//         <li><strong>VIP Ride:</strong> {packageData.vipPrice}</li>
//         <li><strong>Co-joint Ride:</strong> {packageData.coJointPrice}</li>
//       </ul>

//       <div className="btn-group">
//         <Link to="/PackagesPage" className="btn-secondary">Back to Packages</Link>
//         <button className="btn-primary">Purchase Package</button>
//       </div>

//       {/* Display all package categories */}
//       <h3>Other Packages</h3>
//       <div className="other-packages">
//         {Object.values(packages).map(pkg => (
//           <div className="package-card" key={pkg.id}>
//             <h4>{pkg.name}</h4>
//             <p><strong>{pkg.category} Package</strong></p>
//             <p>{pkg.description}</p>
//             <ul>
//               <li>Included km: {pkg.includedKm}</li>
//               <li>Normal Ride: {pkg.normalPrice}</li>
//               <li>VIP Ride: {pkg.vipPrice}</li>
//               <li>Co-joint Ride: {pkg.coJointPrice}</li>
//             </ul>
//             <Link to={`/package/${pkg.id}`} className="btn-secondary">View Details</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PackageDetailsPage;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../Styles/PackagePageDetails.css";

// // Mock data for simplicity, similar to the one in PackagesPage.jsx
// const packages = [
//   {
//     id: "1",
//     name: "Basic Daily Package",
//     description: "Best for short trips.",
//     price: "70 MAD",
//     includedKm: "20 km",
//     normalPrice: "70 MAD",
//     vipPrice: "140 MAD",
//     coJointPrice: "40 MAD/person",
//     category: "Daily",
//   },
//   {
//     id: "2",
//     name: "Extended Daily Package",
//     description: "Ideal for longer routes.",
//     price: "170 MAD",
//     includedKm: "50 km",
//     normalPrice: "170 MAD",
//     vipPrice: "350 MAD",
//     coJointPrice: "100 MAD/person",
//     category: "Daily",
//   },
//   {
//     id: "3",
//     name: "Normal Monthly Package",
//     description: "Ideal for regular commuters.",
//     price: "1600 MAD/month",
//     includedKm: "500 km",
//     normalPrice: "1600 MAD/month",
//     vipPrice: "3200 MAD/month",
//     coJointPrice: "900 MAD/month/person",
//     category: "Monthly",
//   },
//   {
//     id: "4",
//     name: "VIP Monthly Package",
//     description: "For those seeking luxury and comfort.",
//     price: "3200 MAD/month",
//     includedKm: "500 km",
//     normalPrice: "3200 MAD/month",
//     vipPrice: "6400 MAD/month",
//     coJointPrice: "1500 MAD/month/person",
//     category: "Monthly",
//   },
//   {
//     id: "5",
//     name: "Normal Yearly Package",
//     description: "Ideal for long-term use.",
//     price: "18000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "18000 MAD/year",
//     vipPrice: "36000 MAD/year",
//     coJointPrice: "10800 MAD/year/person",
//     category: "Yearly",
//   },
//   {
//     id: "6",
//     name: "VIP Yearly Package",
//     description: "Maximum savings with luxury rides.",
//     price: "36000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "36000 MAD/year",
//     vipPrice: "72000 MAD/year",
//     coJointPrice: "21600 MAD/year/person",
//     category: "Yearly",
//   },
// ];

// const PackageDetailsPage = () => {
//   const { id } = useParams(); // Get the package id from the URL
//   const [packageData, setPackageData] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//   });

//   useEffect(() => {
//     const fetchedPackage = packages.find((pkg) => pkg.id === id);
//     setPackageData(fetchedPackage);
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Simulate form submission (you can integrate with backend here)
//     const clientData = {
//       client_full_name: formData.fullName,
//       email_address: formData.email,
//       phone_number: formData.phone,
//     };

//     console.log("Client Data Submitted:", clientData);
//     // You can now send this data to your backend or API
//   };

//   if (!packageData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="package-details">
//       <h2>{packageData.name} Details</h2>
//       <p>{packageData.description}</p>
//       <p>Price: {packageData.price}</p>
//       <ul>
//         <li>Included km: {packageData.includedKm}</li>
//         <li>Normal Ride: {packageData.normalPrice}</li>
//         <li>VIP Ride: {packageData.vipPrice}</li>
//         <li>Co-joint Ride: {packageData.coJointPrice}</li>
//       </ul>

//       {/* Form for Client Information */}
//       <form onSubmit={handleFormSubmit} className="client-info-form">
//         <h3>Client Information</h3>
        
//         <div className="form-group">
//           <label htmlFor="fullName">Full Name</label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="phone">Phone Number</label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <button type="submit" className="btn-primary">Submit Information</button>
//       </form>

//       <button className="btn-primary">Purchase Package</button>
//     </div>
//   );
// };

// export default PackageDetailsPage;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// // Mock data for simplicity
// const packages = [
//   {
//     id: "1",
//     name: "Basic Daily Package",
//     description: "Best for short trips.",
//     price: "70 MAD",
//     includedKm: "20 km",
//     normalPrice: "70 MAD",
//     vipPrice: "140 MAD",
//     coJointPrice: "40 MAD/person",
//     category: "Daily",
//   },
//   {
//     id: "2",
//     name: "Extended Daily Package",
//     description: "Ideal for longer routes.",
//     price: "170 MAD",
//     includedKm: "50 km",
//     normalPrice: "170 MAD",
//     vipPrice: "350 MAD",
//     coJointPrice: "100 MAD/person",
//     category: "Daily",
//   },
//   {
//     id: "3",
//     name: "Normal Monthly Package",
//     description: "Ideal for regular commuters.",
//     price: "1600 MAD/month",
//     includedKm: "500 km",
//     normalPrice: "1600 MAD/month",
//     vipPrice: "3200 MAD/month",
//     coJointPrice: "900 MAD/month/person",
//     category: "Monthly",
//   },
//   {
//     id: "4",
//     name: "VIP Monthly Package",
//     description: "For those seeking luxury and comfort.",
//     price: "3200 MAD/month",
//     includedKm: "500 km",
//     normalPrice: "3200 MAD/month",
//     vipPrice: "6400 MAD/month",
//     coJointPrice: "1500 MAD/month/person",
//     category: "Monthly",
//   },
//   {
//     id: "5",
//     name: "Normal Yearly Package",
//     description: "Ideal for long-term use.",
//     price: "18000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "18000 MAD/year",
//     vipPrice: "36000 MAD/year",
//     coJointPrice: "10800 MAD/year/person",
//     category: "Yearly",
//   },
//   {
//     id: "6",
//     name: "VIP Yearly Package",
//     description: "Maximum savings with luxury rides.",
//     price: "36000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "36000 MAD/year",
//     vipPrice: "72000 MAD/year",
//     coJointPrice: "21600 MAD/year/person",
//     category: "Yearly",
//   },
// ];

// const PackageDetailsPage = () => {
//   const { id } = useParams(); // Get the package id from the URL
//   const [packageData, setPackageData] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//   });

//   useEffect(() => {
//     const fetchedPackage = packages.find((pkg) => pkg.id === id);
//     setPackageData(fetchedPackage);
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Combine package details and form data for submission
//     const submissionData = {
//       ...packageData,
//       client_full_name: formData.fullName,
//       email_address: formData.email,
//       phone_number: formData.phone,
//     };

//     console.log("Submitted Data:", submissionData);
//     // You can now send this data to your backend API for processing.
//   };

//   if (!packageData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="package-details">
//       <h2>{packageData.name} Details</h2>
//       <p>{packageData.description}</p>
//       <p><strong>Price: </strong>{packageData.price}</p>

//       <div className="package-info">
//         <ul>
//           <li><strong>Included km: </strong>{packageData.includedKm}</li>
//           <li><strong>Normal Ride: </strong>{packageData.normalPrice}</li>
//           <li><strong>VIP Ride: </strong>{packageData.vipPrice}</li>
//           <li><strong>Co-joint Ride: </strong>{packageData.coJointPrice}</li>
//         </ul>
//       </div>

//       {/* Form for Client Information */}
//       <form onSubmit={handleFormSubmit} className="client-info-form">
//         <h3>Client Information</h3>
        
//         <div className="form-group">
//           <label htmlFor="fullName">Full Name</label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleInputChange}
//             required
//             placeholder="Enter your full name"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             placeholder="Enter your email"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="phone">Phone Number</label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             required
//             placeholder="Enter your phone number"
//           />
//         </div>

//         <button type="submit" className="btn-primary">Submit Information and Purchase</button>
//       </form>
//     </div>
//   );
// };

// export default PackageDetailsPage;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// // Mock data for simplicity, similar to the one in PackagesPage.jsx
// const packages = [
//   {
//     id: "1",
//     name: "Basic Daily Package",
//     description: "Best for short trips.",
//     price: "70 MAD",
//     includedKm: "20 km",
//     normalPrice: "70 MAD",
//     vipPrice: "140 MAD",
//     coJointPrice: "40 MAD/person",
//     category: "Daily",
//   },
//   {
//     id: "2",
//     name: "Extended Daily Package",
//     description: "Ideal for longer routes.",
//     price: "170 MAD",
//     includedKm: "50 km",
//     normalPrice: "170 MAD",
//     vipPrice: "350 MAD",
//     coJointPrice: "100 MAD/person",
//     category: "Daily",
//   },
//   {
//     id: "3",
//     name: "Normal Monthly Package",
//     description: "Ideal for regular commuters.",
//     price: "1600 MAD/month",
//     includedKm: "500 km",
//     normalPrice: "1600 MAD/month",
//     vipPrice: "3200 MAD/month",
//     coJointPrice: "900 MAD/month/person",
//     category: "Monthly",
//   },
//   {
//     id: "4",
//     name: "VIP Monthly Package",
//     description: "For those seeking luxury and comfort.",
//     price: "3200 MAD/month",
//     includedKm: "500 km",
//     normalPrice: "3200 MAD/month",
//     vipPrice: "6400 MAD/month",
//     coJointPrice: "1500 MAD/month/person",
//     category: "Monthly",
//   },
//   {
//     id: "5",
//     name: "Normal Yearly Package",
//     description: "Ideal for long-term use.",
//     price: "18000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "18000 MAD/year",
//     vipPrice: "36000 MAD/year",
//     coJointPrice: "10800 MAD/year/person",
//     category: "Yearly",
//   },
//   {
//     id: "6",
//     name: "VIP Yearly Package",
//     description: "Maximum savings with luxury rides.",
//     price: "36000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "36000 MAD/year",
//     vipPrice: "72000 MAD/year",
//     coJointPrice: "21600 MAD/year/person",
//     category: "Yearly",
//   },
//   {
//     id: "7",
//     name: "VIP Yearly Package",
//     description: "Max savings, luxury car.",
//     price: "36000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "36000 MAD/year",
//     vipPrice: "72000 MAD/year",
//     coJointPrice: "21600 MAD/year/person",
//     category: "Yearly",
//   },
//   {
//     id: "8",
//     name: "Co-joint Yearly Package",
//     description: "Ideal for shared rides.",
//     price: "10800 MAD/year per person",
//     includedKm: "6000 km",
//     normalPrice: "10800 MAD/year per person",
//     vipPrice: "21600 MAD/year per person",
//     coJointPrice: "5400 MAD/year per person",
//     category: "Yearly",
//   },
// ];

// const PackageDetailsPage = () => {
//   const { id } = useParams(); // Get the package id from the URL
//   const [packageData, setPackageData] = useState(null);

//   useEffect(() => {
//     const fetchedPackage = packages.find((pkg) => pkg.id === id);
//     setPackageData(fetchedPackage);
//   }, [id]);

//   if (!packageData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="package-details">
//       <h2>{packageData.name} Details</h2>
//       <p>{packageData.description}</p>
//       <p>Price: {packageData.price}</p>
//       <ul>
//         <li>Included km: {packageData.includedKm}</li>
//         <li>Normal Ride: {packageData.normalPrice}</li>
//         <li>VIP Ride: {packageData.vipPrice}</li>
//         <li>Co-joint Ride: {packageData.coJointPrice}</li>
//       </ul>
//       <button>Purchase Package</button>
//     </div>
//   );
// };

// export default PackageDetailsPage;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// // Mock data for simplicity, similar to the one in PackagesPage.jsx
// const packages = [
//   {
//     id: "1",
//     name: "Basic Daily Package",
//     description: "Best for short trips.",
//     price: "70 MAD",
//     includedKm: "20 km",
//     normalPrice: "70 MAD",
//     vipPrice: "140 MAD",
//     coJointPrice: "40 MAD/person",
//     category: "Daily",
//   },
//   {
//     id: "2",
//     name: "Extended Daily Package",
//     description: "Ideal for longer routes.",
//     price: "170 MAD",
//     includedKm: "50 km",
//     normalPrice: "170 MAD",
//     vipPrice: "350 MAD",
//     coJointPrice: "100 MAD/person",
//     category: "Daily",
//   },
//   {
//     id: "3",
//     name: "Normal Monthly Package",
//     description: "Ideal for regular commuters.",
//     price: "1600 MAD/month",
//     includedKm: "500 km",
//     normalPrice: "1600 MAD/month",
//     vipPrice: "3200 MAD/month",
//     coJointPrice: "900 MAD/month/person",
//     category: "Monthly",
//   },
//   {
//     id: "4",
//     name: "VIP Monthly Package",
//     description: "For those seeking luxury and comfort.",
//     price: "3200 MAD/month",
//     includedKm: "500 km",
//     normalPrice: "3200 MAD/month",
//     vipPrice: "6400 MAD/month",
//     coJointPrice: "1500 MAD/month/person",
//     category: "Monthly",
//   },
//   {
//     id: "5",
//     name: "Normal Yearly Package",
//     description: "Ideal for long-term use.",
//     price: "18000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "18000 MAD/year",
//     vipPrice: "36000 MAD/year",
//     coJointPrice: "10800 MAD/year/person",
//     category: "Yearly",
//   },
//   {
//     id: "6",
//     name: "VIP Yearly Package",
//     description: "Maximum savings with luxury rides.",
//     price: "36000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "36000 MAD/year",
//     vipPrice: "72000 MAD/year",
//     coJointPrice: "21600 MAD/year/person",
//     category: "Yearly",
//   },
//   {
//     id: "7",
//     name: "VIP Yearly Package",
//     description: "Max savings, luxury car.",
//     price: "36000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "36000 MAD/year",
//     vipPrice: "72000 MAD/year",
//     coJointPrice: "21600 MAD/year/person",
//     category: "Yearly",
//   },
//   {
//     id: "8",
//     name: "Co-joint Yearly Package",
//     description: "Ideal for shared rides.",
//     price: "10800 MAD/year per person",
//     includedKm: "6000 km",
//     normalPrice: "10800 MAD/year per person",
//     vipPrice: "21600 MAD/year per person",
//     coJointPrice: "5400 MAD/year per person",
//     category: "Yearly",
//   },
// ];

// const PackageDetailsPage = () => {
//   const { id } = useParams(); // Get the package id from the URL
//   const [packageData, setPackageData] = useState(null);

//   useEffect(() => {
//     const fetchedPackage = packages.find((pkg) => pkg.id === id);
//     setPackageData(fetchedPackage);
//   }, [id]);

//   if (!packageData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="package-details">
//       <h2>{packageData.name} Details</h2>
//       <p>{packageData.description}</p>
//       <p>Price: {packageData.price}</p>
//       <ul>
//         <li>Included km: {packageData.includedKm}</li>
//         <li>Normal Ride: {packageData.normalPrice}</li>
//         <li>VIP Ride: {packageData.vipPrice}</li>
//         <li>Co-joint Ride: {packageData.coJointPrice}</li>
//       </ul>
//       <button>Purchase Package</button>
//     </div>
//   );
// };

// export default PackageDetailsPage;


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "../Styles/PackagePageDetails.css";  // Ensure this file exists for custom styling
// import { createClient } from "@supabase/supabase-js";
// // Mock data for simplicity, similar to the one in PackagesPage.jsx



// const packages = [
//   {
//     id: "1",
//     name: "Basic Daily Package",
//     description: "Best for short trips.",
//     price: "70 MAD",
//     includedKm: "20 km",
//     normalPrice: "70 MAD",
//     vipPrice: "140 MAD",
//     coJointPrice: "40 MAD/person",
//     category: "Daily",
//   },
//   {
//     id: "2",
//     name: "Extended Daily Package",
//     description: "Ideal for longer routes.",
//     price: "170 MAD",
//     includedKm: "50 km",
//     normalPrice: "170 MAD",
//     vipPrice: "350 MAD",
//     coJointPrice: "100 MAD/person",
//     category: "Daily",
//   },
//   {
//     id: "3",
//     name: "Normal Monthly Package",
//     description: "Ideal for regular commuters.",
//     price: "1600 MAD/month",
//     includedKm: "500 km",
//     normalPrice: "1600 MAD/month",
//     vipPrice: "3200 MAD/month",
//     coJointPrice: "900 MAD/month/person",
//     category: "Monthly",
//   },
//   {
//     id: "4",
//     name: "VIP Monthly Package",
//     description: "For those seeking luxury and comfort.",
//     price: "3200 MAD/month",
//     includedKm: "500 km",
//     normalPrice: "3200 MAD/month",
//     vipPrice: "6400 MAD/month",
//     coJointPrice: "1500 MAD/month/person",
//     category: "Monthly",
//   },
//   {
//     id: "5",
//     name: "Normal Yearly Package",
//     description: "Ideal for long-term use.",
//     price: "18000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "18000 MAD/year",
//     vipPrice: "36000 MAD/year",
//     coJointPrice: "10800 MAD/year/person",
//     category: "Yearly",
//   },
//   {
//     id: "6",
//     name: "VIP Yearly Package",
//     description: "Maximum savings with luxury rides.",
//     price: "36000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "36000 MAD/year",
//     vipPrice: "72000 MAD/year",
//     coJointPrice: "21600 MAD/year/person",
//     category: "Yearly",
//   },
//   {
//     id: "7",
//     name: "VIP Yearly Package",
//     description: "Max savings, luxury car.",
//     price: "36000 MAD/year",
//     includedKm: "6000 km",
//     normalPrice: "36000 MAD/year",
//     vipPrice: "72000 MAD/year",
//     coJointPrice: "21600 MAD/year/person",
//     category: "Yearly",
//   },
//   {
//     id: "8",
//     name: "Co-joint Yearly Package",
//     description: "Ideal for shared rides.",
//     price: "10800 MAD/year per person",
//     includedKm: "6000 km",
//     normalPrice: "10800 MAD/year per person",
//     vipPrice: "21600 MAD/year per person",
//     coJointPrice: "5400 MAD/year per person",
//     category: "Yearly",
//   },
// ];

// const PackageDetailsPage = () => {
//       const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
//             const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA';
//       const supabase = createClient(supabaseUrl, supabaseKey);
//   const { id } = useParams(); // Get the package id from the URL
//   const [packageData, setPackageData] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//   });
//   const navigate = useNavigate()

//   useEffect(() => {
//     const fetchedPackage = packages.find((pkg) => pkg.id === id);
//     setPackageData(fetchedPackage);
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Form submitted:", { ...formData, packageData });
// //     // Here you can handle form submission logic (e.g., API call)
// //   };

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!packageData) {
//       return;
//     }

//     // Prepare the data to be submitted
//     const submissionData = {
//       ...formData,  // User's personal info
//       packageId: packageData.id,  // Package ID
//       packageName: packageData.name,  // Package Name
//       packagePrice: packageData.price,  // Package Price
//       packageDescription: packageData.description,  // Package Description
//       packageCategory: packageData.category,  // Package Category
//       createdAt: new Date(),  // Timestamp for submission
//     };

//     try {
//       // Insert into Supabase (or your backend)
//       const { data, error } = await supabase
//         .from('package_submissions_choice') // Assuming you have a 'package_submissions' table
//         .insert([submissionData]);

//       if (error) {
//         console.error("Error inserting submission:", error);
//         alert("There was an error submitting your form.");
//       } else {
//         console.log("Form successfully submitted:", data);
//         // Redirect to a confirmation page or another page after success
//         navigate("/confirmation");  // Change to your confirmation route
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };


//   if (!packageData) {
//     return <div>Loading...</div>;
//   }

//     const handleGetStartedClick = () => {
//     navigate("/user_interface", { state: { registerActive: true } });
//   };


//   return (
//     <div className="package-details">
//       <h2>{packageData.name} Details</h2>
//       <p>{packageData.description}</p>
//       <p>Price: {packageData.price}</p>
//       <ul>
//         <li>Included km: {packageData.includedKm}</li>
//         <li>Normal Ride: {packageData.normalPrice}</li>
//         <li>VIP Ride: {packageData.vipPrice}</li>
//         <li>Co-joint Ride: {packageData.coJointPrice}</li>
//       </ul>

//       <form className="package-form" onSubmit={handleSubmit}>
//         <h3>Provide Your Details</h3>
//         <div className="form-group">
//           <label htmlFor="fullName">Full Name:</label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email Address:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <p className="NB-packageDetailsPage">must be registered to receive the credits directly to you account <a className="warning-package-details" onClick={handleGetStartedClick}>or register here</a></p>

//         <div className="form-group">
//           <label htmlFor="phone">Phone Number:</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default PackageDetailsPage;





import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/PackagePageDetails.css";  // Ensure this file exists for custom styling
import { createClient } from "@supabase/supabase-js";

// Mock data for simplicity, similar to the one in PackagesPage.jsx
const packages = [
  {
    id: "1",
    name: "Basic Daily Package",
    description: "Best for short trips.",
    price: "70 MAD",
    includedKm: "20 km",
    normalPrice: "70 MAD",
    vipPrice: "140 MAD",
    coJointPrice: "40 MAD/person",
    category: "Daily",
  },
  {
    id: "2",
    name: "Extended Daily Package",
    description: "Ideal for longer routes.",
    price: "170 MAD",
    includedKm: "50 km",
    normalPrice: "170 MAD",
    vipPrice: "350 MAD",
    coJointPrice: "100 MAD/person",
    category: "Daily",
  },
  {
    id: "3",
    name: "Normal Monthly Package",
    description: "Ideal for regular commuters.",
    price: "1600 MAD/month",
    includedKm: "500 km",
    normalPrice: "1600 MAD/month",
    vipPrice: "3200 MAD/month",
    coJointPrice: "900 MAD/month/person",
    category: "Monthly",
  },
  {
    id: "4",
    name: "VIP Monthly Package",
    description: "For those seeking luxury and comfort.",
    price: "3200 MAD/month",
    includedKm: "500 km",
    normalPrice: "3200 MAD/month",
    vipPrice: "6400 MAD/month",
    coJointPrice: "1500 MAD/month/person",
    category: "Monthly",
  },
  {
    id: "5",
    name: "Normal Yearly Package",
    description: "Ideal for long-term use.",
    price: "18000 MAD/year",
    includedKm: "6000 km",
    normalPrice: "18000 MAD/year",
    vipPrice: "36000 MAD/year",
    coJointPrice: "10800 MAD/year/person",
    category: "Yearly",
  },
  {
    id: "6",
    name: "VIP Yearly Package",
    description: "Maximum savings with luxury rides.",
    price: "36000 MAD/year",
    includedKm: "6000 km",
    normalPrice: "36000 MAD/year",
    vipPrice: "72000 MAD/year",
    coJointPrice: "21600 MAD/year/person",
    category: "Yearly",
  },
  {
    id: "7",
    name: "VIP Yearly Package",
    description: "Max savings, luxury car.",
    price: "36000 MAD/year",
    includedKm: "6000 km",
    normalPrice: "36000 MAD/year",
    vipPrice: "72000 MAD/year",
    coJointPrice: "21600 MAD/year/person",
    category: "Yearly",
  },
  {
    id: "8",
    name: "Co-joint Yearly Package",
    description: "Ideal for shared rides.",
    price: "10800 MAD/year per person",
    includedKm: "6000 km",
    normalPrice: "10800 MAD/year per person",
    vipPrice: "21600 MAD/year per person",
    coJointPrice: "5400 MAD/year per person",
    category: "Yearly",
  },
];
const PackageDetailsPage = () => {
  const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA';
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  const { id } = useParams(); // Get the package id from the URL
  const [packageData, setPackageData] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchedPackage = packages.find((pkg) => pkg.id === id);
    setPackageData(fetchedPackage);
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submission handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!packageData) {
//       return;
//     }

//     // Prepare the data to be submitted
//     const submissionData = {
//       ...formData,  // User's personal info
//       packageId: packageData.id,  // Package ID
//       packageName: packageData.name,  // Package Name
//       packagePrice: packageData.price,  // Package Price
//       packageDescription: packageData.description,  // Package Description
//       packageCategory: packageData.category,  // Package Category
      
//     };

//     try {
//       // Insert into Supabase (or your backend)
//       const { data, error } = await supabase
//         .from('package_submissions_choice') // Assuming you have a 'package_submissions' table
//         .insert([submissionData]);

//       if (error) {
//         console.error("Error inserting submission:", error);
//         alert("There was an error submitting your form.");
//       } else {
//         console.log("Form successfully submitted:", data);
//         // Redirect to a confirmation page or another page after success
//         navigate("/confirmation");  // Change to your confirmation route
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Collect necessary data for the insert
  const { fullName, email, phone } = formData;

  try {
    // Insert into package_submissions_choice with the correct column names
    const { data, error } = await supabase
      .from('package_submissions_choice')
      .insert([
        {
          package_id: packageData.id,  // Package ID
          full_name: fullName,          // Correct column name is `full_name`
          email: email,                // Email
          phone: phone,                // Phone number
        }
      ]);

    if (error) {
      throw new Error(error.message);
    }

    // Log the data or navigate
    console.log('Submission successful:', data);
    alert("your package credit is credited to your account")
    setTimeout(() => {
        navigate("/")
    }, 500)
    // Optionally redirect the user to a confirmation page or show a success message
  } catch (err) {
    console.error('Error inserting submission:', err);
  }
};


  const handleGetStartedClick = () => {
    navigate("/user_interface", { state: { registerActive: true } });
  };

  if (!packageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="package-details">
      <h2>{packageData.name} Details</h2>
      <p>{packageData.description}</p>
      <p>Price: {packageData.price}</p>
      <ul>
        <li>Included km: {packageData.includedKm}</li>
        <li>Normal Ride: {packageData.normalPrice}</li>
        <li>VIP Ride: {packageData.vipPrice}</li>
        <li>Co-joint Ride: {packageData.coJointPrice}</li>
      </ul>

      <form className="package-form" onSubmit={handleSubmit}>
        <h3>Provide Your Details</h3>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <p className="NB-packageDetailsPage">
          Must be registered to receive the credits directly to your account. 
          <a className="warning-package-details" onClick={handleGetStartedClick}>
            Register here
          </a>
        </p>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default PackageDetailsPage;
