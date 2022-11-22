// import { requirePropFactory } from "@mui/material";
import axios from "axios";
let BASE_URL = process.env.REACT_APP_SITE;
console.log(process.env.REACT_APP_KEY);
console.log(process.env)
const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromAPI = async (url) => {
  let data = await axios.get(`${BASE_URL}${url}`, options);
  // console.log(data);
  return data;
}