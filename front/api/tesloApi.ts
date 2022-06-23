import axios from "axios";

const tesloApi = axios.create({
  // withCredentials: true,
  baseURL: "http://localhost:9000"
  
});


export default tesloApi;
