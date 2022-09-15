export interface FiniteAnimation {
  onAnimationFinished: () => void;
}

export type BookPageProps = {
  isVisible: boolean;
} & FiniteAnimation;
