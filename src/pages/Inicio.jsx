import axios from "axios"
import Header from "../components/Header"
import { styled } from "styled-components"
import { UserContext } from "../context/AuthContext"
import Cat from "../components/Cat"


import { useContext, useEffect, useState } from "react"

export default function Inicio() {
    const [gatos, setGatos] = useState([])
    const { token } = useContext(UserContext)
    const [search, setSearch] = useState("")

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/gatos`, config)
            .then((resposta) => {
                setGatos(resposta.data)
            })
            .catch((error) => console.log(error.response))
    }, [])

    const filtro = gatos.filter((gato) => gato.nome.toLowerCase().includes(search.toLowerCase()))

    return (
        <Page>
            <Header search={search} setSearch={setSearch}></Header>
            <CatContainer>
                {filtro.length === 0 ? (
                    <>
                        <p>Nenhum miaudelo por aqui ainda</p>
                    </>
                ) : (
                    filtro.map((gato) => <Cat key={gato.id} gato={gato} />)
                )}
            </CatContainer>
        </Page>
    )
}

const Page = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F3D863;
    padding-top: 65px;
    padding-bottom: 65px;
    p{
        font-family: 'Righteous', cursive;
        font-weight: 400;
        color: #4d4d4d;
    }
    justify-content: center;
`

const CatContainer = styled.div`
    height: 100%;
    width: 90%;
    border-radius: 15px;
    background-color: #F3D863;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
`