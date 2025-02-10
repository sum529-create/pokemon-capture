import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { addPokemon, deletePokemon } from "../../redux/slices/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from "react";
import Button from "../common/Button";

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: rgba(255, 255, 255, 0.95); // 반투명 배경
  transform: translateY(100%); // 처음에는 숨김
  opacity: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px); // 배경 블러 효과
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Card = styled.li`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
  position: relative; // 자식 요소의 absolute 포지셔닝을 위해 추가

  &:hover {
    transform: translateY(-4px);
    
    ${CardContent} {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background: #f5f5f5;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const PokemonName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
`;

const StatsContainer = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 8px;
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
      <ImageContainer>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
      </ImageContainer>
      <CardContent>
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <StatsContainer>
          No. {pokemon.id.toString().padStart(3, "0")}
        </StatsContainer>
        {mode !== "checked" ? (
          <Button variant="primary" onClick={(e) => addHandler(e)}>추가</Button>
        ) : (
          <Button variant="destructive" onClick={(e) => deleteHandler(e)}>삭제</Button>
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
