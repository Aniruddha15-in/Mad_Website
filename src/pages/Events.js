import React from 'react'
import Carousel from '../components/Carousel'
import diwali from '../assets/events/diwali mela.jpg'
import freshers from '../assets/events/dtu freshers.jpg'
import flashmob from '../assets/events/flashmob.jpg'
import foodfest from '../assets/events/food festival.jpg'
import kalamkaar from '../assets/events/kalamkaar.jpg'
import cadence from '../assets/events/cadence.jpg'
import swartantrata from '../assets/events/Swartantrata.jpg'
const Events = () => {
  const images = [
    diwali,
    freshers,
    flashmob,
    foodfest
  ];
  return (
    <>
      <div className='carousel-events' style={{ paddingTop: '150px' }}>
        <Carousel images={images}/>
      </div>

      <div className="events">
        <div className="events-header">EVENTS</div>

        <div className="event-card">
          <div className="div">
            <img className="IMG" src={cadence} alt="cadence" />
            <div className="div-2">
              <div className="group">
                <div className="text-wrapper">Cadence</div>
              </div>
              <p className="text-wrapper-2">
              Cadence is the annual intra Madhurima competition hosted by the society for its newly joined freshers. Freshers can compete in three  categories - Indian Vocals, Western Vocal and Instrumental. Seniors from Madhurima are assigned as mentors to the competing freshers few weeks before the competition. The idea behind Cadence is to familiarise the freshers with the college music scene and provide them with an opportunity to interact and perform with each other live for the first time.
              </p>

            </div>
          </div>
        </div>

        <div className="event-card">
          <div className="div">
            <img className="IMG" src={kalamkaar} alt="kalamkaar" />
            <div className="div-2">
              <div className="group">
                <div className="text-wrapper">Kalamkaar</div>
              </div>
              <p className="text-wrapper-2">
                Madhurima collaborates with Yuvaan - the Literary Fest of DTU to host an inter-college songwriting competition for budding songwriters.
              </p>

            </div>
          </div>
        </div>

        <div className="event-card">
          <div className="div">
            <img className="IMG" src={swartantrata} alt="swartantrata" />
            <div className="div-2">
              <div className="group">
                <div className="text-wrapper">Swartantrata</div>
              </div>
              <p className="text-wrapper-2">
                Missing Info
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events
