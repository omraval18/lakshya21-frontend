import React from 'react';
import './Sponsore.scss';

import SponsoreCard from '../../components/Cards/SponsorCard';

import bbc from './../../Images/logo-bbc.png';
import bi from './../../Images/logo-bi.png';
import forbes from './../../Images/logo-forbes.png';

function Sponsore() {
  return (
    <div className="sponsore">
      <div className="sponsore__heading">
        <h1>Meet Our Sponsors</h1>
      </div>
      <SponsoreCard
        img={bbc}
        headline="sample headline"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto est similique quod praesentium fugit nulla eius, aperiam placeat modi minus adipisci, expedita totam assumenda ad, facere voluptatibus provident earum perspiciatis?"
      />

      <SponsoreCard
        img={bi}
        headline="sample headline"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto est similique quod praesentium fugit nulla eius, aperiam placeat modi minus adipisci, expedita totam assumenda ad, facere voluptatibus provident earum perspiciatis?"
      />

      <SponsoreCard
        img={forbes}
        headline="sample headline"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto est similique quod praesentium fugit nulla eius, aperiam placeat modi minus adipisci, expedita totam assumenda ad, facere voluptatibus provident earum perspiciatis?"
      />

      <div className="otherSponsore">
        <h1>Other Sponsors</h1>

        <div className="otherSponsore__logo">
          <img src={bbc} alt="" className="otherSponsore__img" />
          <img src={bi} alt="" className="otherSponsore__img" />
          <img src={forbes} alt="" className="otherSponsore__img" />
          <img src={bbc} alt="" className="otherSponsore__img" />
        </div>

        <div className="otherSponsore__logo">
          <img src={bi} alt="" className="otherSponsore__img" />
          <img src={forbes} alt="" className="otherSponsore__img" />
          <img src={bbc} alt="" className="otherSponsore__img" />
        </div>

        <div className="otherSponsore__logo">
          <img src={bbc} alt="" className="otherSponsore__img" />
          <img src={bi} alt="" className="otherSponsore__img" />
          <img src={forbes} alt="" className="otherSponsore__img" />
          <img src={bbc} alt="" className="otherSponsore__img" />
        </div>
      </div>
    </div>
  );
}

export default Sponsore;
