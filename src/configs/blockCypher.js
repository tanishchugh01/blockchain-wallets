import axios from "axios";
import CONSTANTS from "./CONSTANTS.js";
import dotenv from "dotenv";

dotenv.config();

const blockCypher = axios.create({
  baseURL: CONSTANTS.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    token: process.env.BLOCK_CYPHER_TOKEN,
  },
});

export default blockCypher;
