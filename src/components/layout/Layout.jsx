import { Outlet } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Header from "./Header";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  animation: ${fadeIn} 0.5s ease-out;
  /* 헤더의 다크 네이비(#1e293b)와 어울리는 그라데이션 */
  background: linear-gradient(-45deg, #1e293b, #2563eb, #0ea5e9, #38bdf8);
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease infinite;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='30' cy='30' r='28' stroke='rgba(255,255,255,0.05)' stroke-width='4'/%3E%3Ccircle cx='30' cy='30' r='10' fill='rgba(255,255,255,0.05)'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.2;
    z-index: 0;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 80px);
  position: relative;
  background: rgba(30, 41, 59, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(14, 165, 233, 0.15) 0%, transparent 70%),
                radial-gradient(circle at bottom left, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <Content>
          <Outlet />
        </Content>
      </Main>
    </LayoutWrapper>
  );
};

export default Layout;