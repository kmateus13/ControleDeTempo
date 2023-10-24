import axios from "axios";
import Cronometro from "../Cronometro/Cronometro";
import { useEffect, useState } from "react";

export default function LinhaTabela({ id, separador, numeroPedido, tempoInicio, status }) {

    const [dados, setDados] = useState([])


    function finalizar(e) {
        const tempoFim = new Date().toLocaleTimeString()


        const [horasFim, minutosFim, segundosFim] = tempoFim.split(":");
        const [horasInicio, minutosInicio, segundosInicio] = tempoInicio.split(":");

        const horasFimNum = parseInt(horasFim, 10);
        const minutosFimNum = parseInt(minutosFim, 10);
        const segundosFimNum = parseInt(segundosFim, 10);

        const horasInicioNum = parseInt(horasInicio, 10);
        const minutosInicioNum = parseInt(minutosInicio, 10);
        const segundosInicioNum = parseInt(segundosInicio, 10);

        const diferencaEmSegundos = (horasFimNum - horasInicioNum) * 3600 +
            (minutosFimNum - minutosInicioNum) * 60 +
            (segundosFimNum - segundosInicioNum);

        const diferencaFormatada = new Date(diferencaEmSegundos * 1000).toISOString().substr(11, 8);


        let dadosAtualizado = {
            separador: separador,
            numeroPedido: numeroPedido,
            tempoInicio: tempoInicio,
            tempoFim: tempoFim,
            TempoDuracao: diferencaFormatada,
            status: true,
            id: { e }
        }


        axios.put(`http://localhost:3000/posts/${e}`, dadosAtualizado)
            .then((response) => {
                let resposta = response.data

            }).catch((erro) => {
                console.log(erro)
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then((response) => {

                let resposta = response.data
                setDados(resposta)

            }).catch((erro) => {
                console.log(erro)
            })
    }, [id])






    return (
        <tr>
            <td>{separador}</td>
            <td>{numeroPedido}</td>
            <td>{tempoInicio}</td>
            <td>{dados.TempoDuracao ? dados.TempoDuracao : <Cronometro horaInicio={tempoInicio} />}</td>
            <td>{dados.tempoFim ? dados.tempoFim : "Aguardando..."}</td>
            <td>{dados.TempoDuracao ? dados.TempoDuracao : "Aguardando..."}</td>
            <td>
                {status === true ? <div className="circuloVerde"></div> : <div className="circuloVermelho"></div>}
            </td>
            <td>{status === true ? "Concluido" : <button value={id} onClick={(e) => finalizar(e.target.value)}>Finalizar</button>}</td>
        </tr>
    )
}