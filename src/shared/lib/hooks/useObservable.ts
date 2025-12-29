import { useEffect } from "react";
import { Observable } from "rxjs";

export const useObservable = <T>(
  observable: Observable<T>,
  setter: (it: T) => void
) => {
  useEffect(() => {
    let subscription = observable.subscribe((result) => setter(result));
    return () => subscription.unsubscribe();
  }, [observable, setter]);
};
