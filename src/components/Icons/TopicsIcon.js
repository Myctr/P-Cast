import React from 'react';
import TopicsOnSvg from '../../../assets/svg/topics_on.svg';
import TopicsOffSvg from '../../../assets/svg/topics_off.svg';

const TopicsIcon = ({type}) => {
  return type ? <TopicsOnSvg /> : <TopicsOffSvg />;
};

export default TopicsIcon;
