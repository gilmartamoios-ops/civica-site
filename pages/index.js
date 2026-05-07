import { useRouter } from "next/router";
import MenuEstados from "../components/MenuEstados";
export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
<MenuEstados />
      <header className="hero">
        <img src="/images/logo.png" className="logo" />
      </header>

    <p className="frase-impacto">
  CÍVICA — quando vozes se organizam, elas influenciam.
</p>

    <section className="conjuntura">

  <h2>Conjuntura Nacional — Maio 2026 • v2</h2>

  <p>
   A principal crise brasileira não está apenas nas instituições, mas no enfraquecimento progressivo da sociedade civil organizada.

Ao longo dos anos, a participação comunitária foi substituída por opinião, polarização e consumo passivo de informação. A consequência direta disso é o distanciamento entre representantes e a realidade concreta dos territórios.

Sem organização local, não há formação contínua de lideranças, não há pressão social qualificada e não há renovação real da representação política.

A deterioração da qualidade do debate público é apenas o reflexo visível de um problema mais profundo: a desmobilização da participação cidadã organizada.
  </p>

  <div className="direcionamento">
    <strong>Direcionamento:</strong>
     <ul>
    <li>Fortalecer organização local</li>
    <li>Formar novas lideranças</li>
    <li>Criar núcleos comunitários permanentes</li>
    <li>Transformar presença social em influência real</li>
  </ul>
    
  </div>

</section>


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
