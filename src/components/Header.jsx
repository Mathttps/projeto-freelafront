import { BiSearch } from "react-icons/bi"
import { styled } from "styled-components"
import { TbLogout } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/AuthContext"
import { useContext } from "react"

export default function Header({ search, setSearch }) {

    const navigate = useNavigate()
    const { setToken } = useContext(UserContext)

    function logout() {
        setToken(null)
        localStorage.clear()
        navigate("/")
    }

    return (
        <Container>
            <BiSearch color="white" size="30px" />
            <input type="text" placeholder="Pesquisa" value={search} onChange={(event) => setSearch(event.target.value)} />
            <div>
                <TbLogout onClick={logout} color="white" size="30px" />
            </div>
        </Container>
    )
}

const Container = styled.div`
    height: 60px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    
    position: fixed;
    top: 0;
    z-index: 1;
   
    background-color: #F0F8FF;
    div{
        position: fixed;
        right: 20px;
    }
    input{
        height: 30px;
        border-radius: 10px;
        border: none;
        padding-left: 10px;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
    }
`