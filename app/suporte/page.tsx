"use client";

import Link from "next/link";
import "../styles/suporte.css"
import "../styles/home.css";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Suporte() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_uub4gob",          // ✅ Service ID
        "template_vg56fvt",         // ✅ Template ID 
        { nome, email, mensagem },  // ✅ Dados do formulário
        "HzqXnXQqcDZVdEeFF"         // ✅ Public Key
      )
      .then(() => {
        setEnviado(true);
        setErro(false);
        setNome("");
        setEmail("");
        setMensagem("");
      })
      .catch(() => {
        setErro(true);
        setEnviado(false);
      });
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

        {erro && <p className="erro">❌ Ocorreu um erro ao enviar. Tente novamente.</p>}

        <Link href="/" className="voltar">← Voltar para o início</Link>
      </section>
    </main>
  );
}
