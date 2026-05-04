import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">

      <header className="hero">
        <img src="/images/logo.png" className="logo" />
      </header>

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
