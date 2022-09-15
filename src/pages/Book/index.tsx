import { BasePage } from "common/templates/BasePage";
import { BlankPage } from "common/templates/BlankPage";
// import { HandwritePaper } from "common/templates/HandwritePaper";
import { useCallback, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import {
  BackCover,
  CoverWithSide,
  DedicationPage,
  DelayBetweenPageFlipping,
} from "./book-pages";
import { BioPageFront } from "./book-pages/BioPageFront";
import { BioPageBack } from "./book-pages/BioPageBack";
import { Greeting } from "./Greeting";
import "./styles.css";

const startFromPage = 0;

function Book() {
  const [isGreetingFinished, setIsGreetingFinished] = useState(false);
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
  const [currentPage, setCurrentPage] = useState(startFromPage);

  const flipNext = () => {
    console.log("Book:onPageAnimationFinished ", currentPage);
    setTimeout(() => {
      const controller = flipBook.current.pageFlip().flipController;
      controller.flipNext();
    }, DelayBetweenPageFlipping);
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

      <BioPageFront
        key="bio-front"
        isVisible={currentPage === 3}
        onAnimationFinished={flipNext}
      />,
      <BioPageBack
        key="bio-back"
        isVisible={currentPage === 5}
        onAnimationFinished={() => {
          console.log("BioPageBack:onAnimationFinished");
        }}
      />,

      ...pages.map((page, index, array) => {
        return (
          <BasePage key={index + 1} number={index + 1}>
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

  console.log("Book", { currentPage, isGreetingFinished });
  return (
    <div className="container">
      {!isGreetingFinished ? (
        <Greeting
          speedMode={1}
          onAnimationFinished={() => setIsGreetingFinished(true)}
        />
      ) : (
        // @ts-ignore
        <HTMLFlipBook
          ref={flipBook}
          className="book animated"
          width={400}
          height={550}
          showCover={true}
          startPage={startFromPage}
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
      )}
    </div>
  );
}

export default Book;
