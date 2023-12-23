import React from "react";
import { Tweet } from "@/components/ui/Tweet/Tweet";
import { NewTweet } from "@/components/ui/NewTweet/NewTweet";

const tweet = {
  name: "Bobur",
  username: "@bobur_mavlonov",
  text: "4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim",
  date: "Apr 1",
};

export const App = () => (
  <div>
    <Tweet
      username={tweet.username}
      name={tweet.name}
      text={tweet.text}
      date={tweet.date}
    />
    <NewTweet />
  </div>
);
