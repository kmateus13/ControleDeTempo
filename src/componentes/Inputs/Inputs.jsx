import axios from 'axios';
import styles from './styles.module.css';
import { useState } from 'react';

export default function Inputs() {



    const [campoSeparador, setCampoSeparador] = useState('')
    const [campoPedido, setCampoPedido] = useState('')
    const TempoInicio = new Date()
    

    // const [campoTempoReal, setCampoTempoReal] = useState()
    // const [campoTempoFim, setCampoTempoFim] = useState()
    // const [campoTempoDuracao, setCampoTempoDuracao] = useState()
    // const [campoStatus, setCampoStatus] = useState()
    // const [campoBotao, setCampoBotao] = useState()


    let informacoes = {
        separador: campoSeparador,
        numeroPedido: campoPedido,
        tempoInicio: TempoInicio.toLocaleTimeString(),
        // tempoReal: TempoInicio.getTime(),
        // tempoFim: campoTempoFim,
        // TempoDuracao: campoTempoDuracao,
        pausado: false,
        status: false,
        // botao: campoBotao,
    }


    function enviarInformacoes() {

        axios.post(`http://localhost:3000/posts`, informacoes)
            .then((response) => {
                console.log('Novo vídeo adicionado com sucesso:', response.data);
                // Faça o que for necessário após o sucesso da requisição
            })
            .catch((error) => {
                console.error('Erro ao adicionar novo vídeo:', error);
                // Lide com o erro de alguma forma
            });

    }



    return (
        <header>
            <h1>CONTROLE DE TEMPO DE SERAPARAÇÃO</h1>
            <div className={styles.container}>
                <span>
                    <label htmlFor="nomeSeparador">Nome do Separador: </label>
                    <input type="text" id="nomeSeparador" value={campoSeparador} onChange={(e) => setCampoSeparador(e.target.value)} />
                </span>
                <span>
                    <label htmlFor="numeroPedido">Numero do Pedido: </label>
                    <input type="text" id="numeroPedido" value={campoPedido} onChange={(e) => setCampoPedido(e.target.value)} />
                </span>
                <button onClick={() => enviarInformacoes()}>Enviar</button>
            </div>
        </header>
    )
}