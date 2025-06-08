import React, { useState, useEffect } from 'react';

const TestimonialsA= () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Replace this with your actual API call
    fetch('/api/get-reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="testimonials">
      <h2>Patient Testimonials</h2>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>"{review.text}"</p>
          <p>– {review.author_name}</p>
        </div>
      ))}
    </section>
  );
};

export default TestimonialsA;
