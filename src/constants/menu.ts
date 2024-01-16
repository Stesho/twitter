import BookmarksIcon from '@/assets/icons/menu/bookmarks.svg?react';
import ExploreIcon from '@/assets/icons/menu/explore.svg?react';
import BookmarksIconFilled from '@/assets/icons/menu/filled/bookmarks_filled.svg?react';
import ExploreIconFilled from '@/assets/icons/menu/filled/explore_filled.svg?react';
import HomeIconFilled from '@/assets/icons/menu/filled/home_filled.svg?react';
import ListsIconFilled from '@/assets/icons/menu/filled/lists_filled.svg?react';
import MessagesIconFilled from '@/assets/icons/menu/filled/messages_filled.svg?react';
import NotificationIconFilled from '@/assets/icons/menu/filled/notifications_filled.svg?react';
import ProfileIconFilled from '@/assets/icons/menu/filled/profile_filled.svg?react';
import HomeIcon from '@/assets/icons/menu/home.svg?react';
import ListsIcon from '@/assets/icons/menu/lists.svg?react';
import MessagesIcon from '@/assets/icons/menu/messages.svg?react';
import MoreIcon from '@/assets/icons/menu/more.svg?react';
import NotificationIcon from '@/assets/icons/menu/notification.svg?react';
import ProfileIcon from '@/assets/icons/menu/profile.svg?react';

export const MENU_ITEMS = [
  {
    iconUrl: HomeIcon,
    iconUrlActive: HomeIconFilled,
    alt: 'Home',
    caption: 'Home',
    link: '/home',
  },
  {
    iconUrl: ExploreIcon,
    iconUrlActive: ExploreIconFilled,
    alt: 'Explore',
    caption: 'Explore',
    link: '/explore',
  },
  {
    iconUrl: NotificationIcon,
    iconUrlActive: NotificationIconFilled,
    alt: 'Notifications',
    caption: 'Notifications',
    link: '/notifications',
  },
  {
    iconUrl: MessagesIcon,
    iconUrlActive: MessagesIconFilled,
    alt: 'Messages',
    caption: 'Messages',
    link: '/messages',
  },
  {
    iconUrl: BookmarksIcon,
    iconUrlActive: BookmarksIconFilled,
    alt: 'Bookmarks',
    caption: 'Bookmarks',
    link: '/bookmarks',
  },
  {
    iconUrl: ListsIcon,
    iconUrlActive: ListsIconFilled,
    alt: 'Lists',
    caption: 'Lists',
    link: '/lists',
  },
  {
    iconUrl: ProfileIcon,
    iconUrlActive: ProfileIconFilled,
    alt: 'Profile',
    caption: 'Profile',
    link: '/profile',
  },
  {
    iconUrl: MoreIcon,
    iconUrlActive: MoreIcon,
    alt: 'More',
    caption: 'More',
    link: '/more',
  },
];
