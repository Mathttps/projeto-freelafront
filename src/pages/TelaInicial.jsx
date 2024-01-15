import { styled } from "styled-components"
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"

export default function TelaInicial (){

    const navigate = useNavigate()

    return(
        <Page>
            <img src={logo} alt="logo" />
            <p>Agência de Miaudelos</p>
            <button onClick={()=>navigate("/login")}>Clique aqui</button>
        </Page>
    )
}

const Page = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    button{
        height: 50px;
        width: 20%;
        font-family: sans-serif;
        font-weight: 700;
        font-size: 20px;
        z-index: 2;
        margin-bottom: 170px;
        border: none;
        background-color: black;
        color: white;
        border-radius: 20px;
        
    }
    p{
        text-align: center;
        font-family: sans-serif;
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 200px;
    }
    img{
        position: fixed;
        top: 0px;
        width: 400px;
    }
`