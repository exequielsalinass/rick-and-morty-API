import { useState, createContext } from "react";

const ApiContext = createContext();

function ApiProvider({ children }) {
  const [personajesSeleccionados, setPersonajesSeleccionados] = useState({
    personaje1: 0,
    personaje2: 0,
  });

  return (
    <ApiContext.Provider
      value={{
        personajesSeleccionados,
        setPersonajesSeleccionados,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export { ApiProvider };

export default ApiContext;
