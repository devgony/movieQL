import {
  getMovies,
  getMovie,
  getSuggestions,
  getById,
  deleteMoive,
  addMovie,
} from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

// const resolvers = {
//   Query: {
//     movies: () => getMovies(),
//     movie: (_, { id }) => getById(id),
//   },
//   Mutation: {
//     addMovie: (_, { name, score }) => addMovie(name, score),
//     deleteMoive: (_, { id }) => deleteMoive(id),
//   },
// };

export default resolvers;
