import { Link } from "react-router-dom";
import styled from "styled-components";
import PokemonBall from "../components/pokemon/PokemonBall";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 20px;
  height: calc(100vh - 160px);
  box-sizing: border-box;
`;
const TextSection = styled.div`
 color: #fff;
 word-break: keep-all;
`;

const MainText = styled.h1`
 font-size: 3.5rem;
 font-weight: 700;
 line-height: 1.5;
 margin-bottom: 2rem;

 @media (max-width: 1200px) {
   font-size: 3rem;
 }

 @media (max-width: 1024px) {
   font-size: 2.75rem;
 }

 @media (max-width: 768px) {
   font-size: 2.5rem;
 }

 @media (max-width: 480px) {
   font-size: 2rem;
 }
`;

const SubText = styled.p`
 font-size: 1.25rem;
 line-height: 1.5;
 margin-bottom: 2rem;

 @media (max-width: 1200px) {
   font-size: 1.2rem;
 }

 @media (max-width: 1024px) {
   font-size: 1.15rem;
 }

 @media (max-width: 768px) {
   font-size: 1.1rem;
 }

 @media (max-width: 480px) {
   font-size: 1rem;
   br {
     display: none; // 모바일에서는 줄바꿈 제거
   }
 }
`;

const StartBtn = styled(Link)`
 text-decoration: none;
 border-radius: 12px;
 border: none;
 padding: 1rem 2rem;
 font-weight: 600;
 background-color: red;
 font-size: 1.125rem;
 line-height: 55px;
 color: #fff;
 cursor: pointer;
 transition: transform 0.2s;

 @media (max-width: 768px) {
   font-size: 1rem;
   padding: 0.875rem 1.75rem;
   line-height: 45px;
 }

 @media (max-width: 480px) {
   font-size: 0.875rem;
   padding: 0.75rem 1.5rem;
   line-height: 40px;
 }

 &:hover {
   transform: translateY(-2px);
 }
`;
const ImageSection = styled.div`
  position: relative;
  padding: 2rem;

  @media (max-width: 1200px) {
    padding: 1.5rem;
  }

  @media (max-width: 1024px) {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const PokeBall = styled.div`
  animation: float 3s ease-in-out infinite;
  transform-origin: center center;
  
  @media (max-width: 1024px) {
    animation-duration: 2.5s;
  }
`;
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  text-align: left;

  @media (max-width: 1024px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    text-align: center;

    ${TextSection} {
      order: 2; /* 아래로 이동 */
    }
    ${ImageSection} {
      order: 1; /* 위로 이동 */
    }
  }
  @media (max-width: 768px){
    grid-template-columns: 1fr;
  }
`;
const Home = () => {
  return (
    <HomeContainer>
      <ContentWrapper>
        <TextSection>
          <MainText>
            포켓몬 마스터의
            <br />
            여정이 시작됩니다
          </MainText>
          <SubText>
            당신만이 특별한 포켓몬 도감을 만들어 보세요.
            <br />약 150종 가량의 포켓몬들이 당신을 기다리고 있습니다
          </SubText>
          <StartBtn to="/dex">포켓몬 도감 시작하기</StartBtn>
        </TextSection>
        <ImageSection>
          <PokeBall>
            <PokemonBall />
          </PokeBall>
        </ImageSection>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;
