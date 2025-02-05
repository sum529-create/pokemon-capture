import styled from "styled-components"
import PropTypes from "prop-types";
import PokemonCard from "../pokemon/PokemonCard";

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
const DashBoardMainText = styled.h2`
  font-size: 2rem;
  color: red;
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
const Dashboard = ({selectedPokemon, deletePokemon}) => {
  
  return (
    <DashBoardWrapper>
      <DashBoardMainText>나만의 포켓몬</DashBoardMainText>
      <CaptureArea>
        {
          selectedPokemon.map((pokemon, i) => 
            {if(pokemon?.id){
              return <PokemonCard key={pokemon.id} pokemon={pokemon} deletePokemon={deletePokemon} />
            }else {
              return <PokeMonBox key={i.toString().padStart(2,"0")}/>
            }}
          )
        }
      </CaptureArea>
    </DashBoardWrapper>
  )
}
Dashboard.propTypes = {
  selectedPokemon: PropTypes.array,
  deletePokemon: PropTypes.func
}

export default Dashboard