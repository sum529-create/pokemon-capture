import styled from "styled-components";

const PokeBall = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1200px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 1024px) {
    width: 160px;
    height: 160px;
  }

  &::before {
    content: "";
    background-color: red;
    border-radius: 150px 150px 0 0;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 50%;
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 50%;
    background-color: #fff;
    border-radius: 0 0 150px 150px;
  }
  
  .line {
    width: 100%;
    height: 10px;
    background-color: #000;
    z-index: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 1200px) {
      height: 9px;
    }

    @media (max-width: 1024px) {
      height: 8px;
    }
  }
  
  .ball {
    width: 20%;
    height: 20%;
    background-color: #fff;
    position: absolute;
    border-radius: 50%;
    z-index: 3;
    border: 10px solid #000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 1200px) {
      border-width: 9px;
    }

    @media (max-width: 1024px) {
      border-width: 8px;
    }
  }
`;

const PokemonBall = () => {
  return (
    <PokeBall>
      <div className="line" />
      <div className="ball" />
    </PokeBall>
  );
};

export default PokemonBall;
