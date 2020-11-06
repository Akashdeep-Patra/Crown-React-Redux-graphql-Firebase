import styled, { css } from "styled-components";

const InvertedButtonStles = css`
  background-color: white;
  color: black;
  border: none;
  &:hover {
    background-color: black;
    color: white;
    @media screen and (max-width: 800px) {
      transition: unset;
      background-color: white;
      color: black;
      transform: unset;
    }
  }
`;

const GoogleButtonStyles = css`
  background-color: #4285f4;
  border: 1px solid #4285f4;
  color: white;
  &:hover {
    border: 1px solid #4285f4;
    transform: translate(0, -10%);
    transition: all 0.2s;
    color: #4285f4;
    background-color: white;
  }
`;
const BaseButtonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid black;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transform: translate(0, -10%);
    transition: all 0.2s;
  }
`;
const selectButton = (props) => {
  if (props.isGoogleSignIn) {
    return GoogleButtonStyles;
  }

  return props.inverted ? InvertedButtonStles : BaseButtonStyles;
};
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  ${selectButton}
  @media screen and (max-width: 800px) {
    min-width: 70%;
  }
`;
