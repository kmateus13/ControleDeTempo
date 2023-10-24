import axios from 'axios';
import './Tabela.css';
import { useEffect, useState } from 'react';
import LinhaTabela from '../LinhaTabela/LinhaTabela';

export default function Tabela({status}) {

    const [dados, setDados] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
            .then((response) => {
                let teste = response.data
                setDados(teste)

            }).catch((erro) => {
                console.log(erro)
            })

    }, [dados])


    return (
        <main className="container">
            <table>
                <thead>
                    <tr>
                        <th>Separador</th>
                        <th>Numero do Pedido</th>
                        <th>Tempo de Inicio</th>
                        <th>Tempo Real</th>
                        <th>Tempo de Fim</th>
                        <th>Tempo de Duração</th>
                        <th>Status</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((dado) => (
                        dado.status === status && (
                            <LinhaTabela id={dado.id} separador={dado.separador} numeroPedido={dado.numeroPedido} status={dado.status} tempoInicio={dado.tempoInicio} key={dado.id}/>
                        )
                    ))}
                </tbody>
            </table>


        </main>
    )
}