import styled from "styled-components";
import PokemonCard from "../pokemon/PokemonCard";
import { useSelector } from "react-redux";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from "react";

const DashBoardWrapper = styled.div`
  width: 100%;
  background: white;
  border-radius: 20px;
  padding: 1rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    #ff424d 0%,
    #ff424d 48%,
    #1a1a1a 48%,
    #1a1a1a 52%,
    #ffffff 52%,
    #ffffff 100%
  );

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: white;
    border: 8px solid #1a1a1a;
    border-radius: 50%;
    z-index: 1;
  }
`;

const DashBoardMainText = styled.h2`
  font-size: 1.75rem;
  color: #fff;
  margin-bottom: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CaptureArea = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  width: 100%;

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
`;

const PokeMonBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  border: 2px dashed #ced4da;
  transition: all 0.3s ease;
  cursor: pointer;

  /* 마지막 줄 2개 아이템을 중앙으로 */
  &:nth-last-child(2) {
    grid-column: 2 / 3;
  }

  &:last-child {
    grid-column: 3 / 4;
  }

  &::before {
    content: "+";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    color: #adb5bd;
    font-weight: 300;
  }

  &:hover {
    border-color: #4a90e2;
    background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%);

    &::before {
      color: #4a90e2;
    }
  }
`;

// 컴포넌트에 애니메이션 추가
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
              <div
                key={pokemon.id}
                style={{ animation: `fadeIn 0.5s ease ${i * 0.1}s` }}
              >
                <PokemonCard pokemon={pokemon} mode="checked" />
              </div>
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
