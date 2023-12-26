import {
  collection,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { db } from "@/db/firesbase";
import { Collections } from "@/types/collections";
import { isEmail } from "@/utils/isEmail";
import { isPhoneNumber } from "@/utils/isPhoneNumber";

interface LoginData {
  emailOrPhoneNumber: string;
  password: string;
}

export const login = async (loginData: LoginData) => {
  try {
    let field: string = "";

    if (isEmail(loginData.emailOrPhoneNumber)) {
      field = "email";
    }
    if (isPhoneNumber(loginData.emailOrPhoneNumber)) {
      field = "phoneNumber";
    }

    const existedUser = query(
      collection(db, Collections.Users),
      where(field, "==", loginData.emailOrPhoneNumber),
    );

    const querySnapshot: QuerySnapshot = await getDocs(existedUser);

    if (querySnapshot.empty) {
      return null;
    }

    if (querySnapshot.docs[0].data().password !== loginData.password) {
      return null;
    }

    return querySnapshot.docs[0].data();
  } catch (error) {
    console.error("Error adding document: ", error);
    return null;
  }
};
