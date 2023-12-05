import React from 'react';
import './App.css';
import styled from "styled-components"
import {StyledBtn} from "./components/Button.styled";
import {InputStyled} from "./components/Input.styled";
import {Link} from "./components/Link.styled";
import {myTheme} from "./styles/Theme.styled";

// import {Menu} from "./components/Menu.styled";

function App() {
    // @ts-ignore
    return (

        <div className="App">

            {/*<Menu>*/}
            {/*    <ul>*/}
            {/*        <li><a href="">menu item 1</a></li>*/}
            {/*        <li><a href="">menu item 2</a></li>*/}
            {/*        <li><a href="">menu item 3</a></li>*/}
            {/*    </ul>*/}
            {/*</Menu>*/}

            <Box>
                {/*<StyledBtn as={Link} href="#">LinkComponent</StyledBtn>*/}
                {/*<StyledBtn as="a" href="https://styled-components.com/">Link</StyledBtn>*/}

                {/*<StyledBtn color={"red"} fontSize={"2rem"}>Hello</StyledBtn>*/}
                {/*<StyledBtn color={"green"} colorBack={"red"} fontSize={"2rem"}>Vladislav</StyledBtn>*/}

                <StyledBtn color={myTheme.primary} btnType={"primary"} active>Hello</StyledBtn>
                <StyledBtn color={myTheme.secondary} btnType={"outlined"} >Hello</StyledBtn>

                {/*<input type="text"/>*/}
                {/*<input type="submit"/>*/}
                {/*<input type="radio"/>*/}
                {/*<SuperButton>Super Button</SuperButton>*/}
            </Box>
        </div>

    );
}

export default App;

const Box = styled.div`
  
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`
