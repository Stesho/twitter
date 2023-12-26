import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "@/db/firesbase";
import { Collections } from "@/types/collections";
import { User } from "@/types/user";

export const signup = async (user: User) => {
  try {
    const existedUser = query(
      collection(db, Collections.Users),
      where("email", "==", user.email),
    );
    const querySnapshot: QuerySnapshot = await getDocs(existedUser);

    if (!querySnapshot.empty) {
      return null;
    }

    const newUser = await addDoc(collection(db, Collections.Users), user);

    return newUser;
  } catch (error) {
    console.error("Error adding document: ", error);
    return null;
  }
};
