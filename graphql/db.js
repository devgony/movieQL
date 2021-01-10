import fetch from "node-fetch";
import axios from "axios";
import resolvers from "./resolvers";

const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};
// export const getMovie = (title) => {};

// export let movies = [
//   {
//     id: 0,
//     name: "avangers",
//     score: 20,
//   },
//   {
//     id: 1,
//     name: "beginagain",
//     score: 30,
//   },
//   {
//     id: 2,
//     name: "mr.sunshine",
//     score: 18,
//   },
// ];

// export const getMovies = () => movies;

// export const getById = (id) => {
//   const filteredMovies = movies.filter((person) => person.id === id);
//   return filteredMovies[0];
// };

// export const deleteMoive = (id) => {
//   const cleanedMovies = movies.filter((movie) => movie.id !== id);
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: movies.length + 1,
//     name,
//     score,
//   };
//   movies.push(newMovie);
//   return newMovie;
// };
