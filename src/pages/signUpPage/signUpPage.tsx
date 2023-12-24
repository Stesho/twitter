import React from "react";
import TwitterLogo from "@/assets/images/twitter_logo.png";
import { Input } from "@/components/ui/Input/Input";
import { Select } from "@/components/ui/Select/Select";
import { MONTHS } from "@/constants/selectOptions";

const SignUpPage = () => (
  <main>
    <img src={TwitterLogo} alt="twitter logo" />
    <h2>Create an account</h2>
    <form>
      <Input />
      <Input />
      <Input />
      <span>Use email</span>
      <h3>Create an account</h3>
      <p>
        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
        Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
        nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
        dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue
      </p>
      <div>
        <Select options={MONTHS} caption="Month" />
        <Select options={[1, 2, 3, 4, 5, 6, 7]} caption="Day" />
        <Select options={[1999, 2000, 2001, 2002, 2003]} caption="Year" />
      </div>
    </form>
  </main>
);

export default SignUpPage;
