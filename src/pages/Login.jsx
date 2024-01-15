import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { UserContext } from "../context/AuthContext"
import logo from "../assets/logo.png"


export default function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setToken } = useContext(UserContext)

    function entrar(event) {
        event.preventDefault()
        axios.post(`${import.meta.env.VITE_API_URL}/signin`, { email, password })
            .then((resposta) => {
                localStorage.setItem("token", resposta.data.token)
                setToken(resposta.data.token)
                navigate("/home")
            })
            .catch((error) => {
            })
    }

    return (
        <Page>
            <img src={logo} alt="Logo" />
            <p>LOGIN</p>
            <Container>
                <Form onSubmit={entrar}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button>Entrar</button>
                    <h1 onClick={() => navigate("/cadastro")}>Primeira vez? Cadastre-se!</h1>
                </Form>
            </Container>
        </Page>
    )
}

const Page = styled.div`
   
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-family: 'Righteous', cursive;
        font-size: 28px;
        color: black;
        margin-top: 230px;
        z-index: 1;
        
    }
    img{
        z-index: 0;
        top: -30px;
        width: 300px;
        position: fixed;

    }
`

const Container = styled.div`
    margin-top: 20px;
    width: 40%;
    height: 250px;
    background-color: white;
    border-radius: 15px;
    z-index: 1;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    
`

const Form = styled.form`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-family: 'Righteous', sans-serif;
    input{
        font-family: 'Righteous', sans-serif;
        font-weight: 400;
        padding-left: 10px;
        width: 50%;
        height: 35px;
        border-radius: 8px;
        border: none;
        background: #FFB6C1;
    }
    button{
        font-family: 'Righteous', sans-serif;
        font-weight: 700;
        width: 50%;
        height: 40px;
        background-color: white;
        border-radius: 8px;
        border: none;
        &:hover{
            filter: brightness(0.7);
        }
    }
    h1{
        font-weight: 500;
        font-size: 20px;
        margin-top: 20px;
        color: black;
        z-index: 1;
    }
`