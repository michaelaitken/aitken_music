import React from 'react';
import { Link } from 'react-router-dom';
import { noCoverArt } from '../assets';

import PlayPause from './PlayPause';

const SongBar = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
  const coverArt = song?.images ? song?.images?.coverart : noCoverArt;
  
  return (
    <div className={`w-full flex flex-row items-center hover:bg-[#000000] ${activeSong?.title === song?.title && !artistId ? 'bg-[#000000]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
      <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20 rounded-lg"
          src={artistId ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : coverArt}
          alt={song?.title}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          {!artistId && song.hub.actions ? (
            <Link to={`/songs/${song.key}`}>
              <p className="text-xl font-bold text-white hover:text-[#FF8A00]">
                {song?.title}
              </p>
            </Link>
          ) : (
            <p className="text-xl font-bold text-white">
              {song?.title}
            </p>
          )}

          {artistId ? (
            <p className="text-xl font-bold text-white">
              {artistId ? song?.attributes?.albumName : song?.subtitle}
            </p>
          ) : (
            <p className="text-base text-gray-300 mt-1">
              {artistId ? song?.attributes?.albumName : song?.subtitle}
            </p>
          )}
        </div>
      </div>
      {!artistId
        ? (
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={() => handlePlayClick(song, i)}
          />
        )
        : null}
    </div>
  );
};

export default SongBar;