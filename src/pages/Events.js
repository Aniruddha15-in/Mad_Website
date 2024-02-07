import React from 'react';
import Carousel from '../components/Carousel';
import diwali from '../assets/events/diwali mela.png';
import freshers from '../assets/events/freshers.png';
import g20 from '../assets/events/g20.png';
import flashmob from '../assets/events/flashmob.png';
import foodfest from '../assets/events/food festival.png';
import kalamkaar from '../assets/events/kalamkaar.jpg';
import cadence from '../assets/events/cadence.jpg';
import swartantrata from '../assets/events/Swartantrata.jpg';
const Events = () => {
  const images = [
    diwali,
    freshers,
    flashmob,
    foodfest,
    g20
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
                <div className="text-wrapper">Kalamkar</div>
              </div>
              <p className="text-wrapper-2">
              Madhurima collaborates with Yuvaan - the literary fest of DTU to host an inter- college songwriting competition for budding songwriters. This collaborative effort aims to cultivate and showcase the burgeoning talent of aspiring songwriters from various colleges. Participants are invited to unleash their creativity and lyrical prowess, crafting original compositions that captivate and inspire. The competition serves as a dynamic platform for emerging artists to express themselves, fostering a community of musical innovation and artistic exploration. Through this partnership, Madhurima and Yuvaan strive to celebrate the power of words and melodies.
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
              Swartantra, an esteemed tradition upheld by Madhurima, is an annual patriotic song competition held in commemoration of Independence Day. This cherished event serves as a platform for the passionate individuals of DTU to express their profound love and patriotism through melodious voice. Open to all students of DTU, Swartantra attracts a remarkable influx of participants eager to share their heartfelt sentiments. The competition, graced by esteemed dignitaries and faculty members, fosters a sense of unity and national pride within the college community. Winners of Swartantra are not only celebrated for their musical talents but also rewarded with  cash prizes, recognizing their exceptional talent.
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events
