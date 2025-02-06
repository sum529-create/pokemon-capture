import styled from "styled-components";

const PokeBall = styled.div`
  width: 200px;
  height: 200px;
  margin:0 auto;
  position: relative;

  &::before{
    content: '';
    background-color: red;
    border-radius: 150px 150px 0 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 50%;
  }
  &::after{
    content: '';
    position: absolute;
    bottom:0;
    width: 100%;
    height: 50%;
    background-color: #FFF;
    border-radius: 0 0 150px 150px;
  }
  .line{
    width: 100%;
    height: 10px;
    background-color: #000;
    z-index: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .ball{
    width:20%;
    height:20%;
    background-color: #FFF;
    position: absolute;
    border-radius: 50%;
    z-index: 3;
    border: 10px solid #000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const PokemonBall = () => {
  return(
    <PokeBall>
      <div className="line"/>
      <div className="ball"/>
    </PokeBall>
  )
}

export default PokemonBall