import { store } from '@/store/store';
import { setNotification } from '@/store/slices/notificationSlice';
import { Notifications } from '@/types/notifications';

interface INotification {
  show: (type: Notifications, text: string) => void;
}

class Notification implements INotification {
  readonly lifeTimeMs = 3000;

  private timerId: NodeJS.Timeout = null!;

  show(type: Notifications, text: string, lifeTimeMs = this.lifeTimeMs) {
    store.dispatch(
      setNotification({
        isShow: true,
        type,
        text,
        lifeTimeMs,
      }),
    );

    this.timerId = setTimeout(() => {
      store.dispatch(
        setNotification({
          isShow: false,
        }),
      );
    }, lifeTimeMs);
  }

  hide() {
    clearTimeout(this.timerId);
    store.dispatch(
      setNotification({
        isShow: false,
      }),
    );
  }
}

export const notification = new Notification();
