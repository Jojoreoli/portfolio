import { useEffect, useState } from "react";
import { NavBar } from "./components/navBar";
import { AnimatedGrid } from "./components/animatedGrid";
import { Title } from "./components/title";
import { Footer } from "./components/footer";

export const Home = () => {
  const [fadeOutContent, setFadeOutContent] = useState(false);
  const [currentSection, setCurrentSection] = useState<
    "academia" | "juridico" | "literatura" | "marketing" | "home"
  >("home");

  useEffect(() => {
    setTimeout(() => {
      setFadeOutContent(false);
    }, 700);
  }, [fadeOutContent]);

  const handleNavClick = (
    option: "academia" | "juridico" | "literatura" | "marketing" | "home"
  ) => {
    setFadeOutContent(true);
    setCurrentSection(option);
  };

  return (
    <main className="home">
      <AnimatedGrid />
      <NavBar handleNavClick={handleNavClick} />
      <Title currentSection={currentSection} fadeOut={fadeOutContent} />
      <Footer />
    </main>
  );
};
