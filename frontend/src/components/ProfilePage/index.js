import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './ProfilePage.css';


const ProfilePage = () => {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div>
      <h1>This is the profile page rendered!!</h1>
    </div>
  )
}


export default ProfilePage;
