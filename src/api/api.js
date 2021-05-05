import axios from "axios";

const BASE_URL = "https://api-factory.simbirsoft1.com/api/";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Api-Factory-Application-Id': process.env.APP_ID,
    'Authorization': `Basic ${process.env.SECRET_KEY}`,
    'Content-type': 'application/json',
  }
});
