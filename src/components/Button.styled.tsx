import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;
  
  &:hover {
    background-color: aquamarine;
  }
  
  &:last-child {
    background-color: rgba(49,189,54,0.79);
  }
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: Yellow;
  color: rgba(0, 0, 0, 0.65);
  // animation: ${MyAnimation} 2s ease-in-out; // Включается анимация при перезагрузке страницы
  
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out; // Включается анимация при наведении на кнопку Super Botton
  }
` 