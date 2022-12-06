import { useState, useEffect } from "react";
import Episodes from "./Episodes";

import axios from "axios";

function EpisodesList({ title, personajes }) {
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);

  const url = "https://rickandmortyapi.com/api/character";

  // Si la longitud del array no es igual a 2 entonces busco todos los episodios

  const getEpisodesList = async () => {
    const url_episode = `${url}/${personajes}`;
    const data = await axios(url_episode).then((data) => data.data);
    data.length !== 2 ? setEpisodes(data.episode) : filterEpisodes(data);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  // Tomo un arreglo de objetos y devuelvo otro arreglo de objetos

  const filterEpisodes = (personajes) => {
    const episodiosPersonaje1 = personajes[0].episode;
    const episodiosPersonaje2 = personajes[1].episode;
    const episodiosFilter = episodiosPersonaje1.filter((episodio) =>
      episodiosPersonaje2.includes(episodio)
    );
    setEpisodes(episodiosFilter);
  };

  useEffect(() => {
    if (personajes[0] !== 0) {
      getEpisodesList();
    }
  }, [personajes]);

  return (
    <>
      {/* Spinner */}
      {loading ? (
        <div className="absolute top-0 left-0 flex h-screen w-full select-none items-center justify-center p-4">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-4 py-2 text-neutral-800 shadow-sm"
          >
            <svg
              className="-ml-1 mr-3 h-5 w-5 animate-spin text-neutral-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </button>
        </div>
      ) : (
        <>
          <section className="md:flex flex-col justify-start items-center w-[30%] h-auto">
            <h3 className="uppercase font-bold m-4">{title}</h3>
            <div className="md:flex items-center justify-start flex-wrap">
              {episodes ? (
                episodes.map((episodio, i) => (
                  <Episodes key={i} episodio={episodio} />
                ))
              ) : (
                <p className="uppercase text-center text-red-600 font-bold">
                  the characters are the same
                </p>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default EpisodesList;
