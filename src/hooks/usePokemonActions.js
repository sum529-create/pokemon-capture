import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { addPokemon, deletePokemon } from "../redux/slices/pokemonSlice";
import { POKEMON_MAX_COUNT } from "../constants/pokemon";

export const usePokemonActions = (pokemon) => {
  const dispatch = useDispatch();
  const pokemonStore = useSelector((state) => state.pokemon);
  const { selectedPokemon, selectedIdx } = pokemonStore;
  const [, setLocalStg] = useLocalStorage("selectedPokemon", []);

  useEffect(() => {
    setLocalStg(selectedPokemon);
  }, [selectedPokemon, setLocalStg]);

  const addHandler = (e) => {
    e.stopPropagation();
    if (selectedPokemon.some((e) => e.id === pokemon.id)) {
      return toast.warn("같은 포켓몬을 추가할 수 없습니다.👀");
    }
    if (selectedIdx >= POKEMON_MAX_COUNT) {
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

  return { addHandler, deleteHandler };
};
