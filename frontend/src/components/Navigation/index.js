// frontend/src/components/Navigation/index.js
import { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButon';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignupFormModal';
import SearchBar from '../SearchBar';
import RandomEvent from '../RandomEvent';
import LogInBtn from '../LogInBtn';
import SignUpBtn from '../SignUpBtn';
import { getEvents } from '../../store/event'
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const events = useSelector(state => state.events);        // pull content out of state
  const dispatch = useDispatch();
  const history = useHistory();


  let sessionLinks;

  useEffect(() => {
    dispatch(getEvents())                       // RUN THUNK TO GET EVENTS
  }, [dispatch])

  const getRandomEvent = () => {
    if (events) {
      const eventArr = Object.values(events)      // normalize object being transformed here
      const idx = Math.floor(Math.random() * (eventArr.length))

      const randomEvent = eventArr[idx];
      history.push(`/event/${randomEvent.id}`)
    }
  }

  if (sessionUser) {            // if session is logged in, then show profile button
    sessionLinks = (
      <ProfileButton user={sessionUser} />                  // using the profile button component here
    );
  } else {                  // else, show login and signup buttons instead
    sessionLinks = (
      <>
        <div className='link-btn-container'>
          <div className={'LogInBtn-container'}>
            <LoginFormModal />
          </div>

          <div className={'signInBtn-container'}>
            <SignUpFormModal />
          </div>
          {/* <NavLink to="/signup">Sign Up</NavLink> */}
        </div>
      </>
    );
  }

  return (
    <div className={'navbar-header'}>
      <div className={'menu-area'}>
        <div className={'nav-container'}>
          <div className={'nav-position-left'}>
            <div className={'left-inner-nav'}>
              <div className={'logo-wrapper'}></div>
              {/* <NavLink className={'logo-name'} exact to="/">Electric Nights</NavLink> */}
              <a className={'logo-name'} href='/'>Electric Nights</a>

            </div>
          </div>
          <div className={'nav-position-right'}>
            <div className={'right-inner-nav'}>
              <h5>testing</h5>
              <h5>testing2</h5>
              <h5>testing3</h5>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Navigation;
