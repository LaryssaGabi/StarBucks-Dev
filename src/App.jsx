/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

import StarbuckVerde from './img/img1.png'
import StarbuckRosa from './img/img2.png'
import StarbuckRosaGranulado from './img/img3.png'
import Logo from './img/logo.png'
import MiniVerde from './img/thumb1.png'
import MiniRosa from './img/thumb2.png'
import MiniRosaGranulado from './img/thumb3.png'
import { CaixaConteudo, CaixaImagem, CaixaMenu, CaixaTexto, ContainerCirculo, Header, LogoStar, Main } from './components/styler';

function App() {

  const [cor, setCor] = useState('#017143');
  const [imagem, setImagem] = useState(StarbuckVerde);

  const trocarACor = (novaCor) => {
    setCor(novaCor);
  };

  const trocarImagem = (endereco) => {
    setImagem(endereco);
  };

  return (
    <>
      <Header>
        <LogoStar src={Logo} alt="Logo Starbucks" />
      </Header>
      <ContainerCirculo style={{ backgroundColor: cor }}></ContainerCirculo>

      <Main>
        <CaixaConteudo >
          <CaixaTexto>
            <h2>
              It's not just Coffee
              It's <span>Starbucks</span>
            </h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit ab voluptas veritatis...</p>

            <button>Saiba mais</button>
          </CaixaTexto>


          <CaixaImagem >
            <img src={imagem} className="copo" alt="Copo Starbucks" />
          </CaixaImagem>
        </CaixaConteudo>

        <CaixaMenu>
          <img
            src={MiniVerde}
            onClick={() => {
              trocarACor('#017143');
              trocarImagem(StarbuckVerde);
            }}
            alt="Thumb 1"
          />
          <img
            src={MiniRosa}
            onClick={() => {
              trocarACor('#eb7495');
              trocarImagem(StarbuckRosa);
            }}
            alt="Thumb 2"
          />
          <img
            src={MiniRosaGranulado}
            onClick={() => {
              trocarACor('#d752b1');
              trocarImagem(StarbuckRosaGranulado);
            }}
            alt="Thumb 3"
          />
        </CaixaMenu>
      </Main>
    </>
  );
}

export default App;
