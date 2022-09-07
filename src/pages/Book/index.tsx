import { useMemo } from "react";
import HTMLFlipBook from "react-pageflip";
// import { FrontCover } from "./templates/FrontCover";
import { BackCover } from "./templates/BackCover";
import { BlankPage } from "./templates/BlankPage";
import { BasePage } from "./templates/BasePage";
import { CoverWithSide } from "./templates/CoverWithSide";
import { NotebookPaper } from "./templates/NotebookPaper";
import { Greeting } from "./Greeting";
import "./styles.css";

function Book() {
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

  const renderedPageSides = useMemo(() => {
    return [
      <CoverWithSide key="0" />,
      <BlankPage key="blank1" color="#FBFBF8" />,

      <BlankPage key="blank2" color="#FBFBF8" />,
      <BlankPage key="blank3" color="#FBFBF8" />,

      <NotebookPaper key="notebook1" />,
      <NotebookPaper key="notebook2" />,

      // <BlankPage key="blank1" color="#FBFBF8" />,
      // <BlankPage key="blank1" color="#FBFBF8" />,
      ...pages.map((page, index, array) => {
        return (
          <BasePage key={index + 1} number={index + 1}>
            <span>Base Page: #{index + 1}</span>
          </BasePage>
        );
      }),
      <BackCover key="11" />,
    ];
  }, [pages]);

  return (
    <div className="container">
      <section id="greeting">
        <Greeting />
      </section>
      {/* <Greeting /> */}
      {/* {currentLocation !== 1 && (
        <button
          id="prev-btn"
          className={clsx(!displayedCover && "open")}
          onClick={onPrev}
        >
          <FaArrowCircleLeft className="icon" />
        </button>
      )} */}

      {/* @ts-ignore */}
      <HTMLFlipBook
        className="book"
        width={400}
        height={550}
        showCover={true}
        startPage={0}
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
        // onFlip={onFlip}
      >
        {renderedPageSides}
      </HTMLFlipBook>

      {/* {currentLocation !== maxLocation && (
        <button
          id="next-btn"
          className={clsx(!displayedCover && "open")}
          onClick={onNext}
        >
          <FaArrowCircleRight className="icon" />
        </button>
      )} */}
    </div>
  );
}

export default Book;
