import { useRouter } from "next/router";

import MenuEstados from "../../components/MenuEstados";

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
  <MenuEstados />
    
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
<img 
  src="/images/logo-mini.png" 
  className="logo-capa" 
/>
        
        <div className="capa-content">
          <span className="estado-tag">{data.estado}</span>
          <h1>{data.titulo}</h1>
          <p className="mes">{data.mes}</p>
        </div>
      </div>
        
<p className="frase-impacto">
  CÍVICA — quando vozes se organizam, elas influenciam.
</p>
    
<div className="territorio">
  <p>
    Atuação em desenvolvimento no estado do {data.estado}, com foco na organização local e fortalecimento de lideranças comunitárias.
  </p>
</div>

      {/* LIDERANÇA */}
      <div className="lideranca">
        <img src={data.imagem_lideranca} />
        <div>
          <strong>{data.autor}</strong>
<span> • Coordenação Estadual</span>
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
    Este movimento está em construção e começa pela ação local.
  </p>

  <p>
    Se você se identifica com essa proposta, o próximo passo é acompanhar a organização da comunidade e participar da construção dos núcleos no seu território.
  </p>

  <p>
    A participação acontece por articulação local, contato direto e integração na comunidade principal do movimento.
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
