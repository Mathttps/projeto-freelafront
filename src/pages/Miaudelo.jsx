import axios from "axios"
import { styled } from "styled-components"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/AuthContext";
import logo from "../assets/logo.png"



export default function Miaudelo() {

    const navigate = useNavigate()
    const { token } = useContext(UserContext)
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [macho, setMacho] = useState(false)
    const [femea, setFemea] = useState(false)
    const [fotoperfil, setFotoPerfil] = useState("")
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function cadastrar(event) {
        event.preventDefault()
        if (idade < 1) return Swal.fire({
            title: 'Erro!',
            text: 'Idade deve ser maior que zero',
            icon: 'error',
            confirmButtonText: 'Continuar'
        })
        if (macho === false && femea === false) return Swal.fire({
            title: 'Erro!',
            text: 'Selecione o gênero do seu pet',
            icon: 'error',
            confirmButtonText: 'Continuar'
        })
        const genero = macho? "Macho": "Fêmea"
        axios.post(`${import.meta.env.VITE_API_URL}/gatos`, { nome, idade, genero, fotoperfil }, config)
            .then(() => {
                Swal.fire({
                    title: 'Sucesso!',
                    text: 'Novo Miaudelo cadastrado!',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                }).then(()=>navigate("/home"))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Page>
            <Header>
                <img src={logo} alt="logo" />
                <p>Novo Miaudelo</p>
            </Header>
            <Container>
                <Form onSubmit={cadastrar}>
                    <button>Cadastrar Miaudelo</button>
                </Form>
            </Container>
        </Page>
    )
}

const Page = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    
`
