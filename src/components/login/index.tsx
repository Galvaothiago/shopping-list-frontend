import { Container, ContainerLogin, Made } from "./style";

export function Login() {
    const LINK_PROFILE =  String(import.meta.env.VITE_LINK_PROFILE)
    const CONTENT = '{ made by Thiago Galvão }'

    return (
        <Container>
            <ContainerLogin>

            </ContainerLogin>
            <Made target="_blank" href={LINK_PROFILE} >{CONTENT}</Made>
        </Container>
    )
}