
import React, { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Logo from "./Logo.jsx";
import "../Styles/Landing_page_test.css";
import {Link, useNavigate} from "react-router-dom";
import profile from "./images/profile.png";
import rideshare from "./images/rideshare.png";
import schedule from "./images/schedule.png";
import maplocation from "./images/map-location.png";

const Landing_page1 = () => {
    const navigate = useNavigate()
      const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    date: null,
    time: "",
    rideType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const RedirecttoSearchResultPage = () => {
  //   navigate("/SearchResult", { state: formData });
  // };

  const RedirecttoSearchResultPage = () => {
  const formattedDate = formData.date 
    ? formData.date.toISOString().slice(0, 10) // "YYYY-MM-DD"
    : "";

  navigate("/SearchResult", { 
    state: { 
      ...formData, 
      date: formattedDate 
    } 
  });
};

 const handleGetStartedClick = () => {
    navigate("/user_interface", { state: { registerActive: true } });
  };

    
    return (
        <>  

            <div className="Landing_pageWrapper">
                {/* navigation */}
                <nav>
                       <ul className="LP-navList LP-navList-left">
                            <li className="LP-navList_Lists logo">
                                <Logo/>
                            </li>
                        </ul>

                        <ul className="LP-navList LP-navList-middle">
                               
                                <li className="LP-navList_Lists">
                                    How it Works                  
                                </li>
                              
                                <Link className="LP-navList_Lists" to="/Available_packages">
                                        Pricing
                                </Link>
                                {/* <li className="LP-navList_Lists">
                                    About
                                </li> */}
                                <Link className="LP-navList_Lists" to="/About">
                                    About
                                </Link>
                        </ul>


                        <ul className="LP-navList LP-navList-right">
                                    <Link to="/user_interface" className="LP-navList_Lists">
                                    Sign in
                                </Link>
                                <li className="LP-navList_Lists LP-navList-right-GetStarted" onClick={handleGetStartedClick}>
                                    Get Started
                                </li>

                        </ul> 
                </nav>

                    {/* main Section */}
                <div className="Landing_pageMainSection">
                    {/* section1 */}


                    <span className="LPMS-section section1">

                        <div className="LPMS-section1 box1">
                            <h3 className="LPMS_section1_box1_header1">
                                Student & Staff Transportation
                            </h3>
                            <p className="LPMS_section1_box1_header_paragraph1">
                                Smart Collective Transport for Your Campus Community

                            </p>
                            <p className="LPMS_section1_box1_paragraph1">
                                Plan your trips, find available transport options, 
                                and travel safely with fellow students and trainers.
                                 Pay with cash or card and enjoy affordable, 
                                 eco-friendly campus transportation.
                            </p>
                            <div className="LPMS_section1_box1_advantages">
                                    <span className="LPMS_section1_box1_advantages_item1">
                                            <img  src={rideshare} alt="item_image"  className="LPMS_section1_box1_items_image" />
                                            <p classname="LPMS_section1_box1_items_title">Shared Rides</p>
                                    </span>
                                    <span className="LPMS_section1_box1_advantages_item2">
                                                        <img  src={maplocation} alt="item_image"  className="LPMS_section1_box1_items_image" />
                                            <p classname="LPMS_section1_box1_items_title">Campus Routes</p>
                                    </span>
                                    <span className="LPMS_section1_box1_advantages_item3">
                                        <img  src={schedule} alt="item_image"  className="LPMS_section1_box1_items_image" />
                                            <p classname="LPMS_section1_box1_items_title">Flexible Scheduling</p>

                                    </span>
                            </div>
                        </div>
                        <div className="LPMS-section1 box2">
                            {/* <form action="" className="LPMS-section1_box2_item1">
                                <h3 className="LPMS-section1_box2_item1_title">Plan Your Trip</h3>

                                <div className="form-group-box2-item1">
                                    <label htmlFor="" className="form-label-box2-items">Departure Location</label>
                                    <input type="text" className="form-control-box2-items"  placeholder="Enter starting point"/>

                                </div>
                                 <div className="form-group-box2-item1">
                                    <label htmlFor="" className="form-label-box2-items">Destination</label>
                                    <input type="text" className="form-control-box2-items" placeholder="Enter destination"/>

                                </div>

                                 <div className="form-group-box2-item1">
                                    <div className="form-group-box2-item1_form-field1">
                                        <label htmlFor="date" className="form-group-box2-item1_form-field1_form_label">Date</label>
                                        <input type="date" id="date" name="date" className="form-group-box2-item1_form-field1_form_control"/>
                                    </div>

                                    <div className="form-group-box2-item1_form-field2">
                                        <label htmlFor="time" className="form-group-box2-item1_form-field2_from_label">Time</label>
                                        <input type="time" id="time" name="time" className="form-group-box2-item1_form-field2_from_control"/>
                                    </div>
                                </div>
                                 <div className="form-group-box2-item1">
                                    <select name="" id="" className="form-group-box2-item1-rideTypeSelect">
                                        <option value="" className="form-group-box2-item1-rideTypeSelect-option1" defaultValue disabled>your ride type</option>
                                        <option value="" className="form-group-box2-item1-rideTypeSelect-option1">normal</option>
                                        <option value="" className="form-group-box2-item1-rideTypeSelect-option2">vip</option>
                                        <option value="" className="form-group-box2-item1-rideTypeSelect-option3">co-joint</option>
                                    </select>

                                </div>
                                <button
  type="button"
  className="LPMS-section1_box2_search_submit_btn"
  onClick={RedirecttoSearchResultPage}
>
  Search Available Rides
</button>

                            </form> */}

                            <form className="LPMS-section1_box2_item1">
        <h3 className="LPMS-section1_box2_item1_title">Plan Your Trip</h3>

        <div className="form-group-box2-item1">
          <label className="form-label-box2-items">Departure Location</label>
          <input
            type="text"
            className="form-control-box2-items"
            placeholder="Enter starting point"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
          />
        </div>

        <div className="form-group-box2-item1">
          <label className="form-label-box2-items">Destination</label>
          <input
            type="text"
            className="form-control-box2-items"
            placeholder="Enter destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          />
        </div>

        <div className="form-group-box2-item1">
          <div className="form-group-box2-item1_form-field1">
            <label htmlFor="date" className="form-group-box2-item1_form-field1_form_label">Date</label>
            {/* <input
              type="date"
              id="date"
              name="date"
              className="form-group-box2-item1_form-field1_form_control"
              value={formData.date}
              onChange={handleChange}
            /> */}
            <DatePicker
  selected={formData.date}
  onChange={(date) => setFormData({ ...formData, date })}
  dateFormat="yyyy-MM-dd"
/>
          </div>

          <div className="form-group-box2-item1_form-field2">
            <label htmlFor="time" className="form-group-box2-item1_form-field2_from_label">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              className="form-group-box2-item1_form-field2_from_control"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group-box2-item1">
          <select
            name="rideType"
            value={formData.rideType}
            onChange={handleChange}
            className="form-group-box2-item1-rideTypeSelect"
          >
            <option value="" disabled>
              your ride type
            </option>
            <option value="normal">normal</option>
            <option value="vip">vip</option>
            <option value="co-joint">co-joint</option>
          </select>
        </div>

        <button
          type="button"
          className="LPMS-section1_box2_search_submit_btn"
          onClick={RedirecttoSearchResultPage}
        >
          Search Available Rides
        </button>
      </form>
                            <p className="LPMS-section1_box2_payment_quote">💳 Payment accepted: Cash or Card</p>
                        </div>

                    </span>


                        {/* Section2 */}

                    <span className="LPMS-section section2">
                        <div className="LPMS-section2 box1">
                            <h3 className="LPMS-section2-box1_title1">

                                How It Works
                            </h3>
                            <h3 className="LPMS-section2-box1_title2">
                                A simple, efficient solution designed specifically for student and staff transportation
                            </h3>

                        </div>
                        <div className="LPMS-section2 box2">
                            <span className="LPMS-section2_box2_1 LPMS-section2_box2_items">
                                {/* <img src="" alt="" className="LPMS-section2_box2_items_image" /> */}
                                <i className="bi bi-people LPMS-section2_box2_items_image"></i>
                                <h3 className="LPMS-section2_box2_items_title">Campus Community</h3>
                                <p className="LPMS-section2_box2_items_description">Connect with students and trainers from your institution for shared rides.</p>
                            </span>
                            <span className="LPMS-section2_box2_2 LPMS-section2_box2_items">
                                {/* <img src="" alt="" className="LPMS-section2_box2_items_image" /> */}
                                <i className="bi bi-geo-alt LPMS-section2_box2_items_image"></i>
                                <h3 className="LPMS-section2_box2_items_title">Easy Route Planning</h3>
                                <p className="LPMS-section2_box2_items_description">Search your route and instantly find all available transport options.</p>
                            </span>
                            <span className="LPMS-section2_box2_3 LPMS-section2_box2_items">
                                {/* <img src="" alt="" className="LPMS-section2_box2_items_image" /> */}
                                <i className="bi bi-file-lock2 LPMS-section2_box2_items_image"></i>
                                <h3 className="LPMS-section2_box2_items_title">Safe & Verified</h3>
                                <p className="LPMS-section2_box2_items_description">All users are verified members of your institution for maximum safety.</p>
                            </span>
                            <span className="LPMS-section2_box2_4 LPMS-section2_box2_items">
                                {/* <img src="" alt="" className="LPMS-section2_box2_items_image" /> */}
                                <i className="bi bi-credit-card LPMS-section2_box2_items_image"></i>
                                <h3 className="LPMS-section2_box2_items_title">Flexible Payment</h3>
                                <p className="LPMS-section2_box2_items_description">Get live updates on transport availability and departure times.</p>
                            </span>
                            <span className="LPMS-section2_box2_5 LPMS-section2_box2_items">
                                {/* <img src="" alt="" className="LPMS-section2_box2_items_image" /> */}
                                <i className="bi bi-clock LPMS-section2_box2_items_image"></i>
                                <h3 className="LPMS-section2_box2_items_title">Real-time Updates</h3>
                                <p className="LPMS-section2_box2_items_description">Connect with students and trainers from your institution for shared rides.</p>
                            </span>
                            <span className="LPMS-section2_box2_6 LPMS-section2_box2_items">
                                {/* <img src="" alt="" className="LPMS-section2_box2_items_image" /> */}
                                <i className="bi bi-phone LPMS-section2_box2_items_image"></i>
                                <h3 className="LPMS-section2_box2_items_title">Mobile & Desktop</h3>
                                <p className="LPMS-section2_box2_items_description">Access from any device - smartphone, tablet, or computer.</p>
                            </span>


                        </div>
                        <div className="LPMS-section2 box3">
                            <h3 className="LPMS-section2_box3_title">
                                    Your Journey in 4 Simple Steps
                            </h3>
                            <div className="LPMS-section2_box3_items">
                                    <span className="LPMS-section2_box3_item1">
                                        <h3 className="LPMS-section2_box3_items_number">
                                            1
                                        </h3>
                                        <h3 className="LPMS-section2_box3_items_title">
                                                Search Route
                                        </h3>
                                        <p className="LPMS-section2_box3_items_descritpion">
                                                Enter your departure and destination points
                                        </p>

                                    </span>

                                    <span className="LPMS-section2_box3_item1">
                                        <h3 className="LPMS-section2_box3_items_number">
                                            2
                                        </h3>
                                        <h3 className="LPMS-section2_box3_items_title">
                                                Choose Transport
                                        </h3>
                                        <p className="LPMS-section2_box3_items_descritpion">
                                               View and select from available transport options
                                        </p>

                                    </span>

                                    <span className="LPMS-section2_box3_item1">
                                        <h3 className="LPMS-section2_box3_items_number">
                                            3
                                        </h3>
                                        <h3 className="LPMS-section2_box3_items_title">
                                               Authenticate
                                        </h3>
                                        <p className="LPMS-section2_box3_items_descritpion">
                                                Sign in with your institution credentials
                                        </p>

                                    </span>

                                    <span className="LPMS-section2_box3_item1">
                                        <h3 className="LPMS-section2_box3_items_number">
                                            4
                                        </h3>
                                        <h3 className="LPMS-section2_box3_items_title">
                                                Pay & Go
                                        </h3>
                                        <p className="LPMS-section2_box3_items_descritpion">
                                                Pay via cash or card and head to the departure station
                                        </p>

                                    </span>
                            </div>
                        </div>

                        </span>

                        {/* section3 */}
                    <span className="LPMS-section section3">
                        <div className="LPMS-section3 box1">
                            <div className="LPMS-section3 box1">
                                <h3 className="LPMS-section3_title">Pay-As-You-Go Pricing</h3>
                                <p className="LPMS-section3_title_desctiption">Simple, transparent pricing based on distance traveled</p>
                             </div>
                        </div>
                        <div className="LPMS-section3 box2">
                                    {/* part1 */}
                                <div className="LPMS-section3_box2_items LPMS-section3_box2_items_part1">
                                        <span className="LPMS-section3_box2_items1">
                                            <h3 className="LPMS-section3_box2_items1_title">Normal Ride</h3>
                                            <h3 className="LPMS-section3_box2_items1_price">3.5 MAD/km</h3>
                                            <p className="LPMS-section3_box2_items1_description1">Standard single-person ride for campus travel</p>
                                        </span>
                                        <span className="LPMS-section3_box2_items2">
                                            <p className="LPMS-section3_box2_item2_vehicle_title">Vehicles:</p>
                                            <p className="LPMS-section3_box2_item2_vehicle_descritpion">Sedan, Hatchback, Electric Car</p>
                                        </span>
                                        <span className="LPMS-section3_box2_items3">
                                            <ul className="LPMS-section3_box2_items3_listDescription">
                                                <li className="LPMS-section3_box2_items3_listDescription_list">
                                                    {/* <img src="" alt="" className="LPMS-section3_box2_items3_list_checkbox" /> */}
                                                    ✅ Comfortable seating
                                                </li>
                                                <li className="LPMS-section3_box2_items3_listDescription_list">
                                                    {/* <img src="" alt="" className="LPMS-section3_box2_items3_list_checkbox" /> */}
                                                    ✅ Direct route
                                                </li>
                                                <li className="LPMS-section3_box2_items3_listDescription_list">
                                                    {/* <img src="" alt="" className="LPMS-section3_box2_items3_list_checkbox" /> */}
                                                    ✅ Standard service
                                                </li>
                                                <li className="LPMS-section3_box2_items3_listDescription_list">
                                                     {/* <img src="" alt="" className="LPMS-section3_box2_items3_list_checkbox" /> */}
                                                    ✅ Real-time tracking
                                                </li>
                                            </ul>
                                        </span>
                                        <button className="LPMS-section3_box2_items_part1_selectionBtn">Select Normal Ride</button>
                                </div>

                                    {/* part1 */}

                                    <div className="LPMS-section3_box2_items LPMS-section3_box2_items_part1">
                                        <span className="LPMS-section3_box2_items1">
                                            <h3 className="LPMS-section3_box2_items1_title">VIP Ride</h3>
                                            <h3 className="LPMS-section3_box2_items1_price">7 MAD/km</h3>
                                            <p className="LPMS-section3_box2_items1_description1">Premium private ride with enhanced comfort</p>
                                        </span>
                                        <span className="LPMS-section3_box2_items2">
                                            <p className="LPMS-section3_box2_item2_vehicle_title">Vehicles:</p>
                                            <p className="LPMS-section3_box2_item2_vehicle_descritpion">Luxury Sedan, SUV</p>
                                        </span>
                                        <span className="LPMS-section3_box2_items3">
                                            <ul className="LPMS-section3_box2_items3_listDescription">
                                                <li className="LPMS-section3_box2_items3_listDescription_list">
                                                    {/* <img src="" alt="" className="LPMS-section3_box2_items3_list_checkbox" /> */}
                                                    ✅ Premium vehicles
                                                </li>
                                                <li className="LPMS-section3_box2_items3_listDescription_list">
                                                    {/* <img src="" alt="" className="LPMS-section3_box2_items3_list_checkbox" /> */}
                                                    ✅ Priority service
                                                </li>
                                                <li className="LPMS-section3_box2_items3_listDescription_list">
                                                    {/* <img src="" alt="" className="LPMS-section3_box2_items3_list_checkbox" /> */}
                                                    ✅ Extra comfort
                                                </li>
                                                <li className="LPMS-section3_box2_items3_listDescription_list">
                                                     {/* <img src="" alt="" className="LPMS-section3_box2_items3_list_checkbox" /> */}
                                                    ✅ Professional drivers
                                                </li>
                                                 <li className="LPMS-section3_box2_items3_listDescription_list">
                                                     {/* <img src="" alt="" className="LPMS-section3_box2_items3_list_checkbox" /> */}
                                                    ✅ Climate control
                                                </li>
                                            </ul>
                                        </span>
                                        <button className="LPMS-section3_box2_items_part1_selectionBtn">Select VIP Ride</button>
                                </div>

                                {/* part3 */}       
                                        <div className="LPMS-section3_box2_items LPMS-section3_box2_items_part1">
                                        <span className="LPMS-section3_box2_items1">
                                            <h3 className="LPMS-section3_box2_items1_title">Co-joint (Shared)</h3>
                                            <h3 className="LPMS-section3_box2_items1_price">2 MAD/km per person</h3>
                                            <p className="LPMS-section3_box2_items1_description1">Affordable shared ride with up to 3 passengers</p>
                                        </span>
                                        <span className="LPMS-section3_box2_items2">
                                            <p className="LPMS-section3_box2_item2_vehicle_title">Vehicles:</p>
                                            <p className="LPMS-section3_box2_item2_vehicle_descritpion">Sedan, Electric Car</p>
                                        </span>
                                        <span className="LPMS-section3_box2_items3">
                                            <ul className="LPMS-section3_box2_items3_listDescription">
                                                <li className="LPMS-section3_box2_items3_listDescription_list">
                                                    {/* <img src="" alt="" className="LPMS-section3_box2_items3_list_checkbox" /> */}
                                                    ✅ Most affordable option
                                                </li>
                                                <li className="LPMS-section3_box2_items3_listDescription_list">
                                                    {/* <img src="" alt="" className="LPMS-section3_box2_items3_list_checkbox" /> */}
                                                    ✅ Eco-friendly
                                                </li>
                                                <li className="LPMS-section3_box2_items3_listDescription_list">
                                                    {/* <img src="" alt="" className="LPMS-section3_box2_items3_list_checkbox" /> */}
                                                    ✅ Meet fellow students
                                                </li>
                                                <li className="LPMS-section3_box2_items3_listDescription_list">
                                                     {/* <img src="" alt="" className="LPMS-section3_box2_items3_list_checkbox" /> */}
                                                    ✅ Similar routes
                                                </li>
                                               
                                            </ul>
                                        </span>
                                        <button className="LPMS-section3_box2_items_part1_selectionBtn">Select Co-joint (Shared)</button>
                                </div>

                        </div>
                        <div className="LPMS-section3 box3"></div>

                    </span>

                        {/* section4 */}
                    <span className="LPMS-section section4">
                             
                        <h3 className="LPMS-section_section4_title">Want to Save More?</h3>
                        <p className="LPMS-section_section4_description">Check out our prepaid packages with daily, monthly, and yearly credits at discounted rates</p>
                        <button className="LPMS-section_section4_button">
                            <Link to="/Available_packages">View Prepaid Packages</Link>
                        </button>

                    </span>


                    <span className="LPMS-section section5">
                        <div className="LPMS-section_section5_items LPMS-section_section5_items_part1">
                                <h3 className="LPMS-section_section5_items_part1_title">What Our Community Says</h3>

                                <p className="LPMS-section_section5_items_part1_description">Trusted by students and trainers across Morocco</p>
                        </div>
                        <div className="LPMS-section_section5_items LPMS-section_section5_items_part2">
                            <span className="LPMS-section_section5_items_part2_box1">
                                {/* <span className="LPMS-section_section5_items_part2_box1_stars"></span> */}
                                <span className="LPMS-section_section5_items_part2_box1_stars">
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
</span>

                                <span className="LPMS-section_section5_items_part2_box1_slogan"></span>
                                <span className="LPMS-section_section5_items_part2_box1_description">
                                        "Find Transportation made my daily commute so much easier! I can share rides with classmates and save money. The app is reliable and the drivers are always professional."
                                </span>
                                <span className="LPMS-section_section5_items_part2_box1_testimonial_profile">
                                    <span className="LPMS-section_section5_items_part2_box1_testimonial_profile_picture">
                                        <img src={profile} alt="" className="testimonial_profile_picture" />
                                    </span>
                                    <span>
                                        <h3 className="LPMS-section_section5_items_part2_box1_testimonial_profile_name">
                                                        Sarah Benjelloun</h3>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_role">Computer Science Student</p>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_university">ENSA Tétouan</p>
                                    </span>
                                </span>

                            </span>
                            <span className="LPMS-section_section5_items_part2_box2">

                                {/* <span className="LPMS-section_section5_items_part2_box1_stars"></span> */}
                                <span className="LPMS-section_section5_items_part2_box1_stars">
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
</span>

                                <span className="LPMS-section_section5_items_part2_box1_slogan"></span>
                                <span className="LPMS-section_section5_items_part2_box1_description">
                                        "Find Transportation made my daily commute so much easier! I can share rides with classmates and save money. The app is reliable and the drivers are always professional."
                                </span>
                                <span className="LPMS-section_section5_items_part2_box1_testimonial_profile">
                                    <span className="LPMS-section_section5_items_part2_box1_testimonial_profile_picture">
                                        <img src={profile} alt="" className="testimonial_profile_picture" />
                                    </span>
                                    <span>
                                        <h3 className="LPMS-section_section5_items_part2_box1_testimonial_profile_name">
                                                        Sarah Benjelloun</h3>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_role">Computer Science Student</p>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_university">ENSA Tétouan</p>
                                    </span>
                                </span>

                            </span>
                            <span className="LPMS-section_section5_items_part2_box3">

                                {/* <span className="LPMS-section_section5_items_part2_box1_stars"></span> */}
                                <span className="LPMS-section_section5_items_part2_box1_stars">
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
</span>

                                <span className="LPMS-section_section5_items_part2_box1_slogan"></span>
                                <span className="LPMS-section_section5_items_part2_box1_description">
                                        "Find Transportation made my daily commute so much easier! I can share rides with classmates and save money. The app is reliable and the drivers are always professional."
                                </span>
                                <span className="LPMS-section_section5_items_part2_box1_testimonial_profile">
                                    <span className="LPMS-section_section5_items_part2_box1_testimonial_profile_picture">
                                        <img src={profile} alt="" className="testimonial_profile_picture" />
                                    </span>
                                    <span>
                                        <h3 className="LPMS-section_section5_items_part2_box1_testimonial_profile_name">
                                                        Sarah Benjelloun</h3>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_role">Computer Science Student</p>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_university">ENSA Tétouan</p>
                                    </span>
                                </span>

                            </span>
                            <span className="LPMS-section_section5_items_part2_box4">

                                <span className="LPMS-section_section5_items_part2_box1_stars">
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
</span>
                                <span className="LPMS-section_section5_items_part2_box1_slogan"></span>
                                <span className="LPMS-section_section5_items_part2_box1_description">
                                        "Find Transportation made my daily commute so much easier! I can share rides with classmates and save money. The app is reliable and the drivers are always professional."
                                </span>
                                <span className="LPMS-section_section5_items_part2_box1_testimonial_profile">
                                    <span className="LPMS-section_section5_items_part2_box1_testimonial_profile_picture">
                                        <img src={profile} alt="" className="testimonial_profile_picture" />
                                    </span>
                                    <span>
                                        <h3 className="LPMS-section_section5_items_part2_box1_testimonial_profile_name">
                                                        Sarah Benjelloun</h3>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_role">Computer Science Student</p>
                                        <p className="LPMS-section_section5_items_part2_box1_testimonial_profile_university">ENSA Tétouan</p>
                                    </span>
                                </span>

                            </span>
                        </div>
                        <div className="LPMS-section_section5_items LPMS-section_section5_items_part3">
                                5,000+
                            Active Users
                        50+
                        Partner Institutions
                        15,000+
                    Monthly Rides
                    4.9/5
                            Average Rating
                        </div>
                    </span>

                   <span className="LPMS-section section6">
  <footer className="footer">
    
    <div className="footer-column footer-about">
      <div className="logo">
        <Logo />
      </div>
      <p className="footer-about-quote">
        Smart collective transport solution for students and staff. Connecting campus communities
        through safe, affordable, and eco-friendly transportation options.
      </p>
      <div className="footer-social-links">
        <a href="#" aria-label="Facebook" className="social-link">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Twitter" className="social-link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram" className="social-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="LinkedIn" className="social-link">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>

    <div className="newsLetterSection">

    <div className="footer-column">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><Link to="/ContactUS">Contact us</Link></li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Services</h3>
      <ul>
        <li><a href="#">Campus Rides</a></li>
        <li><a href="#">Shared Transportation</a></li>
        <li><a href="#">VIP Rides</a></li>
        <li><a href="#">Prepaid Packages</a></li>
        <li><a href="#">Institution Partnerships</a></li>
        <li><a href="#">Safety Features</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Contact Info</h3>
      <div className="footer-contact-info">
        <p>
          <i className="fas fa-map-marker-alt"></i>
          <span>123 Campus Ave, Rabat, Morocco</span>
        </p>
        <p>
          <i className="fas fa-phone-alt"></i>
          <span>+212 5 000 00000</span>
        </p>
        <p>
          <i className="fas fa-envelope"></i>
          <span>support@campustransport.ma</span>
        </p>
        <p>
          <i className="fas fa-clock"></i>
          <span>Mon-Fri: 8AM - 8PM</span>
        </p>
      </div>
    </div>

    
    <div className="footer-column">
      <h3>Newsletter</h3>
      <p>Subscribe to get the latest updates and offers:</p>
      <form className="newsletter-form">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Your email address"
            required
          />
        </div>
        <button type="submit" className="btn-primary">
          Subscribe
        </button>
      </form>
    </div>

    </div>

  
    <div className="footer-bottom">
      <div className="section-divider"></div>
      <p>&copy; {new Date().getFullYear()} CampusTransport. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Sitemap</a>
      </div>
      <div className="payment-methods">
        <p>We accept:</p>
        <div className="payment-icons">
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-paypal"></i>
          <span>Cash</span>
        </div>
      </div>
    </div>

 
    <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
      <i className="fas fa-arrow-up"></i>
    </button>
  </footer>

 
{/*  */}

</span>


                </div>
                {/* <span className="LP_footer">

                    <div className="LPfooter-section1 box1"></div>
                    <div className="LPfooter-section1 box2"></div>
                </span> */}
            </div>

        </>
    )
}

export default Landing_page1