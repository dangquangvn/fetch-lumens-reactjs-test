import React from "react";
import * as S from "./footer.style";
import HomeIcon from "../../assets/images/home-icon.svg";
import BellIcon from "../../assets/images/bell-icon.svg";
import BoxIcon from "../../assets/images/box-icon.svg";
import PersonIcon from "../../assets/images/person-icon.svg";

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterMenu>
        <S.FooterItem>
          <a href='/'>
            <img src={HomeIcon} alt='' />
          </a>
        </S.FooterItem>
        <S.FooterItem className='bell-icon'>
          <a href='/' className='circle'>
            <img src={BellIcon} alt='' />
          </a>
        </S.FooterItem>
        <S.FooterItem>
          <a href='/'>
            <img src={BoxIcon} alt='' />
          </a>
        </S.FooterItem>
        <S.FooterItem>
          <a href='/'>
            <img src={PersonIcon} alt='' />
          </a>
        </S.FooterItem>
      </S.FooterMenu>
    </S.Footer>
  );
};

export default Footer;
