
import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + ENV_VARS.TMDB_API_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (err) {
    // Log more detailed error information
    console.error(
      "Error while fetching from TMDB:",
      err.response ? err.response.data : err.message
    );
    throw new Error("Failed to fetch data from TMDB");
  }
};

// Usage example for fetching popular movies:
const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
fetchFromTMDB(url)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
