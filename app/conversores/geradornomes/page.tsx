"use client";

import "../../styles/home.css";
import { useState } from "react";
import Link from "next/link";

export default function Gerador() {
  const [nick, setNick] = useState("");

  const gerarNick = () => {
    const adjetivos = ["Rápido", "Forte", "Brilhante", "Silencioso", "Astuto"];
    const substantivos = ["Leão", "Tigre", "Águia", "Lobo", "Dragão"];
    const numeros = Math.floor(Math.random() * 1000); // de 0 a 999

    const novoNick =
      adjetivos[Math.floor(Math.random() * adjetivos.length)] +
      substantivos[Math.floor(Math.random() * substantivos.length)] +
      numeros;

    setNick(novoNick);
  };

  return (
    <main>
      <header className="cabeca">
        <div className="esquerda">
          <a href="/"><img src="logo.png" alt="logo" className="logo" /></a>
          <a href="/">UtiliFácil</a>
          <a href="/suporte">Suporte</a>
        </div>
        <div className="direita">
          <img src="insta.png" alt="Instagram" className="social" />
          <img src="tik-tok.png" alt="TikTok" className="social" />
          <img src="linkedin.png" alt="LinkedIn" className="social" />
        </div>
      </header>

      <div className="corpo">
        <h1 className="nomeg">GERADOR DE NICKS</h1>
        <p>Clique no botão para gerar um nick aleatório:</p>

        <div style={{ margin: "20px 0" }}>
          <button onClick={gerarNick} style={{ padding: "10px 20px", fontSize: "16px" }}>
            Gerar Nick
          </button>
        </div>

        {nick && (
          <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" }}>
            Seu Nick: {nick}
          </div>
        )}
      </div>
    </main>
  );
}
