import React from "react";
import arrowIcon from "../../assets/images/arrow.svg";
import AvailableCoin from "../AvailableCoin/AvailableCoin";
import * as S from "./Home.style";

const Home = () => {
  return (
    <S.Hero>
      <S.Container className='container'>
        <S.ArrowIcon>
          <img src={arrowIcon} alt='arrow-left' />
        </S.ArrowIcon>
        <S.HeroContent>
          <h3>Silver Tier</h3>
          <p>
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </p>
        </S.HeroContent>
      </S.Container>
      <AvailableCoin />
    </S.Hero>
  );
};

export default Home;
