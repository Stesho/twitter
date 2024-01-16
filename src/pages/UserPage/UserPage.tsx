import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Profile } from '@/components/Profile/Profile';
import { Loader } from '@/components/ui/Loader/Loader';
import { getUserById } from '@/services/user/getUserById';
import { User } from '@/types/user';

export const UserPage = () => {
  const [user, setUser] = useState<User>(null!);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const receivedUser = await getUserById(userId);
        if (receivedUser) {
          setUser(receivedUser);
        }
      }
    };
    fetchUser();
  }, [userId]);

  return user ? <Profile user={user} /> : <Loader />;
};
