import './App.css';
import Inputs from './componentes/Inputs/Inputs';
import Tabela from './componentes/Tabela/Tabela';

function App() {
  return (
    <div className='containerBody'>
      <Inputs/>
      <h1>Pedido em Andamento</h1>
      <Tabela status={false}/>
      <h1>Pedido Finalizado</h1>
      <Tabela status={true}/>
    </div>
  )
}

export default App;
