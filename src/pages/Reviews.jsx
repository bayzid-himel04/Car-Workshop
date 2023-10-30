import NavBar from "../component/NavBar";
import Footer from "../component/Footter";
import '../style/Reviews.css';


const reviewsData = [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      review: 'Great service, very professional!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4,
      review: 'I was satisfied with the quality of work.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      rating: 5,
      review: 'They exceeded my expectations. Highly recommended!',
    },
    {
      id: 4,
      name: 'Bob Anderson',
      rating: 3,
      review: 'Service was okay, could be better.',
    },
    {
      id: 5,
      name: 'Emily Brown',
      rating: 5,
      review: 'Excellent customer service and fast repairs!',
    },
    {
      id: 6,
      name: 'Michael Wilson',
      rating: 4,
      review: 'Good experience overall. Friendly staff.',
    },
    {
      id: 7,
      name: 'Sarah Davis',
      rating: 5,
      review: 'Outstanding service! Will definitely return.',
    },
    {
      id: 8,
      name: 'Chris Parker',
      rating: 4,
      review: 'Solid work, fair pricing. No complaints.',
    },
    {
      id: 9,
      name: 'Linda Miller',
      rating: 3,
      review: 'Not as fast as expected, but quality is good.',
    },
    {
      id: 10,
      name: 'David Turner',
      rating: 5,
      review: 'Impressive work, exceeded my expectations!',
    },
  ];



const Reviews = () => {

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
          stars.push(
            <span key={i} className="star">&#9733;</span>
          );
        }
        return stars;
      };
    return (
        <div>
            <NavBar/>
            <div className="reviews">
      <h1>Customer Reviews</h1>
      <div className="reviews-container">
        {reviewsData.map((review) => (
          <div key={review.id} className="review">
            <div className="rating">{review.rating} stars</div>
            <p className="review-text">{review.review}</p>
            <p className="review-author">- {review.name}</p>
            <div className="star-rating">{renderStars(review.rating)}</div>
          </div>
        ))}
      </div>
    </div>
            <Footer/>
        </div>);};
export default Reviews;