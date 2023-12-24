import React from "react";

import { SwitchButton } from "@/components/ui/Switch/Switch.styled";

interface SwitchProps {
  onChange: () => void;
}

export const Switch = ({ onChange }: SwitchProps) => (
  <SwitchButton>
    <input type="checkbox" onChange={onChange} />
    <span />
  </SwitchButton>
);
