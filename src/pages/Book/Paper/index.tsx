import React from "react";
import clsx from "clsx";
import "./styles.css";

type Props = {
  flipped: boolean;
  zIndex: number;
  frontComp?: React.ReactNode;
  backComp?: React.ReactNode;
};

export const Paper = (props: Props) => {
  const { flipped, zIndex, frontComp, backComp } = props;

  return (
    <div className={clsx("paper", flipped && "flipped")} style={{ zIndex }}>
      <div className="front">
        <div className="front-content">{frontComp}</div>
      </div>
      <div className="back">
        <div className="back-content">{backComp}</div>
      </div>
    </div>
  );
};
