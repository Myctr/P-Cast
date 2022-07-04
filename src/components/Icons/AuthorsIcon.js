import React from 'react';
import AuthorsOnSvg from '../../../assets/svg/authors_on.svg';
import AuthorsOffSvg from '../../../assets/svg/authors_off.svg';

const AuthorsIcon = ({type}) => {
  return type ? <AuthorsOnSvg /> : <AuthorsOffSvg />;
};

export default AuthorsIcon;
