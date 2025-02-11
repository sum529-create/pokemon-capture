import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { getTypeColor } from "../utils/pokemonLabelUtils";
import { usePokemonActions } from "../hooks/usePokemonActions";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const DetailCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const ImageSection = styled.div`
  background: #f8f9fa;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    object-fit: contain;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PokemonName = styled.h3`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
  color: #333;
`;

const TypesContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const TypeBadge = styled.span`
  background: ${(props) => getTypeColor(props.$type)};
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin: 0;
`;

const DexDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pokemonInfo = location.state;
  const {addHandler} = usePokemonActions(pokemonInfo);

  const onBackPage = () => {
    navigate("/dex");
  };
  const addDataHandler = (e) => {
    addHandler(e);
    navigate("/dex");
  };

  return (
    <PageContainer>
      <DetailCard>
        <ImageSection>
          <img src={pokemonInfo.img_url} alt={pokemonInfo.korean_name} />
        </ImageSection>
        <InfoSection>
          <PokemonName>{pokemonInfo.korean_name}</PokemonName>
          <TypesContainer>
            {pokemonInfo.types.map((type, i) => (
              <TypeBadge key={i} $type={type}>
                {type}
              </TypeBadge>
            ))}
          </TypesContainer>
          <Description>{pokemonInfo.description}</Description>
          <div>
            <Button variant="secondary" onClick={onBackPage}>뒤로가기</Button>
            <Button variant="primary" onClick={addDataHandler}>추가</Button>
          </div> 
        </InfoSection>
      </DetailCard>
    </PageContainer>
  );
};

export default DexDetail;
