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
  BackCoverDuration,
  BioPageOneBackDuration,
  BioPageOneFrontDuration,
  BioPageThreeBackDuration,
  BioPageTwoFrontDuration,
  CiklumsPageDuration,
  DedicationPageDuration,
  ElinextsPageDuration,
  FrontCoverDuration,
  ISolutionsPageDuration,
  LanguagesPageDuration,
  SDVsPageDuration,
  SkillsPageDuration,
} from "./book-pages/durations";
import {
  delayBetweenPageFlipping,
  greetingDuration,
  isGreetingEnabled,
  startPage,
} from "./config";
import { Greeting } from "./Greeting";
import "./styles.css";

const flippingTime = 1000;
const remainingTime = 10689;
//prettier-ignore
const presentationModeDuration =
  greetingDuration +
  FrontCoverDuration + delayBetweenPageFlipping + flippingTime + 
  DedicationPageDuration + delayBetweenPageFlipping + flippingTime +
  BioPageOneFrontDuration + delayBetweenPageFlipping + flippingTime +
  BioPageOneBackDuration + delayBetweenPageFlipping + flippingTime +
  BioPageTwoFrontDuration + delayBetweenPageFlipping + flippingTime +
  BioPageThreeBackDuration + delayBetweenPageFlipping + flippingTime +
  SkillsPageDuration + delayBetweenPageFlipping + flippingTime +
  LanguagesPageDuration + delayBetweenPageFlipping + flippingTime +
  ISolutionsPageDuration + delayBetweenPageFlipping + flippingTime + 
  ElinextsPageDuration + delayBetweenPageFlipping + flippingTime + 
  CiklumsPageDuration + delayBetweenPageFlipping + flippingTime + 
  SDVsPageDuration + delayBetweenPageFlipping + flippingTime + 
  BackCoverDuration + delayBetweenPageFlipping + 
  remainingTime;
console.log(
  "presentation:Duration",
  `${presentationModeDuration}ms === ${presentationModeDuration / 1000}s === ${
    presentationModeDuration / 1000 / 60
  }m`
);

function Book() {
  const [isPresentationMode, setIsPresentationMode] =
    useState(isGreetingEnabled);
  const [isBookVisible, setIsBookVisible] = useState(!isGreetingEnabled);
  const flipBook = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(startPage);
  const [focusPage, setFocusPage] = useState(0);

  useEffect(() => {
    console.log("Book:useEffect", Date.now());
    let timerId: NodeJS.Timeout;
    if (isPresentationMode) {
      Store.removeAllNotifications();
      Store.addNotification({
        title: "Presentation mode!",
        message: "User interactions are disabled in presentation mode",
        type: "info",
        insert: "top",
        container: "top-full",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: presentationModeDuration,
          onScreen: true,
          click: false,
        },
      });
      timerId = setTimeout(() => {
        console.log("PresentationMode => false", Date.now());
        setIsPresentationMode(false);
      }, presentationModeDuration);
    }
    return () => clearTimeout(timerId);
  }, []);

  const flipNext = () => {
    console.log("Book:onPageAnimationFinished", Date.now());
    if (isGreetingEnabled) {
      setTimeout(() => {
        const controller = flipBook.current.pageFlip().flipController;
        controller.flipNext();
      }, delayBetweenPageFlipping);
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

  const onFlip = useCallback(({ data }: { data: number }) => {
    console.log("Book:onFlip", data, Date.now(), isPresentationMode);
    setCurrentPage(data);
  }, []);

  // console.log("Book", { currentPage, focusPage });
  return (
    <div className="container">
      {isPresentationMode && <div className="book-overlay"></div>}
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
