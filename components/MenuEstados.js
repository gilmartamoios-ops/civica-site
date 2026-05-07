import { useRouter } from "next/router";

export default function MenuEstados() {
  const router = useRouter();

  return (
    <div className="menu-fixo">

      <button onClick={() => router.push("/")}>
        HOME
      </button>

      <button onClick={() => router.push("/estado/rj")}>
        RJ
      </button>

      <button onClick={() => router.push("/estado/sp")}>
        SP
      </button>

      <button onClick={() => router.push("/estado/mg")}>
        MG
      </button>

      <button onClick={() => router.push("/estado/ba")}>
        BA
      </button>

      <button onClick={() => router.push("/estado/ce")}>
        CE
      </button>

      <button onClick={() => router.push("/estado/pe")}>
        PE
      </button>

      <button onClick={() => router.push("/manifesto")}>
        MANIFESTO
      </button>

    </div>
  );
}
