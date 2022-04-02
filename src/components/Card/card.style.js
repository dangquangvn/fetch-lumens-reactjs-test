import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #f1f1f5;
  box-shadow: 0px 12px 18px rgba(23, 23, 37, 0.04);
  border-radius: 4px;
  width: 200px;
`;
export const CardImage = styled.div`
  width: 199px;
  height: 98px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CardContent = styled.div`
  padding: 1rem;
`;
export const CardTitle = styled.h5`
  font-weight: 600;
  color: ${({ titleColor }) =>
    titleColor ? titleColor : "var(--blue-dark-color)"};
  font-size: 16px;
  display: flex;
  align-items: center;
  span {
    margin-right: 4px;
  }
`;
export const CardDesc = styled.div`
  color: #92929d;
  line-height: 24px;
  padding: 8px 0;
`;
export const CardLink = styled.a`
  color: var(--blue-link);
  font-size: 14px;
  line-height: 20px;
`;
