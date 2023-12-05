import {MyAnimation} from "../styles/animations/Animations";
import styled, {css} from "styled-components"

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: "primary" | "outlined"
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;

  &:hover {
    background-color: #4053cc;
  }

  // &:hover {
  //   animation: ${MyAnimation} 2s ease-in-out; // Включается анимация при наведении на кнопку Super Botton
  // }


  // outlined
  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "#fb3f78"};
    color: ${props => props.color || "#fb3f78"};
    background-color: transparent;

    &:hover {
      border-color: #4053cc;
      color: #4053cc;
      background-color: transparent;
    }
  `
  };

  // primary
  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "#fb3f78"};
    color: snow;
    
    &:hover {
      background-color: #4053cc;
    }
  `
  };
    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
      box-shadow: 5px 5px 5px 5px #25252c;

  `}
`


//   &:last-child {
//     background-color: rgba(49,189,54,0.79);
//   }
// `
//
// export const SuperButton = styled(StyledBtn)`
//   border-radius: 5px;
//   background-color: Yellow;
//   color: rgba(0, 0, 0, 0.65);
//   // animation: ${MyAnimation} 2s ease-in-out; // Включается анимация при перезагрузке страницы
//
//   &:hover {
//     animation: ${MyAnimation} 2s ease-in-out; // Включается анимация при наведении на кнопку Super Botton
//   }
// `