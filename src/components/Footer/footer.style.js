import styled from "styled-components";

export const Footer = styled.footer`
  padding: 1.25rem 1.5625rem 2.25rem;
  border: 2px solid #e2e2ea; ;
`;
export const FooterMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FooterItem = styled.li`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.bell-icon {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 2px;
      right: 5px;
      width: 12px;
      height: 12px;
      background-color: var(--red-color);
      border-radius: 50%;
    }
  }
`;
