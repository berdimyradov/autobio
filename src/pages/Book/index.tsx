import { BasePage } from "common/templates/BasePage";
import { BlankPage } from "common/templates/BlankPage";
import { useCallback, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import {
  BackCover,
  BioPageOneBack,
  BioPageOneFront,
  BioPageThreeBack,
  BioPageThreeFront,
  BioPageTwoBack,
  BioPageTwoFront,
  CoverWithSide,
  DedicationPage,
  ISolutionsPage,
  ElinextsPage,
  CiklumsPage,
  SDVsPage,
  LanguagesPage,
  SkillsPage,
} from "./book-pages";
import {
  delayBetweenPageFlipping,
  greetingSpeedMode,
  isGreetingEnabled,
  startPage,
} from "./config";
import { Greeting } from "./Greeting";
import "./styles.css";

function Book() {
  const [isBookVisible, setIsBookVisible] = useState(!isGreetingEnabled);
  const flipBook = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(startPage);
  const [focusPage, setFocusPage] = useState(0);

  const flipNext = () => {
    console.log("Book:onPageAnimationFinished", currentPage);
    if (isGreetingEnabled) {
      setTimeout(() => {
        const controller = flipBook.current.pageFlip().flipController;
        controller.flipNext();
      }, delayBetweenPageFlipping);
    }
  };

  const renderedPageSides = useMemo(() => {
    return [
      <CoverWithSide
        key="0"
        isFocused={currentPage === 0}
        onAnimationFinished={flipNext}
      />,
      <BlankPage key="blank1" />,

      <DedicationPage
        key="dedication1"
        isFocused={currentPage === 1}
        onAnimationFinished={flipNext}
      />,
      <BlankPage key="blank3" />,

      <BioPageOneFront
        key="bio-one-front"
        isFocused={currentPage === 3}
        onAnimationFinished={flipNext}
      />,
      <BioPageOneBack
        key="bio-one-back"
        isFocused={currentPage === 5}
        onAnimationFinished={() => setFocusPage(6)}
      />,

      <BioPageTwoFront
        key="bio-two-front"
        isFocused={focusPage === 6}
        onAnimationFinished={flipNext}
      />,
      <BioPageTwoBack
        key="bio-two-back"
        isFocused={currentPage === 7}
        onAnimationFinished={() => setFocusPage(7)}
      />,

      <BioPageThreeFront
        key="bio-three-front"
        isFocused={focusPage === 7}
        onAnimationFinished={flipNext}
      />,
      <BioPageThreeBack
        key="bio-three-back"
        isFocused={currentPage === 9}
        onAnimationFinished={() => {
          console.log("Crossword:onAnimationFinished", 9);
          setFocusPage(9);
        }}
      />,

      <SkillsPage
        key="skills-front"
        isFocused={focusPage === 9}
        onAnimationFinished={flipNext}
      />,
      <LanguagesPage key="languages" isFocused={currentPage === 11} />,

      <ISolutionsPage key="isolutions" isFocused={true} />,
      <ElinextsPage key="elinext" isFocused={true} />,

      <CiklumsPage key="ciklum" isFocused={true} />,
      <SDVsPage key="sdv" isFocused={true} />,

      <BlankPage key="blank2" />,
      <BackCover key="11" />,
    ];
  }, [currentPage, focusPage]);

  const onFlip = useCallback(({ data }: { data: number }) => {
    setCurrentPage(data);
  }, []);

  console.log("Book", { currentPage, focusPage });
  return (
    <div className="container">
      {isBookVisible ? (
        // @ts-ignore
        <HTMLFlipBook
          ref={flipBook}
          className="book animated"
          width={400}
          height={550}
          showCover={true}
          startPage={startPage}
          // size={"stretch"}
          drawShadow={true}
          flippingTime={1000}
          // usePortrait={false}
          // startZIndex={1}
          // autoSize={true}
          maxShadowOpacity={0.4}
          // mobileScrollSupport={true}
          // clickEventForward={true}
          // useMouseEvents={false}
          // swipeDistance={10}
          showPageCorners={false}
          // disableFlipByClick={false}
          onFlip={onFlip}
        >
          {renderedPageSides}
        </HTMLFlipBook>
      ) : (
        <Greeting
          speedMode={greetingSpeedMode}
          onAnimationFinished={() => setIsBookVisible(true)}
        />
      )}
    </div>
  );
}

export default Book;
