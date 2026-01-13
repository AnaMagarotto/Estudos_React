import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import { useState } from 'react';
import Saudacao from './components/Saudacao';
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Empresa from './components/pages/Empresa';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  {/*const name = 'Ana';*/}

  {/*Essa frase eh da parte de OutraLista - Renderizando listas
  const meusItens = ['React', 'Vue', 'Angular']*/}

  {/*Essa frase eh da parte de State Lift
   const [nome, setNome] = useState()*/}
   
  return (
    <div className="App">
      {/*
      <List />
      <Frase /> */}
      {/*Importando helloworld do components e integrando no site */}
      {/*<HelloWorld />
      {/*Alem de importar o saymyname, coloquei a descricao do nome que quero utilizar no props*/}
      {/*<SayMyName nome="Ana"/>
      <SayMyName nome="Pedro"/>
      <Pessoa 
        nome="Amanda" 
        idade="23" 
        profissao="programadora" 
        foto="https:via.placeholder.com/150"/>
        <h1>Testando Eventos</h1>
        <Evento />
        <Form />
        <h1>Renderizacao Condicional</h1>
        <Condicional/>
        <h1>Renderizacao de Listas</h1>
        <OutraLista itens={meusItens} />
        <OutraLista itens={[]}/>
        <h1>State Lift</h1>
        <SeuNome setNome={setNome}/>
        <Saudacao nome={nome}/>*/}
        <Router> {/*reune tudo que sera utilizado no router - que vai deixar mais dinamica nossa barra de navegacao de urls diferentes*/}
          <Navbar/> {/*vai ser nossa barra de navegacao e vai armazenar as diferentes urls*/}
            <Routes> {/*agrupa todos os caminhos ate as urls*/}
              <Route exact path="/" element={<Home/>}/> {/*O route eh literalmente o caminho da url escolhida e o exact path eh obrigatorio para que cheguemos na url certa*/}
              <Route path="/contato" element={<Contato/>}/>
              <Route path="/empresa" element={<Empresa/>}/>
            </Routes>
            <Footer/> {/*nossas paginas ou urls estao na pasta pages e o navbar com os links ate as paginas e o footer da nossa pagina estao na pasta layout, assim como o css da navbar*/}
        </Router>

    </div>
  );
}

export default App;
