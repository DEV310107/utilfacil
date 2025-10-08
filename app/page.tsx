"use client"; // 👈 precisa estar na primeira linha!

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <header className="cabebca">
        <img src="logo.png" alt="logo" />
        <h6>UtiliFácil</h6>
        <p>Suporte</p>
        
      </header>
    </main>
  );
}
