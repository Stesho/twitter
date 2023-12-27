import { addDoc, collection } from "firebase/firestore";
import { db } from "@/db/firesbase";
import { Collections } from "@/types/collections";
import { Tweet } from "@/types/Tweet";

export const addTweet = async (tweet: Tweet) => {
  try {
    const doc = await addDoc(collection(db, Collections.Tweets), tweet);

    return doc;
  } catch (error) {
    console.error(error);
    return null;
  }
};
