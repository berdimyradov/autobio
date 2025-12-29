import { preLoadAssetsForVara } from "shared/ui/vara-adapter/utils";
import clsx from "clsx";
import { InfoLog } from "shared/ui/components/InfoLog";
import { useObservable, useToggle } from "shared/lib/hooks";
import { AnimationSpeedService } from "shared/lib/services/AnimationSpeed";
import { BlankPage } from "shared/ui/templates/BlankPage";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import HTMLFlipBook from "react-pageflip";
import { BehaviorSubject } from "rxjs";
import { delay, filter, take } from "rxjs/operators";
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
} from "entities/book";
import {
  animationSpeedMode,
  delayBetweenPageFlipping,
  isGreetingEnabled,
  startPage,
} from "./config";
import { Greeting } from "./Greeting";
import "./styles.css";

const flippingTime = 850;

function Book() {
  const isPresentationMode$ = new BehaviorSubject<boolean>(isGreetingEnabled);

  const [isBookVisible, setIsBookVisible] = useState(!isGreetingEnabled);
  const flipBook = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(startPage);
  const [focusPage, setFocusPage] = useState(0);

  const [modificator, setModificator] = useState(animationSpeedMode);
  const [isPaused, togglePaused] = useToggle(false);

  useObservable(
    AnimationSpeedService.getInstance().modificator,
    setModificator
  );

  useEffect(() => {
    preLoadAssetsForVara();
  }, []);

  const flipNext = useCallback(() => {
    console.log("Book:FlipNext", { isGreetingEnabled });
    isPresentationMode$
      .pipe(
        filter((v) => !!v && isGreetingEnabled),
        delay(delayBetweenPageFlipping * modificator),
        take(1)
      )
      .subscribe(() => {
        const controller = flipBook.current.pageFlip().flipController;
        controller.flipNext();
      });
  }, []);

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
      isPresentationMode$.next(false);
    }
  }, [renderedPageSides, currentPage]);

  const handlePause = useCallback(() => {
    console.log("Book:handlePause", isPaused);
    isPresentationMode$.next(isPaused);
    togglePaused();
  }, [isPaused]);

  const onFlip = useCallback(({ data }: { data: number }) => {
    setCurrentPage(data);
  }, []);

  // console.log("Book", { isPaused });
  return (
    <div className="container">
      {!isPaused && <InfoLog />}
      {!isPaused && <div className="book-overlay"></div>}
      <div className="accelerator">
        <button
          type="button"
          className={clsx("btn-amazon--light", isPaused && "focused")}
          onClick={handlePause}
        >
          &#x23EF; Pause
        </button>
      </div>
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
