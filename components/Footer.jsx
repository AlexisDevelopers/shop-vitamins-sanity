import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineAmazon, AiOutlineFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 LaVelle Vitamin Shop All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineAmazon />
        <AiOutlineFacebook />
      </p>
    </div>
  )
}

export default Footer