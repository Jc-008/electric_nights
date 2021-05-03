// functional components inside of here so i can:
import './LandingPage.css'
import EventList from '../Events'     // not needed because its called index.js


function LandingPage () {

  return (        // below the return will show on screen html wise, logic above^
    <div>
      <div className='frontPage-banner-container'>
        <div className='motto-container'>
          <div className='motto-inner-container'>
            <div className='motto-top'>Discover the best</div>
            <div className='motto-bottom'>EDM events today!</div>
          </div>
        </div>

        <img className='frontPage-Picture' src="https://res.cloudinary.com/dwus7ia33/image/upload/v1619758431/Electric_Nights-pictures/picture14_ultone.jpg" alt="Electric Nights Logo"/>
        {/* <img className='frontPage-Picture' src="https://res.cloudinary.com/dwus7ia33/image/upload/v1619758173/Electric_Nights-pictures/picture15_vlxzkm.jpg" alt="Electric Nights Logo"/> */}
        {/* <img className='frontPage-Picture' src="https://res.cloudinary.com/dwus7ia33/image/upload/v1619757445/Electric_Nights-pictures/Picture32_gncjds.jpg" alt="Electric Nights Logo"/> */}
      </div>
      {/* <h1>Landing page when not signed in</h1> */}

      <div className=''>
        <EventList />
      </div>
    </div>
  )
}


export default LandingPage;
