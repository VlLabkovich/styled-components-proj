import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";


export const InputStyled = styled.input`
  font-size: 2rem;
  font-weight: bold;
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out; // Включается анимация при наведении на кнопку Super Botton
  }
`