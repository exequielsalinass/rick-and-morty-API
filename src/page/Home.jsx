import useApi from "../hook/useApi";

import Header from "../layout/Header";
import CharacterList from "../components/CharacterList";
import EpisodesList from "../components/EpisodesList";

function Home() {
  const { personajesSeleccionados } = useApi();

  const personaje1 = [personajesSeleccionados.personaje1];
  const personaje2 = [personajesSeleccionados.personaje2];
  const personajes = [personaje1, personaje2];
  return (
    <>
      <Header />
      <div className="flex-col columns-2">
        <CharacterList title={"Characters #1"} />
        <CharacterList title={"Characters #2"} />
      </div>
      <div className="flex justify-between w-[90%] m-auto">
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
