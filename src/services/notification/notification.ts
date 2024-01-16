import { store } from '@/store/store';
import { setIsShow } from '@/store/slices/notificationSlice';

interface INotification {
  show: () => void;
}

class Notification implements INotification {
  lifeTimeMs = 3000;

  show() {
    store.dispatch(setIsShow(true));
    setTimeout(() => {
      store.dispatch(setIsShow(true));
    }, this.lifeTimeMs);
  }
}

export const notification = new Notification();
