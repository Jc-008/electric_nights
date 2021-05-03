// import {useEffect} from 'react';
// import { NavLink, useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import ProfileButton from '../Navigation/ProfileButon';
// import LoginFormModal from '../LoginFormModal';
// import SearchBar from '../SearchBar';
// import RandomEvent from '../RandomEvent';
// import LogInBtn from '../LogInBtn';
// import SignUpBtn from '../SignUpBtn';
// import {getEvents} from '../../store/event'
// import '../NavBar/NavBar.css';

// function NavBar(){
//   const sessionUser = useSelector(state => state.session.user);
//   const events = useSelector(state => state.events);        // pull content out of state
//   const dispatch = useDispatch();
//   const history = useHistory();


//   let sessionLinks;

//   useEffect(() => {
//     dispatch(getEvents())                       // RUN THUNK TO GET EVENTS
//   }, [dispatch])

//   const getRandomEvent = () => {
//     if (events) {
//       const eventArr = Object.values(events)      // normalize object being transformed here
//       const idx = Math.floor(Math.random() * (eventArr.length))

//       const randomEvent = eventArr[idx];
//       history.push(`/event/${randomEvent.id}`)
//     }
//   }

//   if (sessionUser) {            // if session is logged in, then show profile button
//     sessionLinks = (
//       <ProfileButton user={sessionUser} />                                          // using the profile button component here
//     );
//   } else {                  // else, show login and signup buttons instead
//     sessionLinks = (
//       <>
//         <LoginFormModal />
//         <NavLink to="/signup">Sign Up</NavLink>
//       </>
//     );
//   }

//   return (              // building blocks of the html below , logic above ^            // want [ logo        searchbar                 randomEventBTN        signinBTN  ]
//     <div className={'navbar-container'}>
//       <div className={'logo-button'}>
//         <NavLink exact to="/">Electric Nights</NavLink>
//       </div>

//       <div className={'searchBar'}>
//         <SearchBar/>
//       </div>

//       <div className={'randomEventBtn-container'}>
//         <h3 onClick={getRandomEvent}>Randomize Event</h3>
//       </div>

//       <div className={'signInBtn-container'}>
//         <LogInBtn/>
//       </div>

//       <div className={'signInBtn-container'}>
//         <SignUpBtn/>
//       </div>

//     </div>
//   );
// }

// export default NavBar;
