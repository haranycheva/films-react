import { HeaderWrapp, NavList, StyledNavLink } from "./Header.styled";

export function Header() {
  return (
    <HeaderWrapp>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/">main</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="genres">genres</StyledNavLink>
          </li>
        </NavList>
      </nav>
    </HeaderWrapp>
  );
}
