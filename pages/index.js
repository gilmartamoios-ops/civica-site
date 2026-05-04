import { useState } from "react";

import ba from "../data/editoriais/ba.json";
import ce from "../data/editoriais/ce.json";
import mg from "../data/editoriais/mg.json";
import pe from "../data/editoriais/pe.json";
import rj from "../data/editoriais/rj.json";
import sp from "../data/editoriais/sp.json";

export default function Home() {
  const [estado, setEstado] = useState(null);

  const dados = {
    ba,
    ce,
    mg,
    pe,
    rj,
    sp
  };

  return (
    <div className="container">

      <header className="hero">

  <img src="/images/logo.png" className="logo" />

 
</header>
<p className="impacto">
  Lideranças não nascem prontas. São construídas.
</p>
      <div className="estados">
        <button onClick={() => setEstado("ba")}>BA</button>
        <button onClick={() => setEstado("ce")}>CE</button>
        <button onClick={() => setEstado("mg")}>MG</button>
        <button onClick={() => setEstado("pe")}>PE</button>
        <button onClick={() => setEstado("rj")}>RJ</button>
        <button onClick={() => setEstado("sp")}>SP</button>
      </div>

      {estado && dados[estado] && (
        <div className="editorial">

          <div 
            className="capa"
            style={{ backgroundImage: `url(${dados[estado].imagem_capa})` }}
          >
            <h2>{dados[estado].titulo}</h2>
            <span>{dados[estado].mes}</span>
          </div>

          <div className="autor">
            <img src={dados[estado].imagem_lideranca} />
            <div>
              <strong>{dados[estado].autor}</strong>
            </div>
          </div>

          <p className="texto">{dados[estado].conteudo}</p>

          <div className="acoes">
            {dados[estado].acoes?.map((acao, i) => (
              <div key={i} className="card">{acao}</div>
            ))}
          </div>

          <div className="galeria">
            {dados[estado].galeria?.map((img, i) => (
              <img key={i} src={img} />
            ))}
          </div>

        </div>
      )}
    </div>
  );
}
