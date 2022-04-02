import React from "react";
import { RENTAL_REBATE } from "../../data/data";
import Card from "../Card/Card";
import * as S from "../Petrol/petrol.style";

const RentalRebate = () => {
  return (
    <S.Petrol>
      <S.Container className='container'>
        <S.PetrolTitle>Rental Rebate</S.PetrolTitle>
        <S.PetrolCard>
          {RENTAL_REBATE.map(
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

export default RentalRebate;
