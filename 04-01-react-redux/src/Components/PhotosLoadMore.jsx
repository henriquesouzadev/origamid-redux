import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadNewPhotos } from '../store/photos';
import Loading from './Helper/Loading';
import styles from './PhotosLoadMore.module.css';

const PhotosLoadMore = () => {
  const dispatch = useDispatch();
  const { pages, infinity, loading } = useSelector(state => state.photos);

  const handleClick = () => {
    dispatch(loadNewPhotos(pages + 1));
  }

  return (
    <>
      {loading && <Loading />}
      {infinity && (
        <button onClick={() => handleClick()} className={styles.button} disabled={loading}>+</button>
      )}
    </>
  )
}

export default PhotosLoadMore