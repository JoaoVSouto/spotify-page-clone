import React, { useState } from 'react';
import './player.scss';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import {
  IoMdHeartEmpty,
  IoMdHeart,
  IoIosSkipBackward,
  IoIosSkipForward,
  IoIosShuffle,
  IoIosRepeat
} from 'react-icons/io';
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdPlaylistPlay,
  MdVolumeUp,
  MdVolumeDown,
  MdVolumeOff,
  MdDevices
} from 'react-icons/md';
import musicAlbum from '../../assets/music-album.jpg';

const Player = () => {
  const [time, setTime] = useState('0:00');
  const [play, setPlay] = useState(true);
  const [volume, setVolume] = useState('mute');
  const [like, setLike] = useState(false);

  const handleTime = percentage => {
    const totalSeconds = 208;
    const currentTotalSeconds = parseInt((totalSeconds * percentage) / 100);
    const currentMinutes = Math.floor(currentTotalSeconds / 60);
    let currentSeconds = currentTotalSeconds - currentMinutes * 60;
    if (currentSeconds < 10) {
      currentSeconds = '0' + currentSeconds;
    }
    setTime(`${currentMinutes}:${currentSeconds}`);
  };

  const handleVolume = percentage => {
    if (percentage === 0) {
      setVolume('mute');
    } else if (percentage > 0 && percentage <= 50) {
      setVolume('low');
    } else {
      setVolume('high');
    }
  };

  return (
    <div className="player-container">
      <div className="player-container__info">
        <img src={musicAlbum} alt="music album" />
        <div className="music-name">
          <h3>To Live Again</h3>
          <span>Viper</span>
        </div>
        <button
          type="button"
          className="heart-icon"
          onClick={() => setLike(!like)}>
          {like ? (
            <IoMdHeart className="heart-icon__full" />
          ) : (
            <IoMdHeartEmpty className="heart-icon__empty" />
          )}
        </button>
      </div>
      <div className="player-container__controls">
        <div className="controls-buttons">
          <button className="icon-suffle">
            <IoIosShuffle />
          </button>
          <button className="icon-backward">
            <IoIosSkipBackward />
          </button>
          <button className="icon-play" onClick={() => setPlay(!play)}>
            {play ? <MdPlayCircleOutline /> : <MdPauseCircleOutline />}
          </button>
          <button className="icon-forward">
            <IoIosSkipForward className="forward-icon" />
          </button>
          <button className="icon-repeat">
            <IoIosRepeat className="repeat-icon" />
          </button>
        </div>
        <div className="slider">
          <div className="music-time">{time}</div>
          <Slider onChange={percentage => handleTime(percentage)} />
          <div className="music-time">3:28</div>
        </div>
      </div>
      <div className="player-container__extra">
        <button className="icon-queue">
          <MdPlaylistPlay />
        </button>
        <button className="icon-devices">
          <MdDevices />
        </button>
        <button className="icon-sound">
          {volume === 'high' ? (
            <MdVolumeUp />
          ) : volume === 'low' ? (
            <MdVolumeDown />
          ) : (
            <MdVolumeOff />
          )}
        </button>
        <div className="slider">
          <Slider onChange={percentage => handleVolume(percentage)} />
        </div>
      </div>
    </div>
  );
};

export default Player;
