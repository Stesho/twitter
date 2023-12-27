import React, { FormEvent, useState } from "react";
import { Input } from "@/components/ui/Input/Input";
import { Select } from "@/components/ui/Select/Select";
import { MONTHS } from "@/constants/selectOptions";
import {
  Form,
  Inputs,
  Selects,
  SubmitButton,
  SubTitle,
  Text,
  UseEmail,
} from "./SignupUserForm.styled";
import { User } from "@/types/user";
import { getDate } from "@/utils/getDate";

interface SignupUserFormProps {
  onSubmit: (user: User) => void;
}

export const SignupUserForm = ({ onSubmit }: SignupUserFormProps) => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [month, setMonth] = useState<string | null>(null);
  const [day, setDay] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);

  const onClickSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onNextClick = async () => {
    if (year && month && day) {
      onSubmit({
        name,
        phoneNumber,
        email,
        birthday: getDate(year, month, day).toISOString(),
      });
    }
  };

  const onSelectYear = (newYear: number) => {
    setYear(newYear);
  };

  const onSelectMonth = (newMonth: string) => {
    setMonth(newMonth);
  };

  const onSelectDay = (newDay: number) => {
    setDay(newDay);
  };

  return (
    <Form onSubmit={onClickSubmit}>
      <Inputs>
        <Input placeholder="Name" onChange={setName} />
        <Input placeholder="Phone number" onChange={setPhoneNumber} />
        <Input placeholder="Email" onChange={setEmail} />
      </Inputs>
      <UseEmail>Use email</UseEmail>
      <SubTitle>Date of birth</SubTitle>
      <Text>
        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
        Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
        nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
        dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue
      </Text>
      <Selects>
        <Select options={MONTHS} caption="Month" onChange={onSelectMonth} />
        <Select
          options={[1, 2, 3, 4, 5, 6, 7]}
          caption="Day"
          onChange={onSelectDay}
        />
        <Select
          options={[1999, 2000, 2001, 2002, 2003]}
          caption="Year"
          onChange={onSelectYear}
        />
      </Selects>
      <SubmitButton onClick={onNextClick}>Next</SubmitButton>
    </Form>
  );
};
