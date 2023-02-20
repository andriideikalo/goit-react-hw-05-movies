import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';
import * as styl from './ReviewsStyled';
import Notiflix from 'notiflix';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(({ results }) => {
        if (!results.length) {
          return;
        }
        setReviews(results);
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
      {reviews && (
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
      {reviews !== setReviews &&
        Notiflix.Notify.warning('Sorry. There are no reviews for this movie.(')}
    </>
  );
};

export default Reviews;
