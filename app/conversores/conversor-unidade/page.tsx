"use client";

import { useState, useEffect } from "react";
import "./styles/conversor.css";
import "../../styles/home.css";

type Unidade = { label: string; factor: number };

const UNIDADES: Unidade[] = [
  { label: "Quilômetro", factor: 1000 },
  { label: "Metro", factor: 1 },
  { label: "Centímetro", factor: 0.01 },
  { label: "Milímetro", factor: 0.001 },
  { label: "Micrômetro", factor: 1e-6 },
  { label: "Nanômetro", factor: 1e-9 },
  { label: "Milha", factor: 1609.34 },
  { label: "Jarda", factor: 0.9144 },
  { label: "Pé", factor: 0.3048 },
  { label: "Polegada", factor: 0.0254 },
  { label: "Milha náutica", factor: 1852 },
];

function formatSmart(n: number): string {
  if (!isFinite(n)) return "";
  const abs = Math.abs(n);
  if ((abs !== 0 && (abs >= 1e6 || abs < 1e-4))) return n.toExponential(6);
  const fixed = n.toFixed(8);
  return fixed.replace(/(?:\.0+|(\.\d+?)0+)$/, "$1");
}

export default function Conversor() {
  const [valor, setValor] = useState<string>("1"); // mantém string pra preservar entrada do usuário
  const [de, setDe] = useState<string>("Metro");
  const [para, setPara] = useState<string>("Centímetro");
  const [resultado, setResultado] = useState<string>("");

  useEffect(() => {
    const v = parseFloat(valor.replace(",", "."));
    if (isNaN(v)) {
      setResultado("");
      return;
    }
    const from = UNIDADES.find(u => u.label === de)!.factor;
    const to = UNIDADES.find(u => u.label === para)!.factor;
    const out = (v * from) / to;
    setResultado(formatSmart(out));
  }, [valor, de, para]);

  const swap = () => {
    setDe(prevDe => {
      setPara(prevPara => prevDe);
      return para;
    });
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

      <div className="card">
        {/* bloco esquerdo: input + select */}
        <div className="group">
          <input
            inputMode="decimal"
            className="entrada"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="0"
            aria-label="valor"
          />
          <select className="select" value={de} onChange={(e) => setDe(e.target.value)}>
            {UNIDADES.map(u => <option key={u.label} value={u.label}>{u.label}</option>)}
          </select>
        </div>

        {/* botão swap central */}
        <div className="swap-col">
          <button className="swap-btn" onClick={swap} aria-label="trocar unidades">⇄</button>
        </div>

        {/* bloco direito: resultado + select */}
        <div className="group">
          <input readOnly className="saida" value={resultado} aria-label="resultado" placeholder="—" />
          <select className="select" value={para} onChange={(e) => setPara(e.target.value)}>
            {UNIDADES.map(u => <option key={u.label} value={u.label}>{u.label}</option>)}
          </select>
        </div>
      </div>
    </main>
  );
}