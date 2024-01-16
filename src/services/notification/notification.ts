import { store } from '@/store/store';
import { setNotification } from '@/store/slices/notificationSlice';
import { Notifications } from '@/types/notifications';

interface INotification {
  show: (type: Notifications, text: string) => void;
}

class Notification implements INotification {
  readonly lifeTimeMs = store.getState().notification.lifeTimeMs;

  private timerId: NodeJS.Timeout = null!;

  show(type: Notifications, text: string) {
    store.dispatch(
      setNotification({
        isShow: true,
        type,
        text,
      }),
    );

    this.timerId = setTimeout(() => {
      store.dispatch(
        setNotification({
          isShow: false,
        }),
      );
    }, this.lifeTimeMs);
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
