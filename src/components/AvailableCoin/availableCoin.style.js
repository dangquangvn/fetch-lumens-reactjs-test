import styled from "styled-components";

export const AvailableCoin = styled.section`
  background-color: white;
  width: 343px;
  border-radius: 8px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: 2.5rem;
  box-shadow: 0px 12px 18px rgba(23, 23, 37, 0.04);
`;
export const Container = styled.div`
  padding: 1.5rem;
`;
export const AvailableCoinCoin = styled.div`
  p {
    color: var(--grey-text);
    font-size: 14px;
    line-height: 24px;
  }
`;
export const AvailableCoinDesc = styled.div`
  p {
    color: var(--grey-text);
  }

  button {
    padding: 1.125rem 0;
    width: 100%;
    background-color: var(--black-color);
    color: white;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    margin-bottom: 1rem;
  }
`;
export const AvailableCoinBenefit = styled.div`
  display: flex;
  align-content: center;
  padding: 1rem 0;
  a {
    color: var(--blue-link);
    margin-right: 9px;
  }
`;
export const AvailableCoinHeader = styled.p``;
export const AvailableCoinNumber = styled.div`
  font-size: 3rem;
  letter-spacing: -0.5px;
`;
export const AvailableCoinLine = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  background-color: var(--grey-color);
  margin: 33px auto;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: 65%;
    background-color: var(--blue-dark-color);
  }
`;
export const AvailableCoinDate = styled.p`
  text-align: center;
  font-size: 14px;
`;
