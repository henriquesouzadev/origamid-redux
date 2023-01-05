import React from 'react'
import { useSelector } from 'react-redux';
import Loading from './Helper/Loading';
import Login from './Login'
import Photos from './Photos';

const Content = () => {
  const { user, token } = useSelector(state => state.login);

  return (
    <div>
      {(user.loading || token.loading) && <Loading />}
      {(!user.loading && user.data) && <Photos />}
      {(!user.loading && !user.data) && <Login />}
    </div>
  )
}

export default Content;