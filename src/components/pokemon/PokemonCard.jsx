import styled from "styled-components";
import PropTypes from "prop-types";

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

  &:disabled {
    background: #ccc;
  }
`;

const PokemonCard = ({pokemon, addPokemon}) => {
  return (
    <Card>
      <ImageContainer>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
      </ImageContainer>
      <CardContent>
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <StatsContainer>
          No. {pokemon.id.toString().padStart(3, "0")}
        </StatsContainer>
        <AddButton onClick={addPokemon}>추가</AddButton>
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
  addPokemon: PropTypes.func
}

export default PokemonCard