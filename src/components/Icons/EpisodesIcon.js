import React from 'react';
import EpisodesOnSvg from '../../../assets/svg/episodes_on.svg';
import EpisodesOffSvg from '../../../assets/svg/episodes_off.svg';

const EpisodesIcon = ({type}) => {
  return type ? <EpisodesOnSvg /> : <EpisodesOffSvg />;
};

export default EpisodesIcon;
