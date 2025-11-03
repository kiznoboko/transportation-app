import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { id } = useParams(); // Grab the order id from the URL
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Here you can fetch reviews for this order id from Supabase or API
    const fetchReviews = async () => {
      // Example placeholder: replace with your actual fetch logic
      // const { data, error } = await supabase
      //   .from("reviews")
      //   .select("*")
      //   .eq("order_id", id);
      // if (!error) setReviews(data);
      
      // Temporary mock data
      setReviews([
        { id: 1, user:"Amine", comment: "Great ride!", rating: 5 },
        { id: 2, user:"Simo", comment: "Driver was late", rating: 3 },
      ]);
    };

    fetchReviews();
  }, [id]);

  return (
    
    <div className="reviews-page">
        
      <h2>Reviews for Order #{id}</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
                <strong>user:</strong> {review.user} <br/>
              <strong>Rating:</strong> {review.rating} ⭐ <br />
              <strong>Comment:</strong> {review.comment}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
