import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 99;
  background: #1e293b;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
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

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &::before {
    content: "";
    width: 24px;
    height: 24px;
    background: linear-gradient(
      135deg,
      #ff424d 0%,
      #ff424d 42%,
      #1a1a1a 42%,
      #1a1a1a 58%,
      #ffffff 58%,
      #ffffff 100%
    );
    border-radius: 50%;
  }
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const DexLink = styled(Link)`
  color: ${(props) => (props.$isActive ? "#38BDF8" : "#94A3B8")};
  background: ${(props) =>
    props.$isActive ? "rgba(56, 189, 248, 0.1)" : "none"};
  text-decoration: none;
  font-weight: ${(props) => (props.$isActive ? "600" : "500")};
  font-size: 1.1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  /* 포켓볼 아이콘 */
  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: linear-gradient(
      135deg,
      #ff424d 0%,
      #ff424d 42%,
      #1a1a1a 42%,
      #1a1a1a 58%,
      #ffffff 58%,
      #ffffff 100%
    );
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.1);

    &::before {
      transform: rotate(180deg);
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo to="/">PokeMon Capture</Logo>
        <NavLink>
          <DexLink to="/dex" $isActive={location.pathname === "/dex"}>
            도감
          </DexLink>
        </NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
