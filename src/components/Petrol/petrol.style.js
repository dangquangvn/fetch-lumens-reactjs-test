import styled from "styled-components";

export const Petrol = styled.section`
  margin: 3rem 0;
`;

export const Container = styled.div``;

export const PetrolTitle = styled.h5`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  padding: 1.625rem 0;
`;

export const PetrolCard = styled.div`
  display: grid !important;
  justify-content: flex-start !important;
  grid-auto-flow: column;
  grid-template-columns: unset;
  column-gap: 2.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: always;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & > * {
    scroll-snap-align: $align;
    width: auto;
  }
`;
