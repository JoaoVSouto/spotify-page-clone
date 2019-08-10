import React from 'react';
import './nav.scss';

import Scrollbar from 'react-scrollbars-custom';

import { TiHome } from 'react-icons/ti';
import { MdSearch, MdLibraryMusic, MdAdd } from 'react-icons/md';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import spotifylogo from '../../assets/spotify_logo.png';
import userpic from '../../assets/userpic.jpeg';

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-container__logo">
        <img src={spotifylogo} alt="Spotify Logo" />
      </div>
      <div className="nav-container__menu">
        <button className="icon-home">
          <div className="icon">
            <TiHome />
          </div>
          <span>Home</span>
        </button>
        <button className="icon-search">
          <div className="icon">
            <MdSearch />
          </div>
          <span>&nbsp;Search</span>
        </button>
        <button className="icon-library">
          <div className="icon">
            <MdLibraryMusic />
          </div>
          <span>&nbsp;Your Library</span>
        </button>
      </div>
      <div className="nav-container__playlists">
        <h4 className="header">playlists</h4>
        <div className="create-playlist">
          <button className="create-playlist__button">
            <MdAdd />
          </button>
          <strong className="create-playlist__lead">Create Playlist</strong>
        </div>
        <ul className="playlists-scroll">
          <Scrollbar style={{ width: 200, height: 163 }} noDefaultStyles>
            <li>This Is Andre Matos</li>
            <li>This Is Zé Ramalho</li>
            <li>Lo-Fi Beats</li>
            <li>This Is Queen</li>
            <li>Your Top Songs 2018</li>
            <li>Songs to Sing in the Car</li>
            <li>This Is As I Lay Dying</li>
            <li>Mac DeMarco</li>
            <li>Discover Weekly</li>
            <li>This Is Black Sabbath</li>
            <li>This Is Machine Head</li>
            <li>This Is Metallica</li>
            <li>Lorem Ipsum</li>
            <li>Joy Division</li>
            <li>This Is The Smiths</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
          </Scrollbar>
        </ul>
      </div>
      <div className="nav-container__user">
        <div className="download">
          <div className="download__icon">
            <FaRegArrowAltCircleDown />
          </div>
          <strong className="download__lead">Install App</strong>
        </div>
        <div className="user">
          <img src={userpic} alt="user" className="user__img" />
          <strong className="user__name">João Vítor</strong>
        </div>
      </div>
    </div>
  );
};

export default Nav;
