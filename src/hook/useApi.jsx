import { useContext } from "react";
import ApiContext from "../context/ApiProvider";

function useApi() {
  return useContext(ApiContext);
}

export default useApi;
