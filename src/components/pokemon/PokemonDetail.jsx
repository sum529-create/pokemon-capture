import styled from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";

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
  background: #F8F9FA;
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
  background: ${props => {
    switch (props.$type) {
      case '노말': return '#A8A878';
      case '불꽃': return '#F08030';
      case '물': return '#6890F0';
      case '전기': return '#F8D030';
      case '풀': return '#78C850';
      case '얼음': return '#98D8D8';
      case '격투': return '#C03028';
      case '독': return '#A040A0';
      case '땅': return '#E0C068';
      case '비행': return '#A890F0';
      case '에스퍼': return '#F85888';
      case '벌레': return '#A8B820';
      case '바위': return '#B8A038';
      case '고스트': return '#705898';
      case '드래곤': return '#7038F8';
      case '악': return '#705848';
      case '강철': return '#B8B8D0';
      case '페어리': return '#EE99AC';
      default: return '#68A090';
    }
  }};
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

const BackButton = styled.button`
  background: #4A90E2;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 20px;

  &:hover {
    background: #357ABD;
  }
`;

const PokemonDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pokemonInfo = location.state;
  
  const onBackPage = () => {
    navigate('/dex')
  }

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
              <TypeBadge key={i} $type={type}>{type}</TypeBadge>
            ))}
          </TypesContainer>
          <Description>{pokemonInfo.description}</Description>
          <BackButton onClick={onBackPage}>뒤로가기</BackButton>
        </InfoSection>
      </DetailCard>
    </PageContainer>
  )
}

export default PokemonDetail;