"use client";

import "../../styles/home.css";
import "../../styles/cronometro.css"
import { useState, useEffect, useRef } from "react";

export default function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const [marcadores, setMarcadores] = useState([]);
  const intervaloRef = useRef(null);

  useEffect(() => {
    if (ativo) {
      intervaloRef.current = setInterval(() => {
        setSegundos(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervaloRef.current);
    }
    return () => clearInterval(intervaloRef.current);
  }, [ativo]);

  const formatarTempo = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sRest = (s % 60).toString().padStart(2, "0");
    return `${m}:${sRest}`;
  };

  const reiniciar = () => {
    setSegundos(0);
    setAtivo(false);
    setMarcadores([]);
  };

  const marcarTempo = () => {
    setMarcadores(prev => [...prev, formatarTempo(segundos)]);
  };

  return (
    <main>
      <header className="cabeca">
        <div className="esquerda">
          <a href="/"><img src="/logo.png" alt="logo" className="logo" /></a>
          <a href="/">UtiliFácil</a>
          <a href="/suporte">Suporte</a>
        </div>
        <div className="direita">
          <img src="/insta.png" alt="Instagram" className="social" />
          <img src="/tik-tok.png" alt="TikTok" className="social" />
          <img src="/linkedin.png" alt="LinkedIn" className="social" />
        </div>
      </header>

      <div className="corpo">
        <h1 className="nomeg">CRONÔMETRO</h1>
        <div className="cronometro-card">
          <div className="tempo">{formatarTempo(segundos)}</div>
          <div className="botoes">
            <button onClick={() => setAtivo(!ativo)}>
              {ativo ? "Pausar" : "Iniciar"}
            </button>
            <button onClick={reiniciar}>Resetar</button>
            <button onClick={marcarTempo}>Marcar</button>
          </div>
          {marcadores.length > 0 && (
            <div className="marcadores">
              {marcadores.map((m, i) => (
                <span key={i} className="marcador-tag">{m}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
