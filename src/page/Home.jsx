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
      <div className="bg-green-600 flex-col columns-2">
        <CharacterList title={"Personajes #1"} />
        <CharacterList title={"Personajes #2"} />
      </div>
      <div className="flex justify-between w-[90%] m-auto">
        {personajesSeleccionados.personaje1 &&
        personajesSeleccionados.personaje2 ? (
          <>
            <EpisodesList
              title={"Episodios Personaje #1"}
              personajes={personaje1}
            />
            <EpisodesList
              title={"Episodios en comun"}
              personajes={personajes}
            />
            <EpisodesList
              title={"Episodio Personaje #2"}
              personajes={personaje2}
            />
          </>
        ) : null}
      </div>
    </>
  );
}

export default Home;
