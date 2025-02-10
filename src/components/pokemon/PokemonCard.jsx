import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { addPokemon, deletePokemon } from "../../redux/slices/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from "react";
import Button from "../common/Button";
import { getTypeColor } from "../../utils/pokemonLabelUtils";

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.3s ease;
  text-align: center;
`;

const Card = styled.li`
  background: linear-gradient(145deg, #ffefba, #ffffff);
  aspect-ratio: 3/4;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  border: 8px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    ${CardContent} {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10%;
  box-sizing: border-box;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`;

const PokemonInfo = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PokemonNumber = styled.span`
  background: ${props => getTypeColor(props.$type)};
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PokemonName = styled.span`
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  color: #333;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Button)`
  background: ${props => props.variant === 'destructive' 
    ? '#ff4757'
    : '#2ed573'};
  border: none;
  color: white;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }
`;

const PokemonCard = ({ pokemon, mode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pokemonStore = useSelector((state) => state.pokemon);
  const { selectedPokemon, selectedIdx } = pokemonStore;
  const [, setLocalStg] = useLocalStorage('selectedPokemon', []);

  useEffect(() => {
    setLocalStg(selectedPokemon)
  }, [selectedPokemon, setLocalStg])

  const addHandler = (e) => {
    e.stopPropagation();
    if (selectedPokemon.some((e) => e.id === pokemon.id)) {
      return toast.warn("같은 포켓몬을 추가할 수 없습니다.👀");
    }
    if (selectedIdx >= 6) {
      return toast.error("더 이상 선택할 수 없습니다.😓");
    }
    dispatch(addPokemon({ ...pokemon }));
    toast.success(`아싸!! "${pokemon.korean_name}"을(를) 잡았다!💪`);
  };

  const deleteHandler = (e) => {
    e.stopPropagation();
    dispatch(deletePokemon({ id: pokemon.id }));
    toast.info(`"${pokemon.korean_name}"을(를) 떠나보냈습니다. 안녕..👋`);
  };

  return (
    <Card
      onClick={() => {
        navigate(`/dex/${pokemon.id}`, { state: pokemon });
      }}
    >
      <PokemonInfo>
        <PokemonNumber $type={pokemon.types[0]}>
          #{pokemon.id.toString().padStart(3, "0")}
        </PokemonNumber>
        <PokemonName>{pokemon.korean_name}</PokemonName>
      </PokemonInfo>
      <ImageContainer>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
      </ImageContainer>
      <CardContent>
        {mode !== "checked" ? (
          <StyledButton variant="primary" onClick={(e) => addHandler(e)}>추가</StyledButton>
        ) : (
          <StyledButton variant="destructive" onClick={(e) => deleteHandler(e)}>삭제</StyledButton>
        )}
      </CardContent>
    </Card>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    img_url: PropTypes.string,
    korean_name: PropTypes.string,
    types: PropTypes.array,
    id: PropTypes.number,
    description: PropTypes.string,
  }),
  mode: PropTypes.string,
};

export default PokemonCard;