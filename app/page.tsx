"use client";

import "./styles/home.css";
import { useState } from "react";
import Link from "next/link"; // importante para navegação

export default function Home() {
  const [count, setCount] = useState(0);

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
        <h1 className="nomeg">RECURSOS MAIS UTILIZADOS</h1>
        
        <div className="cards">
          <Link href="/conversores/geradornomes" className="card">
            <h1>Conversor de unidades</h1>
            <p>Converta unidades de medida de forma prática e instantânea, direto no seu navegador.</p>
            <img src="conversor-de-unidades.png" alt="foto do card1" />
          </Link>

          <Link href="/devtools/cronometro" className="card">
            <h1>Cronometro</h1>
            <p>Controle seu tempo com nosso cronômetro rápido e intuitivo — perfeito para estudos, treinos ou pausas, tudo diretamente no site..</p>
            <img src="cronometro.png" alt="foto do card2" />
          </Link>

          <Link href="/devtools" className="card">
            <h1>Corversor PDF</h1>
            <p>Gere QR Codes, converta JSON, conte textos e organize seu tempo.</p>
            <img src="pdf.png" alt="foto do card3" />
          </Link>
        </div>




        <h1 className="nomeg">CATEGORIAS DOS RECURSOS</h1>
        
        <div className="cards">
          <Link href="/conversores" className="card">
            <h1>Conversores e geradores</h1>
            <p>Crie nomes, cores, senhas e converta unidades com rapidez e praticidade.</p>
            <img src="not1.png" alt="foto do card1" />
          </Link>

          <Link href="/pdf" className="card">
            <h1>PDF e documentos</h1>
            <p>Converta e compacte PDFs sem perder qualidade.</p>
            <img src="pdf2.png" alt="foto do card2" />
          </Link>

          <Link href="/devtools" className="card">
            <h1>Produtividade e dev tools</h1>
            <p>Gere QR Codes, converta JSON, conte textos e organize seu tempo.</p>
            <img src="dev3.png" alt="foto do card3" />
          </Link>
        </div>
      </div>
    </main>
  );
}
