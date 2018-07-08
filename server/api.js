import axios from 'axios';


export default axios.create({
  baseURL: `http://localhost:56508/WS.asmx`
});