import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';
// import { ReviewsStyled, ContextAuthor, Context } from './ReviewsStyled';
import * as styl from './ReviewsStyled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    getMovieReviews(movieId)
      .then(({ results }) => {
        if (!results.length) {
          setStatus(Status.REJECTED);
          return;
        }
        setReviews(results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.RESOLVED && (
        <ul>
          {reviews.map(({ id, author, content, url }) => (
            <li key={id}>
              <styl.Reviews cite={url}>
                <styl.ContextAuthor>Author: {author}</styl.ContextAuthor>
                <styl.Context> {content} </styl.Context>
              </styl.Reviews>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
