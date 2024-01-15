import { styled } from "styled-components"
import { useNavigate } from "react-router-dom"

export default function Cat({gato}){

    const { nome, idade, genero, fotoperfil, id } = gato
    const navigate = useNavigate()

    return(
        <Container onClick={()=> navigate(`/gatos/${id}`)}>
            <ImageContainer>
                <img src={fotoperfil} alt="" />
            </ImageContainer>
        </Container>
    )
}
