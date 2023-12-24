import React, { useState } from "react";
import {
  ArrowIcon,
  SelectButton,
  SelectItem,
  SelectList,
  SelectWrapper,
} from "@/components/ui/Select/Select.styled";
import { useOutsideClick } from "@/hooks/useOutsideClick";

type Option = string | number;

interface SelectProps {
  options: Option[];
  caption: string;
}

export const Select = ({ options, caption }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const select = useOutsideClick(() => setIsOpen(false));

  const setSelected = (option: Option) => () => {
    setSelectedOption(option);
    setIsOpen(!isOpen);
  };

  return (
    <SelectWrapper ref={select}>
      <SelectButton type="button" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption || caption}</span>
        <ArrowIcon />
      </SelectButton>
      {isOpen && (
        <SelectList>
          {options.map((option) => (
            <SelectItem key={option} onClick={setSelected(option)}>
              {option}
            </SelectItem>
          ))}
        </SelectList>
      )}
    </SelectWrapper>
  );
};
