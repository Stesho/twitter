import {
  collection,
  getDocs,
  query,
  QuerySnapshot,
  where,
  or,
} from "firebase/firestore";
import { User } from "@/types/user";
import { db } from "@/db/firesbase";
import { Collections } from "@/types/collections";

export const isUserExist = async (user: User) => {
  const existedUser = query(
    collection(db, Collections.Users),
    or(
      where("user.email", "==", user.email),
      where("user.phoneNumber", "==", user.phoneNumber),
    ),
  );

  const querySnapshot: QuerySnapshot = await getDocs(existedUser);

  return !querySnapshot.empty;
};
