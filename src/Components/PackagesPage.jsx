// import React from "react";
// import "../Styles/PackagesPage.css";
// import {Link} from "react-router-dom";
// import Logo from "./Logo.jsx"

// const PackagesPage = () => {
//   return (
//     <div className="packages-page">
//       {/* Header */}
//       <header className="packages-header">
//         <nav className="nav">
//           <div className="nav-logo">
//             <Logo/>
//           </div>
//           <ul className="nav-links">
//             <Link to="/" className="nav-links-lists">home</Link>
//             <li>How It Works</li>
//             {/* <li>Pricing</li> */}
//             <li className="active nav-links-lists">Packages</li>
//             <Link to="/About" className="nav-links-lists">
//                 About
//             </Link>
//           </ul>
//           <div className="nav-actions">
//             <Link to="/User_interface" className="nav-links-lists">
//                 Sign in
//             </Link>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="packages-content">
//         {/* <a href="/" className="back-link">← Back to Home</a> */}
//         <h2>Prepaid Credit Packages</h2>
//         <p className="subtitle">
//           Save more by purchasing daily, monthly, or yearly credits in advance
//         </p>

//         {/* Daily Credits */}
//         <section className="daily-credits">
//           <h3>Daily Prepaid Credits</h3>
//           <p>Valid for 24 hours</p>
//           <table className="credits-table">
//             <thead>
//               <tr>
//                 <th>Package</th>
//                 <th>Included km</th>
//                 <th>Normal Ride</th>
//                 <th>VIP Ride</th>
//                 <th>Co-joint Ride</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Basic<br /><small>Best for short trips</small></td>
//                 <td>20 km</td>
//                 <td>70 MAD</td>
//                 <td>140 MAD</td>
//                 <td>40 MAD/person</td>
//                 <td><button className="btn-table">Purchase</button></td>
//               </tr>
//               <tr>
//                 <td>Extended<br /><small>Ideal for longer routes</small></td>
//                 <td>50 km</td>
//                 <td>170 MAD</td>
//                 <td>350 MAD</td>
//                 <td>100 MAD/person</td>
//                 <td><button className="btn-table">Purchase</button></td>
//               </tr>
//             </tbody>
//           </table>
//         </section>

//         {/* Monthly Credits */}
//         <section className="monthly-credits">
//           <h3>Monthly Prepaid Credits</h3>
//           <p>Valid for 30 days - Best value for regular commuters</p>
//           <div className="package-cards">
//             <div className="package-card">
//               <h4>Normal Package</h4>
//               <p className="price">500km - 1600 MAD/month</p>
//               <ul>
//                 <li>🚗 Sedan, Hatchback, Electric Car</li>
//                 <li>✅ Perfect for daily campus commute</li>
//                 <li>✅ Flexible scheduling</li>
//               </ul>
//               <button className="btn-secondary">Purchase Package</button>
//             </div>
//             <div className="package-card popular">
//               <div className="tag">Popular</div>
//               <h4>VIP Package</h4>
//               <p className="price">3200 MAD/month</p>
//               <ul>
//                 <li>✨ Luxury Sedan, SUV</li>
//                 <li>✅ Priority service</li>
//                 <li>✅ Maximum comfort</li>
//               </ul>
//               <button className="btn-primary">Purchase Package</button>
//             </div>
//             <div className="package-card">
//               <h4>Co-joint Package</h4>
//               <p className="price">900 MAD/month per person</p>
//               <ul>
//                 <li>🚗 Sedan, Electric Car</li>
//                 <li>✅ Most affordable option</li>
//                 <li>✅ Eco-friendly carpooling</li>
//               </ul>
//               <button className="btn-secondary">Purchase Package</button>
//             </div>
//           </div>
//         </section>

//         {/* Yearly Credits */}
//         <section className="yearly-credits">
//           <h3>Yearly Prepaid Credits</h3>
//           <p>Valid for 365 days - Maximum savings</p>
//           <div className="package-cards">
//             <div className="package-card">
//               <h4>Normal Package</h4>
//               <p className="price">6000km - 18000 MAD/year</p>
//               <p className="save-tag green">Save up to 20% annually</p>
//               <button className="btn-secondary">Purchase Package</button>
//             </div>
//             <div className="package-card popular">
//               <h4>VIP Package</h4>
//               <p className="price">36000 MAD/year</p>
//               <p className="save-tag blue">Save up to 25% annually</p>
//               <button className="btn-primary">Purchase Package</button>
//             </div>
//             <div className="package-card">
//               <h4>Co-joint Package</h4>
//               <p className="price">10800 MAD/year per person</p>
//               <p className="save-tag orange">Save up to 30% annually</p>
//               <button className="btn-secondary">Purchase Package</button>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-about">
//           {/* <h3 className="Packages-page-footerLogo">{Logo}</h3> */}
//           <div className="logo">
//                   <Logo />
//                 </div>
//           <p className="footer-about-quote">Smart collective transport for students and travelers across Morocco.</p>
//           <div className="social-icons">
//             <i className="fab fa-facebook"></i>
//             <i className="fab fa-twitter"></i>
//             <i className="fab fa-linkedin"></i>
//           </div>
//         </div>

//         <div className="newsLetterSection">
//           <div className="quick-links">
//             <h4>Quick Links</h4>
//             <ul>
//               <li>Home</li>
//               <li>How It Works</li>
//               <li>Pricing</li>
//               <li>Packages</li>
//               <li>About Us</li>
//             </ul>
//           </div>

//           <div className="support">
//             <h4>Support</h4>
//             <ul>
//               <li>Help Center</li>
//               <li>Safety Guidelines</li>
//               <li>Terms of Service</li>
//               <li>Privacy Policy</li>
//               <li>FAQs</li>
//             </ul>
//           </div>

//           <div className="stay-connected">
//             <h4>Stay Connected</h4>
//             <p>📞 +212 620 000 000</p>
//             <p>📍 Tamesna, Morocco</p>
//             <form className="newsletter-form">
//               <input type="email" placeholder="Your email" />
//               <button type="submit" className="btn-primary">Subscribe</button>
//             </form>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p>© 2025 Find Transportation. All rights reserved.</p>
//           <div className="footer-links">
//             <a href="#">Accessibility</a>
//             <a href="#">Sitemap</a>
//             <a href="#">Cookie Policy</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PackagesPage;



// import React from "react";
// import "../Styles/PackagesPage.css";
// import { Link } from "react-router-dom";
// import Logo from "./Logo.jsx";

// const PackagesPage = () => {
//   return (
//     <div className="packages-page">
//       {/* Header */}
//       <header className="packages-header">
//         <nav className="nav">
//           <div className="nav-logo">
//             <Logo />
//           </div>
//           <ul className="nav-links">
//             <Link to="/" className="nav-links-lists">home</Link>
//             <li>How It Works</li>
//             <li className="active nav-links-lists">Packages</li>
//             <Link to="/About" className="nav-links-lists">
//               About
//             </Link>
//           </ul>
//           <div className="nav-actions">
//             <Link to="/User_interface" className="nav-links-lists">
//               Sign in
//             </Link>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="packages-content">
//         <h2>Prepaid Credit Packages</h2>
//         <p className="subtitle">
//           Save more by purchasing daily, monthly, or yearly credits in advance
//         </p>

//         {/* Daily Credits */}
//         <section className="daily-credits">
//           <h3>Daily Prepaid Credits</h3>
//           <p>Valid for 24 hours</p>
//           <table className="credits-table">
//             <thead>
//               <tr>
//                 <th>Package</th>
//                 <th>Included km</th>
//                 <th>Normal Ride</th>
//                 <th>VIP Ride</th>
//                 <th>Co-joint Ride</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Basic<br /><small>Best for short trips</small></td>
//                 <td>20 km</td>
//                 <td>70 MAD</td>
//                 <td>140 MAD</td>
//                 <td>40 MAD/person</td>
//                 <td><Link to="/package/1"><button className="btn-table">View Details</button></Link></td>
//               </tr>
//               <tr>
//                 <td>Extended<br /><small>Ideal for longer routes</small></td>
//                 <td>50 km</td>
//                 <td>170 MAD</td>
//                 <td>350 MAD</td>
//                 <td>100 MAD/person</td>
//                 <td><Link to="/package/2"><button className="btn-table">View Details</button></Link></td>
//               </tr>
//             </tbody>
//           </table>
//         </section>

//         {/* Monthly Credits */}
//         <section className="monthly-credits">
//           <h3>Monthly Prepaid Credits</h3>
//           <p>Valid for 30 days - Best value for regular commuters</p>
//           <div className="package-cards">
//             <div className="package-card">
//               <h4>Normal Package</h4>
//               <p className="price">500km - 1600 MAD/month</p>
//               <ul>
//                 <li>🚗 Sedan, Hatchback, Electric Car</li>
//                 <li>✅ Perfect for daily campus commute</li>
//                 <li>✅ Flexible scheduling</li>
//               </ul>
//               <Link to="/package/3"><button className="btn-secondary">View Details</button></Link>
//             </div>
//             <div className="package-card popular">
//               <div className="tag">Popular</div>
//               <h4>VIP Package</h4>
//               <p className="price">3200 MAD/month</p>
//               <ul>
//                 <li>✨ Luxury Sedan, SUV</li>
//                 <li>✅ Priority service</li>
//                 <li>✅ Maximum comfort</li>
//               </ul>
//               <Link to="/package/4"><button className="btn-primary">View Details</button></Link>
//             </div>
//             <div className="package-card">
//               <h4>Co-joint Package</h4>
//               <p className="price">900 MAD/month per person</p>
//               <ul>
//                 <li>🚗 Sedan, Electric Car</li>
//                 <li>✅ Most affordable option</li>
//                 <li>✅ Eco-friendly carpooling</li>
//               </ul>
//               <Link to="/package/5"><button className="btn-secondary">View Details</button></Link>
//             </div>
//           </div>
//         </section>

//         {/* Yearly Credits */}
//         <section className="yearly-credits">
//           <h3>Yearly Prepaid Credits</h3>
//           <p>Valid for 365 days - Maximum savings</p>
//           <div className="package-cards">
//             <div className="package-card">
//               <h4>Normal Package</h4>
//               <p className="price">6000km - 18000 MAD/year</p>
//               <p className="save-tag green">Save up to 20% annually</p>
//               <Link to="/package/6"><button className="btn-secondary">View Details</button></Link>
//             </div>
//             <div className="package-card popular">
//               <h4>VIP Package</h4>
//               <p className="price">36000 MAD/year</p>
//               <p className="save-tag blue">Save up to 25% annually</p>
//               <Link to="/package/7"><button className="btn-primary">View Details</button></Link>
//             </div>
//             <div className="package-card">
//               <h4>Co-joint Package</h4>
//               <p className="price">10800 MAD/year per person</p>
//               <p className="save-tag orange">Save up to 30% annually</p>
//               <Link to="/package/8"><button className="btn-secondary">View Details</button></Link>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-about">
//           <div className="logo">
//             <Logo />
//           </div>
//           <p className="footer-about-quote">Smart collective transport for students and travelers across Morocco.</p>
//           <div className="social-icons">
//             <i className="fab fa-facebook"></i>
//             <i className="fab fa-twitter"></i>
//             <i className="fab fa-linkedin"></i>
//           </div>
//         </div>

//         <div className="newsLetterSection">
//           <div className="quick-links">
//             <h4>Quick Links</h4>
//             <ul>
//               <li>Home</li>
//               <li>How It Works</li>
//               <li>Pricing</li>
//               <li>Packages</li>
//               <li>About Us</li>
//             </ul>
//           </div>

//           <div className="support">
//             <h4>Support</h4>
//             <ul>
//               <li>Help Center</li>
//               <li>Safety Guidelines</li>
//               <li>Terms of Service</li>
//               <li>Privacy Policy</li>
//               <li>FAQs</li>
//             </ul>
//           </div>

//           <div className="stay-connected">
//             <h4>Stay Connected</h4>
//             <p>📞 +212 620 000 000</p>
//             <p>📍 Tamesna, Morocco</p>
//             <form className="newsletter-form">
//               <input type="email" placeholder="Your email" />
//               <button type="submit" className="btn-primary">Subscribe</button>
//             </form>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p>© 2025 Find Transportation. All rights reserved.</p>
//           <div className="footer-links">
//             <a href="#">Accessibility</a>
//             <a href="#">Sitemap</a>
//             <a href="#">Cookie Policy</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PackagesPage;


// import React from "react";
// import { Link } from "react-router-dom";
// import "../Styles/PackagesPage.css";
// import Logo from "./Logo.jsx";

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

// const PackagesPage = () => {
//   return (
//     <div className="packages-page">
//       {/* Header */}
//       <header className="packages-header">
//         <nav className="nav">
//           <div className="nav-logo">
//             <Logo />
//           </div>
//           <ul className="nav-links">
//             <Link to="/" className="nav-links-lists">
//               Home
//             </Link>
//             <li>How It Works</li>
//             <li className="active nav-links-lists">Packages</li>
//             <Link to="/About" className="nav-links-lists">
//               About
//             </Link>
//           </ul>
//           <div className="nav-actions">
//             <Link to="/User_interface" className="nav-links-lists">
//               Sign in
//             </Link>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="packages-content">
//         <h2>Prepaid Credit Packages</h2>
//         <p className="subtitle">
//           Save more by purchasing daily, monthly, or yearly credits in advance
//         </p>

//         {/* Daily Credits */}
//         <section className="daily-credits">
//           <h3>Daily Prepaid Credits</h3>
//           <p>Valid for 24 hours</p>
//           <div className="package-cards">
//             {packages
//               .filter((pkg) => pkg.category === "Daily")
//               .map((pkg) => (
//                 <div className="package-card" key={pkg.id}>
//                   <h4>{pkg.name}</h4>
//                   <p className="price">{pkg.price}</p>
//                   <ul>
//                     <li>🚗 Normal Ride: {pkg.normalPrice}</li>
//                     <li>✨ VIP Ride: {pkg.vipPrice}</li>
//                     <li>✅ Co-joint Ride: {pkg.coJointPrice}</li>
//                   </ul>
//                   <Link to={`/package/${pkg.id}`} className="btn-secondary">
//                     View Details
//                   </Link>
//                 </div>
//               ))}
//           </div>
//         </section>

//         {/* Monthly Credits */}
//         <section className="monthly-credits">
//           <h3>Monthly Prepaid Credits</h3>
//           <p>Valid for 30 days - Best value for regular commuters</p>
//           <div className="package-cards">
//             {packages
//               .filter((pkg) => pkg.category === "Monthly")
//               .map((pkg) => (
//                 <div className="package-card" key={pkg.id}>
//                   <h4>{pkg.name}</h4>
//                   <p className="price">{pkg.price}</p>
//                   <ul>
//                     <li>🚗 Normal Ride: {pkg.normalPrice}</li>
//                     <li>✨ VIP Ride: {pkg.vipPrice}</li>
//                     <li>✅ Co-joint Ride: {pkg.coJointPrice}</li>
//                   </ul>
//                   <Link to={`/package/${pkg.id}`} className="btn-secondary">
//                     View Details
//                   </Link>
//                 </div>
//               ))}
//           </div>
//         </section>

//         {/* Yearly Credits */}
//         <section className="yearly-credits">
//           <h3>Yearly Prepaid Credits</h3>
//           <p>Valid for 365 days - Maximum savings</p>
//           <div className="package-cards">
//             {packages
//               .filter((pkg) => pkg.category === "Yearly")
//               .map((pkg) => (
//                 <div className="package-card" key={pkg.id}>
//                   <h4>{pkg.name}</h4>
//                   <p className="price">{pkg.price}</p>
//                   <ul>
//                     <li>🚗 Normal Ride: {pkg.normalPrice}</li>
//                     <li>✨ VIP Ride: {pkg.vipPrice}</li>
//                     <li>✅ Co-joint Ride: {pkg.coJointPrice}</li>
//                   </ul>
//                   <Link to={`/package/${pkg.id}`} className="btn-secondary">
//                     View Details
//                   </Link>
//                 </div>
//               ))}
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-about">
//           <div className="logo">
//             <Logo />
//           </div>
//           <p className="footer-about-quote">
//             Smart collective transport for students and travelers across Morocco.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PackagesPage;



// import React from "react";
// import { Link } from "react-router-dom";
// import "../Styles/PackagesPage.css";
// import Logo from "./Logo.jsx";

// // Mock packages data for simplicity
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

// const PackagesPage = () => {
//   return (
//     <div className="packages-page">
//       {/* Header */}
//       <header className="packages-header">
//         <nav className="nav">
//           <div className="nav-logo">
//             <Logo />
//           </div>
//           <ul className="nav-links">
//             <Link to="/" className="nav-links-lists">
//               Home
//             </Link>
//             <li>How It Works</li>
//             <li className="active nav-links-lists">Packages</li>
//             <Link to="/About" className="nav-links-lists">
//               About
//             </Link>
//           </ul>
//           <div className="nav-actions">
//             <Link to="/User_interface" className="nav-links-lists">
//               Sign in
//             </Link>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="packages-content">
//         <h2>Prepaid Credit Packages</h2>
//         <p className="subtitle">
//           Save more by purchasing daily, monthly, or yearly credits in advance
//         </p>

//         {/* Daily Credits */}
//         <section className="daily-credits">
//           <h3>Daily Prepaid Credits</h3>
//           <p>Valid for 24 hours</p>
//           <div className="package-cards">
//             {packages
//               .filter((pkg) => pkg.category === "Daily")
//               .map((pkg) => (
//                 <div className="package-card" key={pkg.id}>
//                   <h4>{pkg.name}</h4>
//                   <p className="price">{pkg.price}</p>
//                   <ul>
//                     <li>🚗 Normal Ride: {pkg.normalPrice}</li>
//                     <li>✨ VIP Ride: {pkg.vipPrice}</li>
//                     <li>✅ Co-joint Ride: {pkg.coJointPrice}</li>
//                   </ul>
//                   <Link to={`/package/${pkg.id}`} className="btn-secondary">
//                     View Details
//                   </Link>
//                 </div>
//               ))}
//           </div>
//         </section>

//         {/* Monthly Credits */}
//         <section className="monthly-credits">
//           <h3>Monthly Prepaid Credits</h3>
//           <p>Valid for 30 days - Best value for regular commuters</p>
//           <div className="package-cards">
//             {packages
//               .filter((pkg) => pkg.category === "Monthly")
//               .map((pkg) => (
//                 <div className="package-card" key={pkg.id}>
//                   <h4>{pkg.name}</h4>
//                   <p className="price">{pkg.price}</p>
//                   <ul>
//                     <li>🚗 Normal Ride: {pkg.normalPrice}</li>
//                     <li>✨ VIP Ride: {pkg.vipPrice}</li>
//                     <li>✅ Co-joint Ride: {pkg.coJointPrice}</li>
//                   </ul>
//                   <Link to={`/package/${pkg.id}`} className="btn-secondary">
//                     View Details
//                   </Link>
//                 </div>
//               ))}
//           </div>
//         </section>

//         {/* Yearly Credits */}
//         <section className="yearly-credits">
//           <h3>Yearly Prepaid Credits</h3>
//           <p>Valid for 365 days - Maximum savings</p>
//           <div className="package-cards">
//             {packages
//               .filter((pkg) => pkg.category === "Yearly")
//               .map((pkg) => (
//                 <div className="package-card" key={pkg.id}>
//                   <h4>{pkg.name}</h4>
//                   <p className="price">{pkg.price}</p>
//                   <ul>
//                     <li>🚗 Normal Ride: {pkg.normalPrice}</li>
//                     <li>✨ VIP Ride: {pkg.vipPrice}</li>
//                     <li>✅ Co-joint Ride: {pkg.coJointPrice}</li>
//                   </ul>
//                   <Link to={`/package/${pkg.id}`} className="btn-secondary">
//                     View Details
//                   </Link>
//                 </div>
//               ))}
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-about">
//           <div className="logo">
//             <Logo />
//           </div>
//           <p className="footer-about-quote">
//             Smart collective transport for students and travelers across Morocco.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PackagesPage;


import React from "react";
import {useState} from "react"
import "../Styles/PackagesPage.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";
import dropdown_menu from "./images/menu_dropdown_1.png"

const PackagesPage = () => {
  const navigate = useNavigate()
   const [isNavActive, setIsNavActive] = useState(false);

 const handleNavDropdown = () => {
    // Toggle the nav bar visibility on small screens
    setIsNavActive((prevState) => !prevState);
  };
   const handleGetStartedClick = () => {

    navigate("/user_interface", { state: { registerActive: true } });
  };

  const handleSignIn = () => {
    navigate("/user_interface", { state: { loginActive: true } });
  };
  return (
    <div className="packages-page">
      {/* Header */}
      <header className="packages-header">
        {/* <nav className="nav">
          <div className="nav-logo">
            <Logo />
          </div>
          
          <ul className="nav-links nav-links-dropdown">
            <Link to="/" className="nav-links-lists">Home</Link>
            <li>How It Works</li>
            <li className="active nav-links-lists">Packages</li>
            <Link to="/About" className="nav-links-lists">About</Link>
          </ul>
          <div className="nav-actions">
            <button  className="btn btn-signin" onClick={handleSignIn}>Sign in</button>
            <button className="btn btn-primary getstarted-packages" onClick={handleGetStartedClick}>Get Started</button>
          </div>
        </nav> */}


          {/* <nav className="nav">
     
      <div className="nav-logo">
        <Logo />
        <img
          src={dropdown_menu}
          alt="menu"
          className="dropdown1"
          onClick={handleNavDropdown}
        />
      </div>

      
      <ul className={`nav-links nav-links-dropdown ${isNavActive ? "active" : ""}`}>
        <Link to="/" className="nav-links-lists">Home</Link>
        <li>How It Works</li>
        <li className="active nav-links-lists">Packages</li>
        <Link to="/About" className="nav-links-lists">About</Link>
      </ul>

      
      <div className="nav-actions">
        <button className="btn-signin-packages packages-actions" onClick={handleSignIn}>Sign in</button>
        <button
          className="getstarted-packages packages-actions"
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </div>
    </nav> */}


    {/* <nav className="nav">
     
      <div className="nav-logo">
        <Logo />
        <img
          src={dropdown_menu}
          alt="menu"
          className="dropdown1"
          onClick={handleNavDropdown}
        />
      </div>

      
      <div className={`nav-links-dropdown  ${isNavActive ? "active" : ""}`}>
      <ul className="nav-links">
        <Link to="/" className="nav-links-lists">Home</Link>
        <li>How It Works</li>
        <li className="active nav-links-lists">Packages</li>
        <Link to="/About" className="nav-links-lists">About</Link>
      </ul>

      
      <div className="nav-links">
        <button
          className="btn-signin-packages packages-actions"
          onClick={handleSignIn}
        >
          Sign in
        </button>
        <button
          className="getstarted-packages packages-actions"
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </div>
      </div>
    </nav> */}

    {/* <nav className="nav">
      
      <div className="nav-logo">
        <Logo />
        <img
          src={dropdown_menu}
          alt="menu"
          className="dropdown1"
          onClick={handleNavDropdown}
        />
      </div>

      
      <div className={`nav-links-dropdown ${isNavActive ? "active" : ""}`}>
        <ul className="nav-links">
          <Link to="/" className="nav-links-lists">Home</Link>
          <li>How It Works</li>
          <li className="active nav-links-lists">Packages</li>
          <Link to="/About" className="nav-links-lists">About</Link>
        </ul>

        <div className="nav-links">
          <button
            className="btn-signin-packages packages-actions"
            onClick={handleSignIn}
          >
            Sign in
          </button>
          <button
            className="getstarted-packages packages-actions"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav> */}

     <nav className="nav">
      {/* === Logo + dropdown icon === */}
      <div className="nav-logo LP-navList-left">
        <Logo />
        <img
          src={dropdown_menu}
          alt="menu"
          className="dropdown1"
          onClick={handleNavDropdown}
        />
      </div>

      {/* === Nav links & buttons wrapper === */}
      <div className={`nav-links-dropdown ${isNavActive ? "active" : ""}`}>
        <ul className="nav-links">
          <Link to="/" className="nav-links-lists">Home</Link>
          <li>How It Works</li>
          <li className="active nav-links-lists">Packages</li>
          <Link to="/About" className="nav-links-lists">About</Link>
        </ul>

        <div className="nav-links">
          <button
            className="btn-signin-packages packages-actions"
            onClick={handleSignIn}
          >
            Sign in
          </button>
          <button
            className="getstarted-packages packages-actions"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
      </header>

      {/* Main Content */}
      <main className="packages-content">
        <h2>Prepaid Credit Packages</h2>
        <p className="subtitle">
          Save more by purchasing daily, monthly, or yearly credits in advance
        </p>

        {/* Daily Credits */}
        <section className="daily-credits">
          <h3>Daily Prepaid Credits</h3>
          <p>Valid for 24 hours</p>
          
          <table className="credits-table">
            <thead>
              <tr>
                <th>Package</th>
                <th>Included km</th>
                <th>Normal Ride</th>
                <th>VIP Ride</th>
                <th>Co-joint Ride</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* Package rows */}
              <tr>
                <td>Basic<br /><small>Best for short trips</small></td>
                <td>20 km</td>
                <td>70 MAD</td>
                <td>140 MAD</td>
                <td>40 MAD/person</td>
                <td>
                  <Link to="/package/1" className="btn-table">View Details</Link>
                </td>
              </tr>
              <tr>
                <td>Extended<br /><small>Ideal for longer routes</small></td>
                <td>50 km</td>
                <td>170 MAD</td>
                <td>350 MAD</td>
                <td>100 MAD/person</td>
                <td>
                  <Link to="/package/2" className="btn-table">View Details</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Monthly Credits */}
        <section className="monthly-credits">
          <h3>Monthly Prepaid Credits</h3>
          <p>Valid for 30 days - Best value for regular commuters</p>
          <div className="package-cards">
            <div className="package-card">
              <h4>Normal Package</h4>
              <p className="price">500km - 1600 MAD/month</p>
              <ul>
                <li>🚗 Sedan, Hatchback, Electric Car</li>
                <li>✅ Perfect for daily campus commute</li>
                <li>✅ Flexible scheduling</li>
              </ul>
              <Link to="/package/3" className="btn-secondary package-action-btn">View Details</Link>
            </div>
            <div className="package-card popular">
              <div className="tag">Popular</div>
              <h4>VIP Package</h4>
              <p className="price">3200 MAD/month</p>
              <ul>
                <li>✨ Luxury Sedan, SUV</li>
                <li>✅ Priority service</li>
                <li>✅ Maximum comfort</li>
              </ul>
              <Link to="/package/4" className="btn-primary package-action-btn">View Details</Link>
            </div>
            <div className="package-card">
              <h4>Co-joint Package</h4>
              <p className="price">900 MAD/month per person</p>
              <ul>
                <li>🚗 Sedan, Electric Car</li>
                <li>✅ Most affordable option</li>
                <li>✅ Eco-friendly carpooling</li>
              </ul>
              <Link to="/package/5" className="btn-secondary package-action-btn">View Details</Link>
            </div>
          </div>
        </section>

        {/* Yearly Credits */}
        <section className="yearly-credits">
          <h3>Yearly Prepaid Credits</h3>
          <p>Valid for 365 days - Maximum savings</p>
          <div className="package-cards">
            <div className="package-card">
              <h4>Normal Package</h4>
              <p className="price">6000km - 18000 MAD/year</p>
              <p className="save-tag green">Save up to 20% annually</p>
              <Link to="/package/6" className="btn-secondary package-action-btn">View Details</Link>
            </div>
            <div className="package-card popular">
              <h4>VIP Package</h4>
              <p className="price">36000 MAD/year</p>
              <p className="save-tag blue">Save up to 25% annually</p>
              <Link to="/package/7" className="btn-primary package-action-btn">View Details</Link>
            </div>
            <div className="package-card">
              <h4>Co-joint Package</h4>
              <p className="price">10800 MAD/year per person</p>
              <p className="save-tag orange">Save up to 30% annually</p>
              <Link to="/package/8" className="btn-secondary package-action-btn">View Details</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-about">
          <div className="logo">
            <Logo />
          </div>
          <p className="footer-about-quote">
            Smart collective transport for students and travelers across Morocco.
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        <div className="newsLetterSection">
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              
                        <Link to="/">Home</Link>
                        <Link to="#">How It Works</Link>
                        <Link to="/Available_packages">Pricing</Link>
                        <Link className="handle-cheffaur-tag" to="/registerDriver">devenez vous cheffaur ?</Link>
                        <Link to="/About">About</Link>
            </ul>
          </div>

          <div className="support">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Safety Guidelines</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="stay-connected">
            <h4>Stay Connected</h4>
            <p>📞 +212 620 000 000</p>
            <p>📍 Tamesna, Morocco</p>
           
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Find Transportation. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Accessibility</a>
            <a href="#">Sitemap</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PackagesPage;
