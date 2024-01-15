import ResetCss from "./style/reset"
import GlobalStyleCss from "./style/globalStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserContextProvider } from "./context/AuthContext"
import TelaInicial from "./pages/TelaInicial"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Inicio from "./pages/Inicio"
import Miaudelo from "./pages/Miaudelo"





function App() {

  return (
    <BrowserRouter>
      <ResetCss/>
      <GlobalStyleCss/>
      <UserContextProvider>
        <Routes>
        <Route path="/" element={<TelaInicial/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/home" element={<Inicio/>}/>
          <Route path="/gatos/new" element={<Miaudelo/>}/>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
