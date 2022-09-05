import React, { useCallback, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.css";

// const config = {
//   width: 400, // required parameter - base page width
//   height: 600, // required parameter - base page height
//   showCover: true,
// };

function Test() {
  const book = useRef(null);
  const onFlip = useCallback((e: any) => {
    console.log("Current page: " + e.data);
  }, []);

//   if (!book?.current) {
//     return null;
//   }

  return (
    <div className="container">
      {/* @ts-ignore */}
      <HTMLFlipBook
        ref={book}
        width={300}
        height={500}
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
        // drawShadow={true}
        // flippingTime={1}
        // usePortrait={false}
        // startZIndex={1}
        // autoSize={true}
        // maxShadowOpacity={0.4}
        showCover={true}
        // mobileScrollSupport={true}
        // clickEventForward={true}
        // useMouseEvents={false}
        // swipeDistance={10}
        // showPageCorners={true}
        // disableFlipByClick={false}
        onFlip={onFlip}
      >
        <div className="demoPage" id="demo1">Page 1</div>
        <div className="demoPage">Page 2</div>
        <div className="demoPage">Page 3</div>
        <div className="demoPage">Page 4</div>
        <div className="demoPage">Page 5</div>
        <div className="demoPage">Page 6</div>
        <div className="demoPage">Page 7</div>
        <div className="demoPage">Page 8</div>
        <div className="demoPage">Page 9</div>
        <div className="demoPage">Page 10</div>
      </HTMLFlipBook>

      <button
        onClick={() => {
          // @ts-ignore
          book.current.pageFlip().flipPrev();
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          // @ts-ignore
          book.current.pageFlip().flipNext();
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Test;
