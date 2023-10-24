import React, { useEffect, useState } from 'react';

export default function Cronometro({ horaInicio }) {
  const [tempoDecorrido, setTempoDecorrido] = useState("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const [horas, minutos, segundos] = horaInicio.split(':').map(Number);
      const horaDeInicio = new Date();
      const horaAtual = new Date();

      horaDeInicio.setHours(horas);
      horaDeInicio.setMinutes(minutos);
      horaDeInicio.setSeconds(segundos);

      const tempoDecorridoMillis = horaAtual - horaDeInicio;
      const hora = String(Math.floor(tempoDecorridoMillis / 3600000)).padStart(2, "0");
      const minuto = String(Math.floor((tempoDecorridoMillis % 3600000) / 60000)).padStart(2, "0");
      const segundo = String(Math.floor((tempoDecorridoMillis % 60000) / 1000)).padStart(2, "0");

      setTempoDecorrido(`${hora}:${minuto}:${segundo}`);
    }, 1000);

    // Limpando o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [horaInicio]);

  return (
  <div>{tempoDecorrido}</div>
  )
}
