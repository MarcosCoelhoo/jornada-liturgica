import React from 'react';
import './App.css';
import dataStages from '../data.json';
import Hero from '../src/components/hero/Hero';
import Stage from './components/stage/Stage';
import logoPascom from './assets/logo-pascom.png';
import brasaoParoquia from './assets/brasao-paroquia.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  // console.log(data);

  React.useEffect(() => {
    Aos.init({
      once: true,
      startEvent: 'load',
      duration: 600,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Hero />

      <main>
        <section className="welcome-section" id="welcome">
          <h2 className="welcome-title" data-aos="fade-right">
            Bem-vindo à Jornada Litúrgica!
          </h2>
          <p
            className="welcome-text"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Neste espaço virtual, convidamos você a explorar a profundidade e a
            beleza da liturgia católica. Da entrada solene aos ritos finais,
            cada parte da missa é uma peça essencial dessa jornada espiritual. A
            Liturgia da Palavra oferece um diálogo divino, enquanto a Liturgia
            Eucarística nos leva ao âmago da celebração, nutrindo-nos para a
            vida diária. Nos Ritos Sacramentais, a graça divina se torna
            tangível. Sinta-se à vontade para participar ativamente dessa
            experiência, e que este espaço virtual seja uma fonte de luz e
            inspiração em sua jornada espiritual. Bem-vindo à{' '}
            <span className="welcome-highlight">Jornada Litúrgica</span>, onde
            cada rito é uma porta de entrada para a compreensão mais profunda da
            fé católica.
          </p>
        </section>

        <ul className="stages-container">
          {dataStages.map((stage, index) => (
            <Stage key={index} data={stage} />
          ))}
        </ul>

        <section className="sponsors">
          <div className="sponsor-image" data-aos="fade-right">
            <a
              href="https://www.facebook.com/paroquiassuncao"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={brasaoParoquia}
                alt="Brasão Paróquia Nossa Senhora da Assunção de Oeiras do Pará"
              />
            </a>
          </div>

          <span className="sponsor-divisor"></span>

          <div className="sponsor-image" data-aos="fade-left">
            <a
              href="https://www.facebook.com/paroquiassuncao"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoPascom} alt="Logo da Pascom de Oeiras do Pará" />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <h2 className="footer-title" data-aos="fade-right">
            Obrigado por chegar até aqui!
          </h2>

          <p className="footer-text" data-aos="fade-right" data-aos-delay="100">
            Ao encerrar esta{' '}
            <span className="footer-highlight">Jornada Litúrgica</span>, espero
            que as explorações virtuais dos ritos sacramentais, permeados pela
            presença de Nossa Senhora, tenham sido enriquecedoras. Que a luz
            encontrada aqui, sob a proteção da{' '}
            <span className="footer-highlight">Virgem Maria</span>, ilumine seus
            dias, inspirando-o a levar consigo as bênçãos e ensinamentos da
            liturgia para o mundo além dessas páginas. Agradecemos por
            compartilhar esta experiência e desejamos que a paz e a graça
            divina, sob o olhar amoroso de Nossa Senhora, estejam sempre
            presentes em sua jornada espiritual.
          </p>
        </div>
      </footer>

      <div className="credits">
        <p className="credits-text">
          Feito por{' '}
          <a
            href="https://www.instagram.com/marcos_dev.jsx/"
            target="_blank"
            rel="noreferrer"
          >
            Marcos Coelho
          </a>{' '}
          🤙
        </p>
      </div>
    </>
  );
}

export default App;
