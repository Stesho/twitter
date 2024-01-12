import HomeIcon from '@/assets/icons/menu/home.svg?react';
import HomeIconFilled from '@/assets/icons/menu/filled/home_filled.svg?react';
import ExploreIcon from '@/assets/icons/menu/explore.svg?react';
import NotificationIcon from '@/assets/icons/menu/notification.svg?react';
import MessagesIcon from '@/assets/icons/menu/messages.svg?react';
import BookmarksIcon from '@/assets/icons/menu/bookmarks.svg?react';
import ListsIcon from '@/assets/icons/menu/lists.svg?react';
import ProfileIcon from '@/assets/icons/menu/profile.svg?react';
import ProfileIconFilled from '@/assets/icons/menu/filled/profile_filled.svg?react';
import MoreIcon from '@/assets/icons/menu/more.svg?react';

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
    iconUrlActive: HomeIconFilled,
    alt: 'Explore',
    caption: 'Explore',
    link: '/explore',
  },
  {
    iconUrl: NotificationIcon,
    iconUrlActive: HomeIconFilled,
    alt: 'Notifications',
    caption: 'Notifications',
    link: '/notification',
  },
  {
    iconUrl: MessagesIcon,
    iconUrlActive: HomeIconFilled,
    alt: 'Messages',
    caption: 'Messages',
    link: '/messages',
  },
  {
    iconUrl: BookmarksIcon,
    iconUrlActive: HomeIconFilled,
    alt: 'Bookmarks',
    caption: 'Bookmarks',
    link: '/bookmarks',
  },
  {
    iconUrl: ListsIcon,
    iconUrlActive: HomeIconFilled,
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
    iconUrlActive: HomeIconFilled,
    alt: 'More',
    caption: 'More',
    link: '/more',
  },
];
