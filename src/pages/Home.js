import React from "react";
import about from "../assets/home-about.png";
import hero from "../assets/440-home.jpg";
import sponsor1 from "../assets/sponsor-logo1.png";
import sponsor2 from "../assets/sponsor-logo2.png";
import sponsor3 from "../assets/sponsor-logo3.png";
import sponsor4 from "../assets/sponsor-logo4.png";
import sponsor5 from "../assets/sponsor-logo5.png";
import IGcomponent from "../components/IGcomponent";
import AboutDoremipaCard from "../components/AboutDoremipaCard";

import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="homePage">
      <div className="hero-home">
        <img src={hero} />
      </div>
      <AboutDoremipaCard />
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
