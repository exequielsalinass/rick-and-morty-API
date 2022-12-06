import useApi from "../hook/useApi";

import { useEffect } from "react";

import Header from "../layout/Header";
import CharacterList from "../components/CharacterList";
import EpisodesList from "../components/EpisodesList";
import Alerta from "../components/Alerta";

function Home() {
  const { personajesSeleccionados, setPersonajesSeleccionados } = useApi();

  const personaje1 = [personajesSeleccionados.personaje1];
  const personaje2 = [personajesSeleccionados.personaje2];
  const personajes = [personaje1, personaje2];

  useEffect(() => {
    const anchor = document.querySelector("#episodes-list");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [
    personajesSeleccionados.personaje2 && personajesSeleccionados.personaje1,
  ]);

  const handleReset = () => {
    setPersonajesSeleccionados({
      personaje1: 0,
      personaje2: 0,
    });
  };

  return (
    <>
      <Header />
      <div className="flex-col columns-2">
        <CharacterList title={"Characters #1"} />
        <CharacterList title={"Characters #2"} />
      </div>
      {!personajesSeleccionados.personaje1 ||
      !personajesSeleccionados.personaje2 ? (
        <Alerta msg={"You must select 2 characters"} />
      ) : null}
      <div className="flex justify-center ">
        <button
          onClick={handleReset}
          type="button"
          className="text-sm px-5 py-2 w-full md:w-auto rounded-lg uppercase font-bold bg-neutral-800 mb-3 text-white text-center mt-5 flex gap-2 items-center justify-center"
        >
          RESET
        </button>
      </div>
      <div
        id="episodes-list"
        className="flex justify-between w-[90%] m-auto max-h-[700px] overflow-y-auto mb-7 bg-[#E3E3DC]"
      >
        {personajesSeleccionados.personaje1 &&
        personajesSeleccionados.personaje2 ? (
          <>
            <EpisodesList
              title={"Character #1 - Only Episodes"}
              personajes={personaje1}
            />
            <EpisodesList
              title={"Character #1 & 2 - Shared Episodes"}
              personajes={personajes}
            />
            <EpisodesList
              title={"Character #2 - Only Episodes"}
              personajes={personaje2}
            />
          </>
        ) : null}
      </div>
    </>
  );
}

export default Home;
