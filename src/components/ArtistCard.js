import React from "react";
import { artist } from "../utils/data";
import ig from "../assets/ig-footer.png";
import yt from "../assets/youtube-footer.png";

const ArtistCard = ({index, name, tag, img, desc, spotifyEmbed, igLink, ytLink, spotifyLink}) => {
  return (
    <>
      <div className="artist-card">
          <div className="artist-sec1">
            <img src={artist.img} />
          </div>
          <div className="artist-sec2">
            <div className="heading-artist">
              <p className="artist-name">{artist.name}</p>
              <p className="artist-tag">{artist.tag}</p>
            </div>
            <div>
              <p className="artist-desc">{artist.desc}</p>
            </div>
            <div className="artist-spotify">
              <iframe
                style={{ borderRadius: "12px" }}
                src={artist.spotifyEmbed}
                width="100%"
                height="152"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <div className="artist-links">
              <a href={igLink}>
                <img src={ig} />
              </a>
              <a href={ytLink}>
                <img src={yt} />
              </a>
              <a href={spotifyLink}>
                <img src="" />
              </a>
            </div>
          </div>
        </div>
    </>
  );
};

export default ArtistCard;
