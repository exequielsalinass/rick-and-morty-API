import { useState, useEffect } from "react";
import axios from "axios";

function Episodes({ episodio }) {
  const [episodeInfo, setEpisodeInfo] = useState({});

  const { air_date, episode, name } = episodeInfo;

  // Cuando el componente se renderice le asigno la info al state
  useEffect(() => {
    const getEpisodes = async () => {
      const data = await axios(episodio).then((data) => data.data);
      setEpisodeInfo(data);
    };
    getEpisodes();
  }, []);

  return (
    <div className="m-2 block w-full">
      <h2 className="m-2 text-lg font-semibold text-gray-900 ">{name}</h2>
      <ul className="ml-2 space-y-1 max-w-md list-disc list-inside text-gray-500 ">
        <li>{episode}</li>
        <li>{air_date}</li>
      </ul>
    </div>
  );
}

export default Episodes;
