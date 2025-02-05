import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonContext";

const Card = styled.li`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background: #f5f5f5;
  flex:1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CardContent = styled.div`
  padding: 16px;
`;

const PokemonName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
`;

const StatsContainer = styled.div`
  font-size: 0.875rem;
  color: #666;
`

const AddButton = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 12px;
  border-radius: 8px;
  background: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: #388E3C;
  }
`;
const DeleteButton = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 12px;
  border-radius: 8px;
  background: #ff6347;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: #b34532;
  }
`;

const PokemonCard = ({pokemon, mode}) => {
  const {selectedPokemon,
        selectedIdx,
        setSelectedPokemon,
        setSelectedIdx} = useContext(PokemonContext);
  const navigate = useNavigate();
  const addHandler = (e) => {
    e.stopPropagation();
     if(selectedIdx >= 6){
      return alert('더 이상 포켓몬을 추가할 수 없습니다.');
    }
    if(selectedPokemon.some(e => e.id === pokemon.id)){
      return alert('같은 포켓몬을 추가할 수 없습니다.');
    }
    setSelectedPokemon(selectedPokemon.map((e,i) => i === selectedIdx ? pokemon : e))
    setSelectedIdx(prev => prev + 1);
  }
  const deleteHandler = (e) => {
    e.stopPropagation();
    const deleteIdx = selectedPokemon.findIndex(e => e.id === pokemon.id);
    setSelectedPokemon(prev => {
      const filtered = prev.filter(e => e.id !== pokemon.id);
      
      while (filtered.length < 6) {
        filtered.push("");
      }
      
      return filtered;
    });
    if(deleteIdx < selectedIdx){
      setSelectedIdx(pre => pre - 1);
    }
  }
  return (
    <Card onClick={() => {
            navigate(`/dex/${pokemon.id}`, {state: pokemon})
          }}>
      <ImageContainer>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
      </ImageContainer>
      <CardContent>
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <StatsContainer>
          No. {pokemon.id.toString().padStart(3, "0")}
        </StatsContainer>
        {
          mode !== "checked" ? 
          <AddButton onClick={(e) => addHandler(e)}>추가</AddButton>
          :
          <DeleteButton onClick={(e) => deleteHandler(e)}>삭제</DeleteButton>
        }
      </CardContent>
    </Card>
  )
}

PokemonCard.propTypes = {
  pokemon : PropTypes.shape({
    img_url: PropTypes.string,
    korean_name: PropTypes.string,
    types: PropTypes.array,
    id: PropTypes.number,
    description: PropTypes.string
  }),
  mode: PropTypes.string
}

export default PokemonCard