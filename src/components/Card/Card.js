import React from "react";
import * as S from "./card.style";
import CardImg1 from "../../assets/images/card-1.png";

const Card = ({ icon, image, title, desc, link, titleColor }) => {
  return (
    <S.Card>
      <S.CardImage>
        <img src={image} alt='' />
      </S.CardImage>
      <S.CardContent>
        <S.CardTitle titleColor={titleColor}>
          {icon && (
            <>
              <span>
                <img src={icon} alt='' />
              </span>
            </>
          )}
          {title}
        </S.CardTitle>
        <S.CardDesc>{desc}</S.CardDesc>
        {link && <S.CardLink href={link.path}>{link.text}</S.CardLink>}
      </S.CardContent>
    </S.Card>
  );
};

export default Card;
