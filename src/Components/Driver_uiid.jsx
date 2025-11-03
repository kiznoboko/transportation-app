import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import "../Styles/Driver_uiid.css"; // optional styling

// 🔗 Supabase connection
    const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA'; // keep this secure!
const supabase = createClient(supabaseUrl, supabaseKey);
export default function Driver_uuid() {
  const { uuid } = useParams(); // get /driver/:uuid param
  const [driver, setDriver] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔍 Fetch driver info
  useEffect(() => {
    const fetchDriver = async () => {
      const { data, error } = await supabase
        .from("drivers")
        .select("*")
        .eq("id", uuid)
        .single();

      if (error) {
        console.error("Error fetching driver:", error);
      } else {
        setDriver(data);
      }
      setLoading(false);
    };

    fetchDriver();
  }, [uuid]);

  const handleCopyUUID = () => {
    navigator.clipboard.writeText(uuid);
    alert("UUID copied to clipboard!");
  };

  if (loading) return <p className="loading">Loading driver data...</p>;

  if (!driver)
    return (
      <div className="driver-error">
        <h2>❌ Driver not found</h2>
        <p>Please verify the link or contact support.</p>
      </div>
    );

  return (
    <div className="driver-uuid-container">
      <h1>🚗 Driver Profile</h1>

      <div className="driver-card">
        <p>
          <strong>UUID:</strong> {driver.id}{" "}
          <button className="copy-btn" onClick={handleCopyUUID}>
            Copy
          </button>
        </p>
        <p>
          <strong>Full Name:</strong> {driver.full_name}
        </p>
        <p>
          <strong>Email:</strong> {driver.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {driver.phone_number}
        </p>
        <p>
          <strong>Driver License:</strong> {driver.driver_license}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span
            className={`status-tag ${
              driver.status === "approved"
                ? "status-approved"
                : "status-pending"
            }`}
          >
            {driver.status}
          </span>
        </p>
        <p>
          <strong>Created At:</strong>{" "}
          {new Date(driver.created_at).toLocaleString()}
        </p>
        <p className="Driver-tag-NB">you must send an email to : findTransportation@proton.me with all this information and a picture of your driver id / license</p>
      </div>
    </div>
  );
}
