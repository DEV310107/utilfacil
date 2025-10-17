"use client";

import "../styles/home.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Bem-vindo ao Home</h1>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <Link href="/sobre">Ir para Sobre</Link>
    </main>
  );
}
