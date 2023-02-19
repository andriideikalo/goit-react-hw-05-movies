import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaQuoteLeft } from 'react-icons/fa';
import { getMovieReviews } from 'services/Api';
// import { Loader } from 'components/Loader';
// import { Notification } from 'components/Notification';
import { Blockquote } from './ReviewsStyled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    getMovieReviews(movieId)
      .then(({ results }) => {
        if (!results.length) {
          setError('We do not have any reviews for this movie :(');
          setStatus(Status.REJECTED);
          return;
        }
        setReviews(results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {/* {status === Status.PENDING && <Loader />} */}
      {/* {status === Status.REJECTED && <Notification message={error} />} */}
      {status === Status.RESOLVED && (
        <ul>
          {reviews.map(({ id, author, content, url }) => (
            <li key={id}>
              <Blockquote cite={url}>
                <cite>Author: {author}</cite>
                <p>
                  <FaQuoteLeft size={24} />
                  {content}
                </p>
              </Blockquote>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
