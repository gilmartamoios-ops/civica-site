import { useRouter } from "next/router";

export default function Manifesto() {
  const router = useRouter();

  return (
    <div className="container">

      <button className="voltar" onClick={() => router.push("/")}>
        ← Voltar
      </button>

      <div className="manifesto">

        <h1>Manifesto CÍVICA</h1>

        <p className="frase-impacto">
          CÍVICA — quando vozes se organizam, elas influenciam.
        </p>

        <div className="manifesto-texto">

          <p>
            O Brasil não sofre apenas de má política.
            Sofre da ausência de participação real, organizada e consciente.
          </p>

          <p>
            Ao longo dos anos, a sociedade civil perdeu capacidade de articulação local,
            formação comunitária e influência organizada.
          </p>

          <p>
            A participação foi substituída por indignação passageira.
            A organização foi substituída por polarização.
            E comunidades inteiras passaram a existir apenas como massa eleitoral.
          </p>

          <p>
            A CÍVICA nasce da necessidade de reconstruir participação local,
            formar lideranças e fortalecer organização comunitária.
          </p>

          <p>
            Somos uma rede de pessoas comprometidas com presença ativa,
            responsabilidade coletiva e transformação concreta dos territórios.
          </p>

          <p>
            Não somos extensão de partidos.
            Não somos instrumento de projetos pessoais.
            Pertencemos apenas à sociedade.
          </p>

          <p>
            Nossa força não está em cargos.
            Está na capacidade de organizar, formar e mobilizar.
          </p>

          <p>
            Este é um convite para quem entende que indignação sem organização
            não produz transformação real.
          </p>

        </div>
      </div>
    </div>
  );
}
