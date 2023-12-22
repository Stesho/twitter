import React from "react";
import { Input } from "@/components/ui/Input/Input";
import { Button } from "@/components/ui/Button/Button";
import { Search } from "@/components/ui/Search/Search";
import { ButtonTypes } from "@/types/buttonTypes";
import { Switch } from "@/components/ui/Switch/Switch";

export const App = () => (
    <div>
      <Input />
      <Button disabled>Tweet</Button>
      <Button type={ButtonTypes.Primary}>Tweet</Button>
      <Button type={ButtonTypes.Secondary}>Tweet</Button>
      <Button type={ButtonTypes.Neutral}>Tweet</Button>
      <Search />
      <Switch />
    </div>
  )
