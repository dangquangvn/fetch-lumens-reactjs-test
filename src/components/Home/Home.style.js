import styled from "styled-components";

export const Hero = styled.section`
  background-color: var(--black-color);
  height: 25rem;
  padding-top: 3rem;
  margin-bottom: 16.5rem;
`;
export const Container = styled.div``;
export const ArrowIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeroContent = styled.div`
  margin-top: 1rem;
  h3 {
    font-size: 2rem;
    color: white;
    font-weight: 600;
  }
  p {
    line-height: 24px;
    letter-spacing: -0.005rem;
    color: var(--grey-text);
    font-size: 16px;
    margin-top: 0.5rem;
  }
`;
