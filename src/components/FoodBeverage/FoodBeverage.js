import React from "react";
import { FOOD_BEVERAGE } from "../../data/data";
import Card from "../Card/Card";
import * as S from "../Petrol/petrol.style";

const FoodBeverage = () => {
  return (
    <S.Petrol>
      <S.Container className='container'>
        <S.PetrolTitle>Food and Beverage</S.PetrolTitle>
        <S.PetrolCard>
          {FOOD_BEVERAGE.map(
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

export default FoodBeverage;
