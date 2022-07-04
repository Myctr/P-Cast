import React from 'react';
import CategoriesOnSvg from '../../../assets/svg/categories_on.svg';
import CategoriesOffSvg from '../../../assets/svg/categories_off.svg';

const CategoriesIcon = ({type}) => {
  return type ? <CategoriesOnSvg /> : <CategoriesOffSvg />;
};

export default CategoriesIcon;
