import styled from "styled-components";
export const StyledButton = styled.button`
  color: white;
  background-color: ${(props) =>
    props.variant === "outlined" ? "green" : "red"};
  border-radius: 5px;
  padding: 10px;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outlined" ? "green" : "red"};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-color: orange;
`;

export const SubmitButton = styled(StyledButton).attrs((props) => ({
  type: "submit",
}))`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props) =>
      props.variant !== "outlined" ? "#FFFFFF" : "#4caf50"};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
