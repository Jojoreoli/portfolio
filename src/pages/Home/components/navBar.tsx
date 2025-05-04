import { useEffect, useState } from "react";

interface IProps {
  handleNavClick: (
    content: "academia" | "juridico" | "literatura" | "marketing" | "home"
  ) => void;
}

export const NavBar = (props: IProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    setTimeout(() => {
      if (isExpanded) {
        setIsExpanded(false);
      }
    }, 1000);
  }, [isExpanded]);

  function handleButtonClick(
    title: "academia" | "juridico" | "literatura" | "marketing" | "home"
  ) {
    if (isExpanded) {
      return;
    }
    setIsExpanded(true);
    setActiveSection(title);
    props.handleNavClick(title);
  }

  return (
    <>
      <nav className={`home__nav`}>
        <button
          className={`home__navButton ${
            activeSection === "academia" ? "active" : ""
          }`}
          onClick={() => {
            handleButtonClick("academia");
          }}
        >
          acadêmico-científica
        </button>
        {/* <button
          className="home__navButton"
          onClick={() => {
            handleButtonClick("juridico");
          }}
        >
          jurídica
        </button> */}
        <button
          className={`home__navButton ${
            activeSection === "literatura" ? "active" : ""
          }`}
          onClick={() => {
            handleButtonClick("literatura");
          }}
        >
          literária
        </button>
        {/* <button
          className="home__navButton"
          onClick={() => {
            handleButtonClick("marketing");
          }}
        >
          publicitária
        </button> */}
      </nav>
      <div
        className={`home__navMock ${
          isExpanded ? "home__navMock--expanded" : ""
        }`}
      ></div>
    </>
  );
};
