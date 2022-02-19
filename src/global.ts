import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', 'Ubuntu', sans-serif;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }  
`

export const ContainerApp = styled.div`
    width: 100vw;
    height: 100vh;
`

export const colors = {
    backgroundLight: '#FCFCFC',
    backgroundDark: '#262626',
    grayLight: '#d0cfcf',
    purpleLight: '#CDA4F0',
    purpleMedium: '#b14aed',
    purpleDark: '#4C2271',
    red: '#b3001b',
    yellow: '#faff81',
    green: '#AFE797',
}