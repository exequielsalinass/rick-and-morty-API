import axios from "axios";

import Character from "./Character";
import Paginator from "./Paginator";

import { useEffect, useState } from "react";

function CharacterList( {title } ) {
  const [character, setCharacter] = useState([]);
  const [pagination, setPagination] = useState(1); // paginas totales
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    const getCharacters = async () => {
      const pageUrl = `${url}/?page=${page}`;
      const data = await axios(pageUrl).then((data) => data.data);
      setCharacter(data.results);
      setPagination(data.info.pages);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    getCharacters();
  }, [page]);

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
        <div className="ml-2 mr-2">
          <h3 className="text-center font-bold text-xl">{title}</h3>
          <div className="my-4 grid grid-cols-auto gap-4">
            {character.length > 0 ? (
              character.map((item, i) => (
                <Character
                  title={title}
                  key={item.id + i}
                  {...item}
                ></Character>
              ))
            ) : (
              <p className="uppercase text-2xl font-bold text-neutral-500">NO HAY PERSONAJES</p>
            )}
          </div>
        </div>
      )}
      <Paginator setPage={setPage} page={page} pagination={pagination}/>
    </>
  );
}

export default CharacterList;
