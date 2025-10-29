import {Routes, Route} from "react-router-dom";
import Landing_page1 from "./Components/Landing_page1.jsx";
import User_interface from "./Components/User_interface.jsx";
import Admin_dashboard from "./Components/Admin_dashboard.jsx";
import User_dashboard from "./Components/User_dashboard.jsx";
import Searched_location from "./Components/Searched_location.jsx";
import Location_search_result from "./Components/Location_search_result.jsx";
import About from "./Components/About_page.jsx";
import ContactUS from "./Components/ContactUs.jsx";
import Transporter_dashboard from "./Components/Transporter_dashboard.jsx";
import PackagesPage from "./Components/PackagesPage.jsx";
import Search_results from "./Components/Search_results.jsx";
import Dashboard from "./Components/user_dashboard1.jsx";
import SearchLocation from "./Components/search_location.jsx";
import Payment_page from "./Components/payment_page.jsx";
import PayasyouGo from "./Components/PayAsyougo.jsx";
const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Landing_page1/>} />
            <Route path="/SearchResult" element={<Search_results/>} />
            <Route path="SearchLocation" element={<SearchLocation/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/user_interface" element={<User_interface/>}/>
            <Route path="/Admin_dashboard" element={<Admin_dashboard/>}/>
            <Route path="/User_dashboard" element={<User_dashboard/>}/>
            <Route path="/Searched_location" element={<Searched_location/>} />
            <Route path="/Location_search_result" element={< Location_search_result/>}  />
            <Route path="/About" element={< About/>}  />
            <Route path="/Available_packages" element={< PackagesPage/>} />
            <Route path="/ContactUS" element={< ContactUS/>}  />
              <Route path="/Transporter_dashboard" element={<Transporter_dashboard/>} />
              <Route path="/Payment_page" element={<Payment_page/>} />
              <Route path="/Payasyougo" element={<PayasyouGo/>} />
        </Routes>
    </>
  )
}

export default App;