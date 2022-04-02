import React from "react";
import { PETROL } from "../../data/data";
import Card from "../Card/Card";
import * as S from "./petrol.style";

const Petrol = () => {
  // const { icon, image, title, desc, link } = PETROL[0];
  return (
    <S.Petrol>
      <S.Container className='container'>
        <S.PetrolTitle>Petrol</S.PetrolTitle>
        <S.PetrolCard>
          {PETROL.map(
            ({ icon, image, title, desc, link, titleColor }, index) => (
              <Card
                icon={icon}
                image={image}
                title={title}
                desc={desc}
                link={link}
                key={index}
                titleColor={titleColor}
              />
            )
          )}
        </S.PetrolCard>
      </S.Container>
    </S.Petrol>
  );
};

export default Petrol;
