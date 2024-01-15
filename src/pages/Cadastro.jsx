import { styled } from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function Cadastro() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    nome: '',
    email: '',
    password: '',
    confirmar: '',
    cpf: '',
    telefone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  const formatValue = (value, format) => {
    value = value.replace(/\D/g, '')
    for (let i = 0; i < format.length; i++) {
      if (value.length > format[i].index) value = value.substring(0, format[i].index) + format[i].separator + value.substring(format[i].index)
    }
    return value;
  }

  const cadastrar = async (event) => {
    event.preventDefault();

    if (state.password.length < 3) {
      return alert('Erro! A senha deve ter pelo menos 3 digitos');
    }

    if (state.password !== state.confirmar) {
      return alert('Erro! A confirmação de senha deve ser igual a senha');
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/signup`, { nome: state.nome, email: state.email, password: state.password, cpf: state.cpf, telefone: state.telefone });

      alert('Sucesso! Cadastro realizado');
      navigate("/login");
    } catch (error) {
      if (error.response.status === 409) {
        alert('Erro! Email ou Cpf já cadastrados');
      } else if (error.response.status === 422) {
        alert('Erro! Erro no formato dos dados, tente novamente');
      } else {
        alert('Erro! Erro ao realizar o cadastro, tente novamente mais tarde ou consulte o suporte tecnico');
      }
    }
  };

  
    return (
      <Page>
        <Header>
          <p>CADASTRO</p>
        </Header>
        <Container>
          <Form onSubmit={cadastrar}>
            <input type="text" placeholder="Nome" name="nome" value={state.nome} onChange={handleChange} required />
            <input type="email" placeholder="Email" name="email" value={state.email} onChange={handleChange} required />
            <input type="password" placeholder="Senha" name="password" value={state.password} onChange={handleChange} required />
            <input type="password" placeholder="Confirmar senha" name="confirmar" value={state.confirmar} onChange={handleChange} required />
            <input type="text" placeholder="Cpf" name="cpf" value={formatValue(state.cpf, [{index: 3, separator: '.'}, {index: 7, separator: '.'}, {index: 11, separator: '-'}])} onChange={handleChange} required />
            <input type="text" placeholder="Telefone" name="telefone" value={formatValue(state.telefone, [{index: 2, separator: '('}, {index: 10, separator: ') '}, {index: 10, separator: '-'}])} onChange={handleChange} required />
            <button>Criar Conta</button>
            <h1 onClick={() => navigate("/login")}>Já é cadastrado? Faça Login!</h1>
          </Form>
        </Container>
      </Page>
    );
  }

const Page = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.div`
    margin-top: 50px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    p{
        font-family: 'Righteous', cursive;
        font-size: 30px;
        color: black;
    }
    img{
        width: 100px;
    }
`

const Container = styled.div`
    height: 68%;
    width: 40%;
    border-radius: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    align-items: center;
`

const Form = styled.form`
    margin-top: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-family: 'Righteous', sans-serif;
    input{
        font-family: 'Righteous', sans-serif;
        font-weight: 400;
        padding-left: 10px;
        width: 60%;
        height: 40px;
        border-radius: 8px;
        border: none;
        background:#FFB6C1;
    }
    button{
        font-family: 'Righteous', sans-serif;
        font-weight: 700;
        width: 60%;
        height: 40px;
        background-color: white;
        border-radius: 8px;
        border: none;
        &:hover{
            filter: brightness(0.7);
        }
    }
    h1{
        margin-top: 10px;
        font-weight: 700;
        font-size: 17px;
        color: black;
    }
`