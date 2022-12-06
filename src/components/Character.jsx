import { useState, useEffect } from "react";
import useApi from "../hook/useApi";

function Character(props) {
  const { setPersonajesSeleccionados } = useApi();
  const [bg, setBg] = useState(false);

  const { name, status, species, image, title, id, origin, location } = props;

  // Guardo las propiedades del personaje seleccionado dependiendo de si el titulo tiene el numero 2 o 1
  const handleSelect = () => {
    title.includes("2")
      ? setPersonajesSeleccionados((personaje) => ({
          ...personaje,
          personaje2: id,
        }))
      : setPersonajesSeleccionados((personaje) => ({
          ...personaje,
          personaje1: id,
        }));
    setBg(true);
  };
  

  return (
    <article
      className={`${
        bg ? "bg-gray-400" : "bg-gray-200"
      } cursor-pointer hover:bg-gray-300 hover:transition-colors select-none overflow-hidden rounded-md p-4 shadow-xl"`}
      key={id}
      onClick={() => handleSelect()}
    >
      <figure className="relative overflow-hidden rounded-md">
        <img
          src={image}
          className="block h-[300px] w-full object-cover object-center"
          alt={name}
        />
        <figcaption className="absolute bottom-0 flex w-full items-center gap-x-2 bg-neutral-800 px-3 py-2 text-sm capitalize text-white">
          <div className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                (status.toLowerCase() === "unknown" && "bg-[#A8A8A8]") ||
                (status.toLowerCase() === "alive" && "bg-[#8FB073]") ||
                (status.toLowerCase() === "dead" && "bg-[#B9535D]")
              }`}
            ></span>
            <span
              className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                (status.toLowerCase() === "unknown" && "bg-[#A8A8A8]") ||
                (status.toLowerCase() === "alive" && "bg-[#8FB073]") ||
                (status.toLowerCase() === "dead" && "bg-[#B9535D]")
              }`}
            ></span>
          </div>
          <span className="leading-4">
            {status} - {species}
          </span>
        </figcaption>
      </figure>

      <section className="flex flex-col gap-y-2 px-1 pt-3 text-neutral-800">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="text-sm">
          <span className="block font-bold text-neutral-700">Origin:</span>
          <span className="block capitalize">{origin.name}</span>
        </div>
        <div className="text-sm">
          <span className="block font-bold text-neutral-700">
            Last known location:
          </span>
          <span className="block capitalize">{location.name}</span>
        </div>
      </section>
    </article>
  );
}

export default Character;
