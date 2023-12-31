import { useEffect, useState } from 'react';
import {MovieView} from "./movieview";
import {MovieCard} from "./movie-card";

export const MainView = () => {
 // State to store the movie data retrieved from the API
  const [movies, setMovies] = useState([]);
   // State to store the selected movie for displaying its details
   const [selectedMovie, setSelectedMovie] = useState(null);
   // Fetch movie data from the API when the component mounts
  useEffect(() => {
fetch("https://myflixapii-3122b3109c5c.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

	      
        // Transform the fetched data to match the required structure
		
			const moviesFromAPI = data.map((movie) => {
				return {
					_id: movie._id,
					title: movie.Title,
					imagePath: movie.ImagePath,
					 Director: {
              firstName: movie.Director.firstName,
              lastName: movie.Director.lastName
            },
            Description: movie.Description,
            Year: movie.Year,
            Genres: movie.Genres.map((genre) => genre.Name),
            Featured: movie.Featured
          };
        });
	      
    // Set the transformed movie data in the state

			setMovies(moviesFromAPI);
		})
	  .catch((error) => {
        console.log('Error fetching movies:', error);
      });
  }, []);
 // If a movie is selected, render the MovieView component
  if (selectedMovie) {
    return (
        <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  } 
   // If the movie list is empty, display a message
   if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  // Render the movie cards for each movie in the list
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
        key={movie._id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
      </div>
  );
};
		
