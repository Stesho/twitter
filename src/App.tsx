import React from "react";
import { Input } from "@/components/ui/Input/Input";
import { Button } from "@/components/ui/Button/Button";
import { Search } from "@/components/ui/Search/Search";
import { ButtonTypes } from "@/types/buttonTypes";
import { Switch } from "@/components/ui/Switch/Switch";
import { Select } from "@/components/ui/Select/Select";
import { Menu } from "@/components/ui/Menu/Menu";
import Tweet from "@/components/ui/Tweet/Tweet";

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
    <Input />
    <Button disabled>Tweet</Button>
    <Button type={ButtonTypes.Primary}>Tweet</Button>
    <Button type={ButtonTypes.Secondary}>Tweet</Button>
    <Button type={ButtonTypes.Neutral}>Tweet</Button>
    <Search />
    <Switch />
    <Select
      caption="Month"
      options={["January", "February", "March", "April"]}
    />
    <Menu />
  </div>
);
