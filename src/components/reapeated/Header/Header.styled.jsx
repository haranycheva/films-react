import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapp = styled.header`
  background-color: #011627;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 15px 21px;
  color: #fff;
  font-size: 24px;
  &.active, &:hover{
    background-color: #2EC4B6;
  }
`;

export const NavList = styled.ul`
display: flex;
justify-content: end;
`;

