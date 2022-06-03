import { useEffect } from 'react';

import bg from '../../images/bg.webp';

import * as uiService from '../../services/ui';

const Home = () => {

  useEffect(() => {
    window.onload = function () {
      uiService.showDarkHeader();
    }
  }, []);

  return (
    <div className="home">
      <img src={bg} alt="bg" />
      <div className="home__title">
        <h1>Quer viajar mas não sabe onde ficar?</h1>
        <h1>Excelente, veio ao lugar certo</h1>
        <div className="home__button-container">
          <button>Pesquisar</button>
        </div>
      </div>
    </div>
  )
};

export default Home;