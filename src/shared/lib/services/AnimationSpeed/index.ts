import { animationSpeedMode } from "pages/book/config";
import { BehaviorSubject } from "rxjs";

export class AnimationSpeedService {
  private static _instance: AnimationSpeedService;
  private speedModificatorSubject = new BehaviorSubject<number>(
    animationSpeedMode
  );
  modificator = this.speedModificatorSubject.asObservable();

  rewind() {
    console.log("AnimationSpeedService:Rewind");
    AnimationSpeedService._instance.speedModificatorSubject.next(1.5);
  }

  resume() {
    console.log("AnimationSpeedService:Resume");
    AnimationSpeedService._instance.speedModificatorSubject.next(1);
  }

  fastForward() {
    console.log("AnimationSpeedService:FF");
    AnimationSpeedService._instance.speedModificatorSubject.next(0.25);
  }

  static getInstance() {
    if (!AnimationSpeedService._instance) {
      AnimationSpeedService._instance = new AnimationSpeedService();
    }

    return AnimationSpeedService._instance;
  }
}
