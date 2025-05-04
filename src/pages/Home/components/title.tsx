/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  IContentChildrenProps,
  useContentReturner,
} from "../utils/useContentReturner";
import { NavigationArrow } from "./navigationArrow";

interface IProps {
  fadeOut: boolean;
  currentSection: "academia" | "juridico" | "literatura" | "marketing" | "home";
}

export const Title = (props: IProps) => {
  const content = useContentReturner({ title: props.currentSection });
  const [debouncedContent, setDebouncedContent] =
    useState<IContentChildrenProps>();
  const [debouncedSection, setDebouncedSection] = useState("home");
  const [currentContent, setCurrentContent] =
    useState<IContentChildrenProps["content"][0]>();

  useEffect(() => {
    setTimeout(() => {
      setDebouncedContent(content);
    }, 500);
  }, [content]);

  useEffect(() => {
    setTimeout(() => {
      setDebouncedSection(props.currentSection);
    }, 500);
  }, [props.currentSection]);

  useEffect(() => {
    if (!debouncedContent) {
      return;
    }
    setCurrentContent(content.content[0]);
  }, [debouncedContent]);

  function handleContentChange(direction: "prev" | "next") {
    if (!debouncedContent || !currentContent) return;

    const currentIndex = debouncedContent.content.findIndex(
      (item) => item.title === currentContent.title
    );

    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

    if (newIndex < 0) newIndex = debouncedContent.content.length - 1;
    if (newIndex >= debouncedContent.content.length) newIndex = 0;

    setCurrentContent(debouncedContent.content[newIndex]);
  }

  return (
    <>
      {debouncedSection === "home" ? (
        <section
          className={`home__section ${
            props.fadeOut ? "home__section--fadeOut" : ""
          }`}
        >
          <>
            <h1 className="home__title">portfólio</h1>
            <h2 className="home__subTitle">
              ANA LUÍSA BARZON <br />
              <b>TRADUÇÃO PROFISSIONAL</b>
            </h2>
          </>
        </section>
      ) : (
        <>
          {currentContent && (
            <section className="content">
              <NavigationArrow
                onPress={() => handleContentChange("prev")}
                direction="left"
              />
              <div className="home__content">
                <h1 className="home__contentTitle">{currentContent.title}</h1>
                <div className="home__contentContainer">
                  <div className="content__content">
                    <h2>Texto de partida</h2>
                    {currentContent.originalText}
                  </div>
                  <div className="content__content">
                    <h2>Texto de chegada</h2>
                    {currentContent.translatedText}
                  </div>
                </div>
                {currentContent.reference}
                {currentContent.inFull}
              </div>
              <NavigationArrow
                onPress={() => handleContentChange("next")}
                direction="right"
              />
            </section>
          )}
        </>
      )}
    </>
  );
};
