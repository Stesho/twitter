import styled from 'styled-components';

export const SwitchButton = styled.label`
  position: relative;
  display: inline-block;
  width: 54px;
  height: 30px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    border: 2px solid #9d9d9dff;
  }

  span:before {
    position: absolute;
    content: '';
    height: 30px;
    width: 30px;
    top: -2px;
    left: -2px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #9d9d9dff;
  }

  input:checked + span {
    background-color: #4fbfff;
  }

  input:checked + span:before {
    background-color: #fff;
  }

  input:checked + span:before {
    -webkit-transform: translateX(25px);
    -ms-transform: translateX(25px);
    transform: translateX(25px);
  }
`;
