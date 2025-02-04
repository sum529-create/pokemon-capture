import { useState } from "react"
import styled from "styled-components"

const DashBoardWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 2rem;
`
const CaptureArea = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  width: 100%;
  justify-content: center;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const PokeMonBox = styled.div`
  background-color: #eee;
  width: 80%;
  padding-bottom: 80%;
  height: 0;
  border: 3px dashed gray;
`
const Dashboard = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(['A', 'B', 'C', 'D', 'E', 'F'])
  return (
    <DashBoardWrapper>
      <h2>나만의 포켓몬</h2>
      <CaptureArea>
        {
          selectedPokemon.map((_, i) => (
            <PokeMonBox key={i}/>
          ))
        }
      </CaptureArea>
    </DashBoardWrapper>
  )
}

export default Dashboard