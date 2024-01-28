import { useEffect, useState } from 'react';
import { onSnapshot, Query } from 'firebase/firestore';

export const useSnapshot = <T>(query: Query) => {
  const [data, setData] = useState<T[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    setIsDataLoading(true);
    const unsubscribe = onSnapshot(query, (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          id: doc.id,
          ...docData,
        };
      }) as T[];

      setIsDataLoading(false);
      setData(updatedData);
    });

    return unsubscribe;
  }, [query]);

  return [data, isDataLoading] as const;
};
