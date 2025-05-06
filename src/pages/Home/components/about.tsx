import { Footer } from "./footer";
import phoneIcon from "../../../assets/phone.png";
import mailIcon from "../../../assets/email.png";
import { LinkedinLogo } from "../../../assets/linkedin";

interface IProps {
  isOpen: boolean;
  close: () => void;
}

export const About = (props: IProps) => {
  return (
    <>
      <button
        onClick={props.close}
        className={`closeButton ${props.isOpen ? "" : "hidden"}`}
      >
        X
      </button>
      <section className={`about ${props.isOpen ? "--open" : ""}`}>
        <h1 className="about__title">SOBRE MIM</h1>
        <div className="about__introSection">
          <div className="about__introContent">
            <p className="about__intro">
              Como tradutora, pretendo contribuir com a democratização do acesso
              a conteúdos literários e lúdicos estrangeiros, por meio de
              traduções e localizações de qualidade, além de aprender sobre o
              mercado de tradução e revisão e desenvolver as habilidades
              exigidas pelo mesmo.
            </p>
            <div className="about__section">
              <h2 className="about__sectionTitle">FORMAÇÃO</h2>
              <p className="about__SectionContent">
                Bacharel em Letras Português e Inglês pela Pontifícia
                Universidade Católica de Campinas
              </p>
            </div>
          </div>
          <img
            className="about__image"
            src="https://media.licdn.com/dms/image/v2/D4E03AQFKSGyDk1Qg_w/profile-displayphoto-shrink_800_800/B4EZai5FK0HcAg-/0/1746489595796?e=1752105600&v=beta&t=XWGzzRGGsAOR-fSWpUgzKEGp3fxijmQ55Q65S6bJKR0"
          />
        </div>

        <div className="about__contact">
          <div className="about__contactContainer">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ana-lu%C3%ADsa-zanco-barzon-8b52a8207/"
            >
              <LinkedinLogo />
            </a>
          </div>
          <div className="about__contactContainer">
            <img src={phoneIcon} />
            <a target="_blank" href="tel:+5519997043189">
              (19) 997043189
            </a>
          </div>
          <div className="about__contactContainer">
            <img src={mailIcon} />
            <a target="_blank" href="mailto:anabarzon@gmail.com">
              anabarzon@gmail.com
            </a>
          </div>
        </div>
        <Footer onClick={() => props.close()} />
      </section>
    </>
  );
};
