//definimos un servicio para acceder a datos. Agregamos un encabezado HTTP con la ayuda de la authHeader()función al solicitar un recurso autorizado.

import axios from "axios";
import authHeader from "./auth-header";

//const API_URL = "http://localhost:5000/api/test/";
const API_URL = "/api/test/";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
  };
  
  const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
  };
  
  const useServiceFunctions =  {
    getPublicContent,
    getUserBoard
   
  };
  export default useServiceFunctions
