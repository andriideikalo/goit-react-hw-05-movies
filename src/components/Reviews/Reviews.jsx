import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';
import * as styl from './ReviewsStyled';
import Notiflix from 'notiflix';

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
      .catch(function (error) {
        if (error.response) {
          Notiflix.Notify.warning(error.response.data);
        } else if (error.request) {
          Notiflix.Notify.warning('Request failed');
        } else {
          Notiflix.Notify.warning('Error', error.message);
        }
      })
      .finally();
  }, [movieId]);

  return (
    <>
      {status === Status.RESOLVED && (
        <ul>
          {reviews.map(({ id, author, content, url }) => (
            <div key={id}>
              <styl.Reviews cite={url}>
                <styl.ContextAuthor>Author: {author}</styl.ContextAuthor>
                <styl.Context> {content} </styl.Context>
              </styl.Reviews>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
