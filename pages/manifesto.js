import { useRouter } from "next/router";
import MenuEstados from "../components/MenuEstados";

export default function Manifesto() {
  const router = useRouter();

  return (
    <div className="container">

      <MenuEstados />

      <div className="manifesto">

       
    <h1>Manifesto CÍVICA</h1>

        <div className="manifesto-texto">

          <p className="frase-impacto">
            Quando vozes se organizam, elas influenciam.
          </p>

          <p>
            O Brasil enfrenta uma crise que transcende a esfera política:
            a erosão da participação cidadã organizada e consciente.
            Ao longo das últimas décadas, a sociedade civil perdeu sua
            capacidade de articulação local, de formação comunitária e
            de influência efetiva nas decisões que moldam seus territórios.
          </p>

          <p>
            A indignação, muitas vezes passageira, substituiu a participação.
            A polarização, a organização. E comunidades inteiras foram reduzidas
            a meras massas eleitorais.
          </p>

          <p>
            A CÍVICA surge como uma resposta urgente a essa realidade.
            Somos um movimento dedicado a reconstruir a participação local,
            formar novas lideranças e fortalecer a organização comunitária.
          </p>

          <p>
            Acreditamos que a verdadeira transformação social e política
            emana da base, da capacidade dos cidadãos de se unirem em torno
            de causas comuns e de fiscalizarem ativamente o poder público.
          </p>

          <h2>Nossos Princípios Fundamentais</h2>

          <div className="participar">

            <ul>

              <li>
                <strong>Autonomia Local com Conexão Nacional:</strong>
                Reconhecemos que a força da CÍVICA reside na capacidade dos
                núcleos locais de se moverem por suas próprias causas.
                A estrutura nacional existe para amplificar essas vozes,
                oferecer metodologia e conectar experiências.
              </li>

              <li>
                <strong>Amplificação, Não Substituição:</strong>
                Nosso papel é fortalecer lideranças e organizações locais,
                oferecendo ferramentas, capacitação e rede de apoio.
              </li>

              <li>
                <strong>Transparência e Responsabilidade:</strong>
                Atuamos com clareza em nossos objetivos e métodos,
                buscando prestação de contas e responsabilidade pública.
              </li>

              <li>
                <strong>Neutralidade Partidária e Independência:</strong>
                A CÍVICA não pertence a partidos políticos nem atua como
                instrumento de projetos pessoais,mas apoia qualquer candidatura
                de liderança sua comprometida com seu manifesto.
              </li>

              <li>
                <strong>Ação Concreta e Resultados Visíveis:</strong>
                A mobilização se sustenta em vitórias reais,
                ações locais de impacto e participação contínua.
              </li>

            </ul>

          </div>

          <h2>Nosso Chamado</h2>

          <p>
            Este é um convite a todos que compreendem que indignação sem
            organização é estéril.
          </p>

          <p>
            Àqueles que desejam transformar a passividade em protagonismo,
            a fragmentação em rede e a voz individual em influência coletiva.
          </p>

          <p>
            Junte-se à CÍVICA e participe da reconstrução da participação
            cidadã em nossos municípios, estados e no Brasil.
          </p>

        </div>

      </div>

    </div>
  );
}
