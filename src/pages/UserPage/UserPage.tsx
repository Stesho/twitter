import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '@/types/user';
import { getUserById } from '@/services/user/getUserById';
import { Loader } from '@/components/ui/Loader/Loader';
import { Profile } from '@/components/Profile/Profile';

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
