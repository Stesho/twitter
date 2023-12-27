import { addDoc, collection } from "firebase/firestore";
import { db } from "@/db/firesbase";
import { Collections } from "@/types/collections";
import { User } from "@/types/user";
import { isUserExist } from "@/services/user/isUserExist";

export const signup = async (user: User, password: string) => {
  try {
    // const existedUser = query(
    //   collection(db, Collections.Users),
    //   where("email", "==", user.email),
    // );
    // const querySnapshot: QuerySnapshot = await getDocs(existedUser);
    //
    // if (!querySnapshot.empty) {
    //   return null;
    // }
    const isUser = await isUserExist(user);

    if (isUser) {
      return null;
    }

    const newUser = await addDoc(collection(db, Collections.Users), {
      user,
      password,
    });

    return newUser;
  } catch (error) {
    console.error("Error adding document: ", error);
    return null;
  }
};
