import axios from "axios";

const tesloApi = axios.create({
  baseURL: "http://localhost:9000"
  
});


export default tesloApi;
