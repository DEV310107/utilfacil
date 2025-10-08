"use client"; // 👈 precisa estar na primeira linha!

import "./styles/home.css";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <header className="cabebca">
        <img src="logo.png" alt="logo" />
        <h6>UtiliFácil</h6>
        <p>Suporte</p>
        <img className="social_i" src="insta.png" alt="social insta" />
        <img className="social_t" src="tik-tok.png" alt="social tiktok" />
      </header>
    </main>
  );
}
