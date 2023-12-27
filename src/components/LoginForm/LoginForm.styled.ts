import styled from "styled-components";

export const Form = styled.form`
  position: relative;
`;

export const TwitterLogo = styled.img`
  width: 50px;
  height: 41px;
  margin: 0 0 36px 0;
`;

export const Title = styled.h2`
  margin: 0 0 36px 0;
  font-family: Roboto, sans-serif;
  font-size: 42px;
  font-weight: 900;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  top: 130px;
  left: 0;
  color: #ff0000;
  font-size: 20px;
`;

export const Inputs = styled.div`
  & input {
    margin: 0 0 25px 0;
  }
`;

export const Signup = styled.span`
  display: block;
  width: 100%;
  margin: 40px 0 0 0;
  text-align: right;
  color: #1da1f2;
  font-family: Roboto, sans-serif;
  font-size: 18px;
`;
