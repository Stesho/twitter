import React, { useState } from "react";
import {
  ArrowIcon,
  SelectButton,
  SelectItem,
  SelectList,
  SelectWrapper,
} from "@/components/ui/Select/Select.styled";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface SelectProps<T> {
  options: T[];
  onChange: (option: T) => void;
  caption: string;
}

export const Select = <T,>({ options, onChange, caption }: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<T | null>(null);
  const select = useOutsideClick(() => setIsOpen(false));

  const setSelected = (option: T) => () => {
    onChange(option);
    setSelectedOption(option);
    setIsOpen(!isOpen);
  };

  return (
    <SelectWrapper ref={select}>
      <SelectButton type="button" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption?.toString() || caption}</span>
        <ArrowIcon />
      </SelectButton>
      {isOpen && (
        <SelectList>
          {options.map((option) => (
            <SelectItem key={option?.toString()} onClick={setSelected(option)}>
              {option?.toString()}
            </SelectItem>
          ))}
        </SelectList>
      )}
    </SelectWrapper>
  );
};
