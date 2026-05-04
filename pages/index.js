import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">

      <header className="hero">
        <img src="/images/logo.png" className="logo" />
      </header>

    <section className="conjuntura">

  <h2>Conjuntura Nacional — Maio 2026</h2>

  <p>
    O debate público segue distante da realidade das comunidades. 
    Temas estruturais são substituídos por disputas narrativas e polarização superficial.
  </p>

  <div className="direcionamento">
    <strong>Direcionamento:</strong>
    <p>
      Fortalecer presença local, organizar lideranças e produzir ações concretas nos territórios.
    </p>
  </div>

</section>
      <p className="impacto">
  “Todo poder emana do povo.”
  <span className="fonte">
    Constituição Federal de 1988 (Art. 1º, parágrafo único)
  </span>
</p>

      <div className="estados">
        <button onClick={() => router.push("/estado/ba")}>BA</button>
        <button onClick={() => router.push("/estado/ce")}>CE</button>
        <button onClick={() => router.push("/estado/mg")}>MG</button>
        <button onClick={() => router.push("/estado/pe")}>PE</button>
        <button onClick={() => router.push("/estado/rj")}>RJ</button>
        <button onClick={() => router.push("/estado/sp")}>SP</button>
      </div>

    </div>
  );
}
