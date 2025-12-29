export interface FiniteAnimation {
  onAnimationFinished?: () => void;
}

export type BookPageProps = {
  isFocused: boolean;
} & FiniteAnimation;
