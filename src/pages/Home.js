import React from "react";
import about from "../assets/home-about.png";
import hero from "../assets/440-home.jpg";
import sponsor1 from "../assets/sponsor-logo1.png";
import sponsor2 from "../assets/sponsor-logo2.png";
import sponsor3 from "../assets/sponsor-logo3.png";
import sponsor4 from "../assets/sponsor-logo4.png";
import sponsor5 from "../assets/sponsor-logo5.png";
import IGcomponent from "../components/IGcomponent";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="homePage">
      <div className="hero-home">
        <img src={hero} />
      </div>
      <div className="about-home">
        <div>
          <img src={about} />
        </div>
        <div className="content-home">
          <p className="p1content-home">About</p>
          <p className="p2content-home">Do Re Mi Pa</p>
          <p className="p3content-home">
            DoReMiPa is the official annual inter-college music competition of
            Delhi Technological University(DTU) organized by Madhurima - the
            music society of DTU, which is held under ENGIFEST- the largest
            cultural fest of north India.  DoReMiPa includes six musical
            competitions that  showcase a diverse array of musical styles,
            encompassing Indian, Western, and Instrumental genres and draws
            participation from all major colleges in the Delhi NCR as well as
            other parts of India. The competition is judged by professional
            musicians who are well established within their respective domains.
          </p>
          <button className="but-home">Learn More</button>
        </div>
      </div>
      <div className="sponsors">
        <p className="content-sponsors">Sponsors</p>
        <div className="current-sponsors">
          <img src={sponsor1} className="current-sponsor" />
          <img src={sponsor2} className="current-sponsor" />
          <img src={sponsor3} className="current-sponsor" />
          <img src={sponsor4} className="current-sponsor" />
          <img src={sponsor5} className="current-sponsor" />
        </div>
      </div>
      <div className="sponsors">
        <p className="content-sponsors">Past Sponsors</p>
        <div className="current-sponsors">
          <img src={sponsor1} className="current-sponsor" />
          <img src={sponsor2} className="current-sponsor" />
          <img src={sponsor3} className="current-sponsor" />
          <img src={sponsor4} className="current-sponsor" />
          <img src={sponsor5} className="current-sponsor" />
        </div>
      </div>
      <div className="ig-embed">
        <div className="ig-small">
          <IGcomponent/>
        </div>
        <div
          class="tagembed-container ig-big"
          style={{ width:"98vw", height:"80vh", overflow: "auto"}}
        >
          <div class="tagembed-socialwall" data-wall-id="132529" ></div>{" "}
          <Helmet>
              <script
                src="//widget.tagembed.com/embed.min.js"
                type="text/javascript"
              ></script>
          </Helmet>
        </div>
      </div>
    </div>
  );
};

export default Home;
