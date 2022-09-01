import React, { useCallback, useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import clsx from "clsx";
import { Paper } from "./Paper";
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
    ];
  }, []);
  const [currentLocation, setCurrentLocation] = useState(1);
  const maxLocation = pages.length + 1;
  const [displayedCover, setDisplayedCover] = useState<"front" | "back" | null>(
    "front"
  );

  const onPrev = useCallback(() => {
    if (currentLocation > 1) {
      setDisplayedCover(currentLocation === 2 ? "front" : null);
      setCurrentLocation(currentLocation - 1);
    }
  }, [currentLocation]);

  const onNext = useCallback(() => {
    if (currentLocation < maxLocation) {
      setDisplayedCover(currentLocation === pages.length ? "back" : null);
      setCurrentLocation(currentLocation + 1);
    }
  }, [currentLocation, maxLocation, pages]);

  const renderedPages = useMemo(() => {
    return pages.map((page, index, array) => {
      const zIndex =
        currentLocation <= index + 1 ? array.length - index : index;
      return (
        <Paper
          key={index}
          flipped={currentLocation >= index + 2}
          zIndex={zIndex}
          frontComp={page.front}
          backComp={page.back}
        />
      );
    });
  }, [currentLocation, pages]);

  return (
    <div className="container">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/b0f29e9bfe.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>

      {currentLocation !== 1 && (
        <button
          id="prev-btn"
          className={clsx(!displayedCover && "open")}
          onClick={onPrev}
        >
          <i className="fas fa-arrow-circle-left"></i>
        </button>
      )}

      <div
        className={clsx(
          "book",
          !displayedCover && "open",
          displayedCover === "back" && "back-cover"
        )}
      >
        {renderedPages}
      </div>

      {currentLocation !== maxLocation && (
        <button
          id="next-btn"
          className={clsx(!displayedCover && "open")}
          onClick={onNext}
        >
          <i className="fas fa-arrow-circle-right"></i>
        </button>
      )}
    </div>
  );
}

export default Book;
