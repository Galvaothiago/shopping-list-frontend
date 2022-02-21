import styled from 'styled-components'
import { colors } from '../../global'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem;
    color: white;
    background-color: ${colors.backgroundDark};
`

export const ContainerLogin = styled.div`
    max-width: 38rem;
    width: 100%;
    height: 34rem;

    background: ${colors.backgroundLight};
    border-radius: 85px 5px 85px 5px;
    /* backdrop-filter: blur(10px); */
`

export const Made = styled.a`
    width: auto;
    color: ${colors.purpleLight};
    font-size: .8rem;

    padding-bottom: .5rem;
    position: absolute;
    bottom: 0;

    cursor: pointer;
    text-decoration: none;

`