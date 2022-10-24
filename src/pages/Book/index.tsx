import { preLoadAssetsForVara } from "adapters/VaraAdapter/utils";
import clsx from "clsx";
import { InfoLog } from "common/components/InfoLog";
import { useObservable, useToggle } from "common/hooks";
import { AnimationSpeedService } from "common/services/AnimationSpeed";
import { BlankPage } from "common/templates/BlankPage";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import HTMLFlipBook from "react-pageflip";
import {
  BackCover,
  BioPageOneBack,
  BioPageOneFront,
  BioPageThreeBack,
  BioPageThreeFront,
  BioPageTwoBack,
  BioPageTwoFront,
  CiklumsPage,
  DedicationPage,
  ElinextsPage,
  FrontCover,
  ISolutionsPage,
  LanguagesPage,
  SDVsPage,
  SkillsPage,
} from "./book-pages";
import {
  animationSpeedMode,
  delayBetweenPageFlipping,
  isGreetingEnabled,
  startPage,
} from "./config";
import { Greeting } from "./Greeting";
import "./styles.css";

const flippingTime = 750;

function Book() {
  const [isPresentationMode, setIsPresentationMode] =
    useState(isGreetingEnabled);
  const [isBookVisible, setIsBookVisible] = useState(!isGreetingEnabled);
  const flipBook = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(startPage);
  const [focusPage, setFocusPage] = useState(0);

  const [modificator, setModificator] = useState(animationSpeedMode);

  useObservable(
    AnimationSpeedService.getInstance().modificator,
    setModificator
  );

  useEffect(() => {
    preLoadAssetsForVara();
  }, []);

  const flipNext = () => {
    if (isGreetingEnabled) {
      setTimeout(() => {
        const controller = flipBook.current.pageFlip().flipController;
        controller.flipNext();
      }, delayBetweenPageFlipping * modificator);
    }
  };

  const renderedPageSides = useMemo(() => {
    return [
      <FrontCover
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
      <BlankPage key="blank2" />,

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
        onAnimationFinished={() => setFocusPage(9)}
      />,

      <SkillsPage
        key="skills-front"
        isFocused={focusPage === 9}
        onAnimationFinished={flipNext}
      />,
      <LanguagesPage
        key="languages"
        isFocused={currentPage === 11}
        onAnimationFinished={() => setFocusPage(11)}
      />,

      <ISolutionsPage
        key="isolutions"
        isFocused={focusPage === 11}
        onAnimationFinished={flipNext}
      />,
      <ElinextsPage
        key="elinext"
        isFocused={currentPage === 13}
        onAnimationFinished={() => setFocusPage(13)}
      />,

      <CiklumsPage
        key="ciklum"
        isFocused={focusPage === 13}
        onAnimationFinished={flipNext}
      />,
      <SDVsPage
        key="sdv"
        isFocused={currentPage === 15}
        onAnimationFinished={flipNext}
      />,

      <BlankPage key="blank3" />,
      <BackCover key="11" />,
    ];
  }, [currentPage, focusPage]);

  useEffect(() => {
    if (currentPage === renderedPageSides.length - 1) {
      setIsPresentationMode(false);
    }
  }, [renderedPageSides, currentPage]);

  const [isRewinded, toggleRewinded] = useToggle(false);
  const [isFastForwarded, toggleFastForwarded] = useToggle(false);

  const handleRewind = useCallback(() => {
    if (isFastForwarded) {
      toggleFastForwarded();
    }

    if (isRewinded) {
      AnimationSpeedService.getInstance().resume();

      Store.removeAllNotifications();
      Store.addNotification({
        title: "Rewinding",
        message: "will be disabled starting the next page",
        type: "warning",
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animate__animated", "animate__zoomIn"],
        animationOut: ["animate__animated", "animate__zoomOut"],
        dismiss: {
          duration: 2500,
          click: false,
        },
      });
    } else {
      AnimationSpeedService.getInstance().rewind();

      Store.removeAllNotifications();
      Store.addNotification({
        title: "Rewinding",
        message: "will be applied starting the next page",
        type: "warning",
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animate__animated", "animate__zoomIn"],
        animationOut: ["animate__animated", "animate__zoomOut"],
        dismiss: {
          duration: 2500,
          click: false,
        },
      });
    }
    toggleRewinded();
  }, [isRewinded, isFastForwarded]);

  const handleFastForward = useCallback(() => {
    if (isRewinded) {
      toggleRewinded();
    }

    if (isFastForwarded) {
      AnimationSpeedService.getInstance().resume();

      // Store.removeAllNotifications();
      Store.addNotification({
        title: "Fast Forwarding",
        message: "will be disabled starting the next page",
        type: "warning",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__zoomIn"],
        animationOut: ["animate__animated", "animate__zoomOut"],
        dismiss: {
          duration: 2500 * 1000,
          click: false,
        },
      });
    } else {
      AnimationSpeedService.getInstance().fastForward();

      // Store.removeAllNotifications();
      Store.addNotification({
        title: "Fast Forwarding",
        message: "will be applied starting the next page",
        type: "warning",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__zoomIn"],
        animationOut: ["animate__animated", "animate__zoomOut"],
        dismiss: {
          duration: 2500,
          click: false,
        },
      });
    }
    toggleFastForwarded();
  }, [isFastForwarded, isRewinded]);

  const onFlip = useCallback(({ data }: { data: number }) => {
    // console.log("Book:onFlip", data, Date.now(), isPresentationMode);
    setCurrentPage(data);
  }, []);

  // console.log("Book", { currentPage, focusPage });
  return (
    <div className="container">
      {isPresentationMode && <InfoLog />}
      {isPresentationMode && <div className="book-overlay"></div>}
      {isPresentationMode && (
        <div className="accelerator">
          <button
            type="button"
            className={clsx("btn-amazon--light", isRewinded && "focused")}
            onClick={handleRewind}
          >
            &#9194; Rewind
          </button>
          <button
            type="button"
            className={clsx("btn-amazon--light", isFastForwarded && "focused")}
            onClick={handleFastForward}
          >
            &#9193; Fast Forward
          </button>
        </div>
      )}
      <ReactNotifications />
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
          flippingTime={flippingTime}
          // usePortrait={false}
          // startZIndex={1}
          // autoSize={true}
          maxShadowOpacity={0.4}
          // mobileScrollSupport={true}
          // clickEventForward={true}
          // useMouseEvents={false}
          // swipeDistance={10}
          showPageCorners={false}
          disableFlipByClick={false}
          onFlip={onFlip}
        >
          {renderedPageSides}
        </HTMLFlipBook>
      ) : (
        <Greeting onAnimationFinished={() => setIsBookVisible(true)} />
      )}
    </div>
  );
}

export default Book;
