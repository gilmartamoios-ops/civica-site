import { useRouter } from "next/router";

import ba from "../../data/editoriais/ba.json";
import ce from "../../data/editoriais/ce.json";
import mg from "../../data/editoriais/mg.json";
import pe from "../../data/editoriais/pe.json";
import rj from "../../data/editoriais/rj.json";
import sp from "../../data/editoriais/sp.json";

const dados = { ba, ce, mg, pe, rj, sp };

export default function Estado() {
  const router = useRouter();
  const { uf } = router.query;

  const data = dados[uf];

  if (!data) return null;

  return (
    <div className="container">

      <button onClick={() => router.push("/")}>
        ← Voltar
      </button>

      <div 
        className="capa"
        style={{ backgroundImage: `url(${data.imagem_capa})` }}
      >
        <h2>{data.titulo}</h2>
        <span>{data.mes}</span>
      </div>

      <div className="autor">
        <img src={data.imagem_lideranca} />
        <strong>{data.autor}</strong>
      </div>

      <p className="texto">{data.conteudo}</p>

    </div>
  );
}
