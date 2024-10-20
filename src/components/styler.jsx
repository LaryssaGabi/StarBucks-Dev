import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const LogoStar = styled.img`
  width: 80px;
`;

export const ContainerCirculo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #017143;
  clip-path: circle(600px at right 800px);
  z-index: -1;
`;

export const Main = styled.main`
  padding-left: 100px;
  padding-right: 100px;

`;

export const CaixaConteudo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1900px) {
height: 68vh;
}
`;

export const CaixaTexto = styled.div`
  width: 600px;

  h2 {
    color: #333333;
    font-size: 60px;
    font-weight: 600;

    span {
      color: #017143;
      font-weight: 900;
      font-size: 70px;
    }
  }

  p {
    font-size: 16px;
  }

  button {
    background-color: #017143;
    color: #ffffff;
    border-radius: 12px;
    padding: 10px;
    border: none;
    width: 10vw;
    cursor: pointer;
    margin-top: 30px;
    font-size: 1rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.4s ease;

    &:hover {
      background-color: #008a51;
      color: #000;
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
      transform: scale(1.05); 
    }
}
`;

export const CaixaImagem = styled.div`
  width: 600px;
  display: flex;
  justify-content: flex-end;
  margin-top: 200px;

  .copo {
    width: 340px;
  }
`;

export const CaixaMenu = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 80px;
    cursor: pointer;
    margin: 10px;
    transition: transform 1s;

    &:hover {
      transform: translateY(-25px);
    }
  }
`;