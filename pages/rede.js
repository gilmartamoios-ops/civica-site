import MenuEstados from "../components/MenuEstados";

export default function Rede() {
  return (
    <div className="container">

      <MenuEstados />

      <div className="manifesto">

        <h1>Rede CÍVICA</h1>

        <p className="frase-impacto">
          Organização local. Conexão nacional.
        </p>

        <div className="manifesto-texto">

          <p>
            A Rede CÍVICA é um ambiente de articulação,
            formação e apoio para pessoas interessadas
            em fortalecer participação cidadã organizada
            em seus territórios.
          </p>

          <p>
            A proposta da rede não é substituir lideranças locais,
            mas conectar experiências, compartilhar conhecimento
            e ampliar capacidade de organização comunitária.
          </p>

          <h2>Como funciona</h2>

          <div className="participar">

            <ul>

              <li>
                Capacitação e materiais de apoio para atuação local.
              </li>

              <li>
                Compartilhamento de experiências entre núcleos.
              </li>

              <li>
                Informes, campanhas e ações coordenadas.
              </li>

              <li>
                Modelos de documentos, pedidos públicos e organização cidadã.
              </li>

              <li>
                Acesso a ferramentas de acompanhamento da transparência pública.
              </li>

            </ul>

          </div>

          <h2>Quem pode participar</h2>

          <p>
            Pessoas comprometidas com participação cidadã,
            organização comunitária e atuação responsável
            em seus municípios e estados.
          </p>

          <p>
            A entrada na Rede CÍVICA ocorre mediante
            solicitação e análise inicial de integração.
          </p>

          <div className="participar">

            <h3>Solicitar participação</h3>

            <p>
              Em breve a Rede CÍVICA disponibilizará
              o canal oficial de integração para novos participantes.
            </p>

            <button className="manifesto-btn">
              Solicitação em breve
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
