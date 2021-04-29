// functional components inside of here so i can:
import './LandingPage.css'
import EventList from '../Events'     // not needed because its called index.js


function LandingPage () {

  return (        // below the return will show on screen html wise, logic above^
    <div>
      <div className='frontPage-picture-container'>
        <img className='frontPage-Picture' src="https://res.cloudinary.com/dwus7ia33/image/upload/v1619561031/Electric_Nights-pictures/picture15_vlxzkm.jpg" alt=""/>
      </div>
      <h1>Landing page when not signed in</h1>

      <div className=''>
        <EventList />
      </div>
    </div>
  )
}


export default LandingPage;
