import React from "react";
import * as S from "./availableCoin.style";
import ArrowRightIcon from "../../assets/images/arrow-right.svg";

const AvailableCoin = () => {
  return (
    <S.AvailableCoin>
      <S.Container>
        <S.AvailableCoinCoin>
          <p>Available Coin balance</p>
          <S.AvailableCoinNumber>340</S.AvailableCoinNumber>
          <S.AvailableCoinLine></S.AvailableCoinLine>
        </S.AvailableCoinCoin>
        <S.AvailableCoinDesc>
          <p className='available-coin__desc-text'>
            You have paid rental fee for $1,200. Pay more $800 to achieve Gold
            Tier.
          </p>
          <S.AvailableCoinBenefit>
            <a href='#' className='available-coin__desc-benefits'>
              View tier benefits
            </a>
            <img src={ArrowRightIcon} alt='arrow right' />
          </S.AvailableCoinBenefit>
          <button>My Coupons</button>
          <S.AvailableCoinDate>Updated : 02/11/2021</S.AvailableCoinDate>
        </S.AvailableCoinDesc>
      </S.Container>
    </S.AvailableCoin>
  );
};

export default AvailableCoin;
