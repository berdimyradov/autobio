import { RefObject, useCallback, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { VaraType } from "vara";
// import { FrontCover } from "./templates/FrontCover";
import { BasePage } from "common/templates/BasePage";
import { BlankPage } from "common/templates/BlankPage";
import { HandwritePaper } from "common/templates/HandwritePaper";
import { BackCover } from "pages/Book/covers/BackCover";
import { CoverWithSide } from "pages/Book/covers/CoverWithSide";
import { DedicationCover } from "./covers/DedicationCover";
import { Greeting } from "./Greeting";
import "./styles.css";

const lipsum = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  voluptate, asperiores deleniti temporibus aliquam itaque
  blanditiis libero quidem aspernatur, iure id, quam expedita rerum.
  Sapiente expedita in sed placeat vel.
`;

function Book() {
  const pageFlip = useRef(null);
  const varaInstance = useRef<VaraType | null>(null);
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
  const [currentPage, setCurrentPage] = useState(0);

  const onRefChange = useCallback((node: RefObject<VaraType>) => {
    // console.log("Book:onChange", node);
    varaInstance.current = node.current;
    setTimeout(() => {
      varaInstance?.current?.draw("dedication1");
    }, 1500);
  }, []);

  const renderedPageSides = useMemo(() => {
    return [
      <CoverWithSide key="0" />,
      <BlankPage key="blank1" color="#FBFBF8" />,

      <DedicationCover
        key="dedication1"
        onVaraRef={onRefChange}
        isVisible={currentPage === 1}
      />,
      <BlankPage key="blank3" color="#FBFBF8" />,

      <HandwritePaper
        key="notebook1"
        id="notebook1"
        texts={[
          "foobar me",
          "barme foo",
          "another one",
          "once upon a time",
          "foobar me",
          "barme foo",
          "another one",
          "once upon a time",
          "foobar me",
          "barme foo",
          "another one",
          "once upon a time",
        ]}
      />,
      <HandwritePaper key="notebook2" id="notebook2" texts={[lipsum]} />,

      ...pages.map((page, index, array) => {
        return (
          <BasePage key={index + 1} number={index + 1}>
            <span>Base Page: #{index + 1}</span>
          </BasePage>
        );
      }),
      <BackCover key="11" />,
    ];
  }, [pages, currentPage]);

  const onFlip = useCallback(({ data }: { data: number }) => {
    setCurrentPage(data);
    console.log("Book:OnFlip", data);
  }, []);

  return (
    <div className="container">
      <section id="greeting">
        <Greeting />
      </section>

      {/* @ts-ignore */}
      <HTMLFlipBook
        ref={pageFlip}
        className="book animated"
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
        onFlip={onFlip}
      >
        {renderedPageSides}
      </HTMLFlipBook>
    </div>
  );
}

export default Book;
