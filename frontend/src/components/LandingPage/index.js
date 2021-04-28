// functional components inside of here so i can:
import './LandingPage.css'
import EventList from '../Events'     // not needed because its called index.js


function LandingPage () {

  return (        // below the return will show on screen html wise, logic above^
    <div>
      <h1>Landing page when not signed in</h1>
      <EventList />
    </div>
  )
}


export default LandingPage;
