import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 99;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  color: ${props => props.$isActive ? '#4CAF50' : '#333'};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? '600' : '400'};
`;

const Header = () => {
  const location = useLocation();
  return (
    <HeaderWrapper>
      <Nav>
        <NavLink to="/" $isActive={location.pathname === "/"}>
          PokeMon
        </NavLink>
        <NavLink to="/dex" $isActive={location.pathname === "/dex"}>
          도감
        </NavLink>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header