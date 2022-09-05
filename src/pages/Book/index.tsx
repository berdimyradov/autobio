import { useMemo } from "react";
import HTMLFlipBook from "react-pageflip";
import { FrontCover } from "./templates/FrontCover";
import { BackCover } from "./templates/BackCover";
import { BlankPage } from "./templates/BlankPage";
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
      {
        front: <h1>Front 6</h1>,
        back: <h1>Back 5</h1>,
      },
      {
        front: <h1>Front 7</h1>,
        back: <h1>Back 7</h1>,
      },
      {
        front: <h1>Front 8</h1>,
        back: <h1>Back 8</h1>,
      },
      {
        front: <h1>Front 9</h1>,
        back: <h1>Back 9</h1>,
      },
      {
        front: <h1>Front 10</h1>,
        back: <h1>Back 10</h1>,
      },
    ];
  }, []);

  const renderedPageSides = useMemo(() => {
    return [
      <FrontCover key="0" />,
      ...pages.map((page, index, array) => {
        return (
          <BlankPage key={index + 1} pageNumber={index + 1}>
            <span>Imma blank page</span>
          </BlankPage>
        );
      }),
      <BackCover key="11" />,
    ];
  }, [pages]);

  return (
    <div className="container">
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
          // className={""}
          // style={{
          //   background: "yellow",
          //   margin: "0 auto",
          // }}
          // startPage={0}
          // size={"stretch"}
          // minWidth={300}
          // maxWidth={300}
          // minHeight={500}
          // maxHeight={500}
          drawShadow={true}
          flippingTime={1500}
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
