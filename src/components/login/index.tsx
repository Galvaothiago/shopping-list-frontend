import { Container, ContainerLogin, Made } from "./style";

export function Login() {
    const LINK_PROFILE =  String(import.meta.env.VITE_LINK_PROFILE)

    console.log(LINK_PROFILE)

    return (
        <Container>
            <ContainerLogin>

            </ContainerLogin>
            <Made href={LINK_PROFILE} >Made by Thiago G.</Made>
        </Container>
    )
}