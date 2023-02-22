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
        setReviews(results);
      })
      .catch(error => console.log(error))
      .finally();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <div key={id}>
              <styl.Reviews>
                <styl.ContextAuthor>Author: {author}</styl.ContextAuthor>
                <styl.Context> {content} </styl.Context>
              </styl.Reviews>
            </div>
          ))}
        </ul>
      ) : (
        Notiflix.Notify.warning('Sorry. There are no reviews for this movie.(')
      )}
    </>
  );
};

export default Reviews;
