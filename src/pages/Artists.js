import React from 'react';
import ArtistCard from '../components/ArtistCard';
import { artist } from '../utils/data';
import ig from "../assets/ig-footer.png";
import yt from "../assets/youtube-footer.png";
import li from "../assets/linkedin-footer.png";

const Artists = () => {
  return (
    <div className='artistPage' style={{paddingTop : "189px"}}>
      <div>
        <p className='heading-artistPage'>Our Alumni</p>
      </div>

      {artist.slice(0, artist.length - 1).map((artist, index) => (
          <div className="artist-card">
            <div className="artist-sec1">
              <img src={artist.image} />
            </div>
            <div className="artist-sec2">
              <div className="heading-artist">
                <p className="artist-name">{artist.name} | </p>
                <p className="artist-tag"> {artist.tag}</p>
              </div>
              <div>
                <p className="artist-desc">{artist.desc}</p>
              </div>
              <div className="artist-spotify">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src={artist.spotifyEmbed}
                  width="100%"
                  height="150"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="artist-links">
                <a href={artist.ig} target='_blank'>
                  <img src={ig} className='artist-link' />
                </a>
                <a href={artist.yt} target='_blank'>
                  <img src={yt} className='artist-link' />
                </a>
                <a href={artist.spotify} target='_blank'>
                  <img src={li} className='artist-link' />
                </a>
              </div>
            </div>
          </div>
      ))}
    </div>
  )
}

export default Artists
