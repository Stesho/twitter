import { auth } from '@/db/firesbase';

export const isAuthWithGoogle = () =>
  auth.currentUser?.providerData[0].providerId === 'google.com';
