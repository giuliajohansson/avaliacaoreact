import './App.css'
import Cabecalho from './components/Cabecalho'
import Evento from './components/Evento'
import Galeria from './components/Galeria'
import Rodape from './components/Rodape'

function App() {

  return (
    <>
      <Cabecalho/>
      <Evento
      titulo={'11º FEIRA DO LIVRO SENAI'}
      descricao={'Venha comemorar nossa feira do livro em homenagem ao "Dia Nacional do Livro"'}
      data={'DE 28 A 30 DE OUTUBRO'}
      horario={'HORÁRIO: das 7h30 às 20h'}
      local={'Distrito Industrial, São José - SC'}
      />
      <Galeria/>
      <Rodape/>
    </>
  )
}

export default App
