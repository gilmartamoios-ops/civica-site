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
<div className="topo-logo">
  <img src="/images/logo-mini.png" />
</div>
  
      {/* BOTÃO VOLTAR */}
      <button className="voltar" onClick={() => router.push("/")}>
        ← Voltar
      </button>

      {/* CAPA */}
      <div 
        className="capa"
        style={{ backgroundImage: `url(${data.imagem_capa})` }}
      >
        <div className="overlay" />

        <div className="capa-content">
          <span className="estado-tag">{data.estado}</span>
          <h1>{data.titulo}</h1>
          <p className="mes">{data.mes}</p>
        </div>
      </div>

      {/* LIDERANÇA */}
      <div className="lideranca">
        <img src={data.imagem_lideranca} />
        <div>
          <strong>{data.autor}</strong>
          <span>Coordenação Estadual</span>
        </div>
      </div>

      {/* TEXTO */}
      <div className="texto">
        {data.conteudo}
      </div>

      {/* DIRETRIZES / AÇÕES */}
      <div className="acoes">
        <h3>Diretrizes de atuação</h3>
        <div className="acoes-grid">
          {data.acoes?.map((acao, i) => (
            <div key={i} className="card">{acao}</div>
          ))}
        </div>
      </div>

      {/* GALERIA */}
      <div className="galeria">
        {data.galeria?.map((img, i) => (
          <img key={i} src={img} />
        ))}
      </div>
{/* PARTICIPAÇÃO */}
<div className="participar">

  <h3>Como participar</h3>

  <p>
    Este movimento se constrói a partir da ação local. 
    Se você se identifica com as diretrizes apresentadas, o próximo passo é se conectar com a organização no seu território.
  </p>

  <ul>
    <li>Participar de reuniões locais</li>
    <li>Contribuir com organização comunitária</li>
    <li>Ajudar na mobilização de novas lideranças</li>
  </ul>

</div>
    </div>
  );
}
