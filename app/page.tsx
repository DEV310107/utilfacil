"use client";

import "./styles/home.css";
import { useState } from "react";

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
      <h1>RECURSOS MAIS UTILIZADOS</h1>
    </div>
    </main>
  );
}
