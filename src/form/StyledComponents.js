import styled, { css } from "styled-components";

export const FormContainer = 
styled.div`

  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  width: 450px;
  gap: 10px;
  border: 10px solid turquoise;
`;

export const Container = styled.div`
  margin: 3px;
  display: flex;
  flex-direction: column;
  text-align: left;
  ${({ content }) => content === "evenly" && css`
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
  `}
`;

export const Button = 
styled.button`

  width: 100%;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 7px;
  background-color: turquoise;
  color: #2B3467;
  &:hover{
  color: #eee;
  background-color:  #5585b5KL;
`;

export const Input = styled.input`
  width 210px
`





