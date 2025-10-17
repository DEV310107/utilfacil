"use client";

import Link from "next/link";
import "../styles/home.css";
import "../styles/suporte.css";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Suporte() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "seu_serviceID",     // substitua
      "seu_templateID",    // substitua
      { nome, email, mensagem },
      "sua_publicKey"      // substitua
    )
    .then(() => setEnviado(true))
    .catch((err) => console.error("Erro ao enviar:", err));
  };

  return (
    <main className="suporte-container">
      <header className="cabeca">
        <div className="esquerda">
          <Link href="/"><img src="/logo.png" alt="logo" className="logo" /></Link>
          <Link href="/">UtiliFácil</Link>
          <Link href="/suporte" className="ativo">Suporte</Link>
        </div>
      </header>

      <section className="conteudo-suporte">
        <h1>Central de Suporte</h1>
        <p>Envie seu problema abaixo e entraremos em contato!</p>

        {!enviado ? (
          <form onSubmit={handleSubmit} className="form-suporte">
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Descreva seu problema..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />
            <button type="submit">Enviar</button>
          </form>
        ) : (
          <p className="confirmacao">✅ Mensagem enviada com sucesso!</p>
        )}

        <Link href="/" className="voltar">← Voltar para o início</Link>
      </section>
    </main>
  );
}
