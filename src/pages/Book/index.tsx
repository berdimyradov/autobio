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
  DedicationPage, LanguagessPage, SkillsPage
} from "./book-pages";
import {
  delayBetweenPageFlipping,
  isGreetingEnabled,
  startPage
} from "./config";
import { Greeting } from "./Greeting";
import "./styles.css";

function Book() {
  const [isBookVisible, setIsBookVisible] = useState(!isGreetingEnabled);
  const flipBook = useRef<any>(null);
  const pages = useMemo(() => {
    return [
      {
        front: <h1>Front 1</h1>,
        back: <h1>Back 1</h1>,
      },
      {
        front: <h1>Front 2</h1>,
        back: <h1>Back 2</h1>,
      },
      {
        front: <h1>Front 3</h1>,
        back: <h1>Back 3</h1>,
      },
      {
        front: <h1>Front 4</h1>,
        back: <h1>Back 4</h1>,
      },
      {
        front: <h1>Front 5</h1>,
        back: <h1>Back 5</h1>,
      },
      // {
      //   front: <h1>Front 6</h1>,
      //   back: <h1>Back 5</h1>,
      // },
      // {
      //   front: <h1>Front 7</h1>,
      //   back: <h1>Back 7</h1>,
      // },
      // {
      //   front: <h1>Front 8</h1>,
      //   back: <h1>Back 8</h1>,
      // },
      // {
      //   front: <h1>Front 9</h1>,
      //   back: <h1>Back 9</h1>,
      // },
      // {
      //   front: <h1>Front 10</h1>,
      //   back: <h1>Back 10</h1>,
      // },
    ];
  }, []);
  const [currentPage, setCurrentPage] = useState(startPage);

  const flipNext = () => {
    console.log("Book:onPageAnimationFinished ", currentPage);
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
        isVisible={currentPage === 0}
        onAnimationFinished={flipNext}
      />,
      <BlankPage key="blank1" color="#FBFBF8" />,

      <DedicationPage
        key="dedication1"
        isVisible={currentPage === 1}
        onAnimationFinished={flipNext}
      />,
      <BlankPage key="blank3" color="#FBFBF8" />,

      <BioPageOneFront
        key="bio-one-front"
        isVisible={currentPage === 3}
        onAnimationFinished={flipNext}
      />,
      <BioPageOneBack
        key="bio-one-back"
        isVisible={currentPage === 5}
        onAnimationFinished={() => {
          console.log("BioPageBack:onAnimationFinished");
        }}
      />,

      <BioPageTwoFront
        key="bio-two-front"
        isVisible={currentPage === 5}
        onAnimationFinished={flipNext}
      />,
      <BioPageTwoBack
        key="bio-two-back"
        isVisible={currentPage === 7}
        onAnimationFinished={() => {
          console.log("BioPageTwoBack:onAnimationFinished");
        }}
      />,

      <BioPageThreeFront
        key="bio-three-front"
        isVisible={currentPage === 7}
        onAnimationFinished={flipNext}
      />,
      <BioPageThreeBack
        key="bio-three-back"
        isVisible={currentPage === 9}
        onAnimationFinished={() => {
          console.log("BioPageTwoBack:onAnimationFinished");
        }}
      />,

      <SkillsPage
        key="skills-front"
        isVisible={currentPage === 9}
        onAnimationFinished={flipNext}
      />,
      <LanguagessPage
        key="languages"
        isVisible={currentPage === 11}
        onAnimationFinished={flipNext}
      />,

      ...pages.map((page, index, array) => {
        return (
          <BasePage key={index + 3} number={index + 3}>
            <span>Base Page: #{index + 1}</span>
          </BasePage>
        );
      }),
      <BackCover key="11" />,
    ];
  }, [currentPage]);

  const onFlip = useCallback(({ data }: { data: number }) => {
    console.log("Book:OnFlip", data);
    setCurrentPage(data);
  }, []);

  console.log("Book", { currentPage, isGreetingEnabled });
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
          speedMode={1}
          onAnimationFinished={() => setIsBookVisible(true)}
        />
      )}
    </div>
  );
}

export default Book;
