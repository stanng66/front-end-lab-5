// ====================
// Lab 5
// Stanley Nguyen
// Humber College
// Cpan-144-RNA
// Ronak Sheth
// June 26, 2026
// --------------------
// This program 
// ====================
// List containings favorite items
function FavouriteMovieList() {
    const [movies, setMovies] = React.useState ([
        { id: 1, name: "Shaolin Soccer", rating: 4, image: "images/shaolin_soccer.jpg" },
        { id: 2, name: "Iron Monkey", rating: 5, image: "images/iron_monkey.jpg" },
        { id: 3, name: "The Colors Within", rating: 6, image: "images/the_colors_within.jpg" },
        { id: 4, name: "Ponyo", rating: 3, image: "images/ponyo.jpg"},
        { id: 5, name: "Princess Mononoke", rating: 5, image: "images/mononoke.jpg"},
    ]);

    // Update rating function
    const updateRating = (id, amount) => {
        setMovies(
            movies.map(movie => {
              if (movie.id === id) {
                const newRating = movie.rating + amount;

                // rating range between 0 and 10
                const limitedRating = Math.max(0, Math.min(newRating, 10));

                return { ...movie, rating: limitedRating };
              }
              return movie;
            })
        );
    }; 

    // Upvote and downvote button
    return (
        <div className="movie-grid">
            {movies.map(movie => (
               <MovieItem
                  key={movie.id}
                  name={movie.name}
                  rating={movie.rating}
                  image={movie.image}
                  onUpvote={() => updateRating(movie.id, +1)}
                  onDownvote={() => updateRating(movie.id, -1)}
                />
            ))}
        </div>
    );
}

function MovieItem(props) {
    return (
        <div className="movie-card">
            <img
               src={props.image}
               alt={props.name}
               className="movie-image"
            />

          <h3>{props.name}</h3>
          <p>Rating: {props.rating}</p>

          <button onClick={props.onUpvote}>Upvote</button>
          <button onClick={props.onDownvote}>Downvote</button>
        </div>
    );
}

// Render to the page
ReactDOM.render(<FavouriteMovieList />, document.getElementById("root"));
