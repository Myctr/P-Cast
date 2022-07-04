import React from 'react';
import PodcastsOnSvg from '../../../assets/svg/podcasts_on.svg';
import PodcastsOffSvg from '../../../assets/svg/podcasts_off.svg';

const PodcastsIcon = ({type}) => {
  return type ? <PodcastsOnSvg /> : <PodcastsOffSvg />;
};

export default PodcastsIcon;
