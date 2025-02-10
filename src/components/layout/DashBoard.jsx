import styled from "styled-components";
import PokemonCard from "../pokemon/PokemonCard";
import { useSelector } from "react-redux";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from "react";

const DashBoardWrapper = styled.div`
  width: 100%;
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    #ff424d 0%,
    #ff424d 90px,
    #1a1a1a 90px,
    #1a1a1a 100px,
    #ffffff 100px,
    #ffffff 100%
  );

  &::before {
    content: "";
    position: absolute;
    top: 95px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background: white;
    border: 8px solid #1a1a1a;
    border-radius: 50%;
    z-index: 1;
  }
`;

const DashBoardMainText = styled.h2`
  font-size: 1.75rem;
  color: #fff;
  margin-bottom: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CaptureArea = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  width: 100%;
  min-height: 200px; // 최소 높이 설정
  padding-top: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  animation: fadeIn 0.5s ease forwards;
  opacity: 0;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation-delay: ${props => props.$delay}s;
`;

const PokeMonBox = styled.div`
  position: relative;
  aspect-ratio: 3/4; // 빈 박스도 같은 비율 유지
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  border: 2px dashed #ced4da;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;

  @media (max-width:1024px) and (min-width:768px){
    &:nth-last-child(2) {
      grid-column: 2 / 3;
    }

    &:last-child {
      grid-column: 3 / 4;
    }
  }

  &::before {
    content: "+";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    color: #adb5bd;
    font-weight: 300;
  }

  &:hover {
    border-color: #ff424d;
    background: linear-gradient(135deg, #f8f9fa 0%, #fff5f5 100%);

    &::before {
      color: #ff424d;
    }
  }
`;

const Dashboard = () => {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const [, setLocalStg] = useLocalStorage('selectedPokemon', []);
  
  useEffect(() => {
    setLocalStg(selectedPokemon)
  }, [selectedPokemon, setLocalStg])

  return (
    <DashBoardWrapper>
      <DashBoardMainText>나만의 포켓몬</DashBoardMainText>
      <CaptureArea>
        {selectedPokemon.map((pokemon, i) => {
          if (pokemon?.id) {
            return (
              <CardWrapper key={pokemon.id} $delay={i * 0.1}>
                <PokemonCard pokemon={pokemon} mode="checked" />
              </CardWrapper>
            );
          } else {
            return <PokeMonBox key={i.toString().padStart(2, "0")} />;
          }
        })}
      </CaptureArea>
    </DashBoardWrapper>
  );
};

export default Dashboard;