

import React, { useState, useEffect } from "react";
import "../Row/Row.css";
import axios from "../../Utils/axios";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    //const base_url = "https://image.tmdb.org/t/p/original";
    const base_url = "https://image.tmdb.org/t/p/original";



    useEffect(() => {
        (async () => {
            try {
                console.log(fetchUrl);
                const request = await axios.get(fetchUrl);
                console.log(request.data);
                setMovie(request.data.results);
            } catch (error) {
                console.error("API Fetch Error:", error);
            }
        })();
    }, [fetchUrl]);
    

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    console.log(url)
                    const urlParams = new URLSearchParams(new URL(url).search)
                    console.log(urlParams)
                    console.log(urlParams.get('v'))
                    setTrailerUrl(urlParams.get('v'));
                })
        }
    }

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
        autoplay: 1,
        },
    }

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies?.map((movie, index) => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={index} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    />
                ))}
            </div>
            <div style={{ padding: '40px' }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    )
}

export default Row;


// import React, { useState, useEffect } from "react";
// import "../Row/Row.css";
// import axios from "../../Utils/Axios";
// import movieTrailer from "movie-trailer";
// import YouTube from "react-youtube";

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");

//   const base_url = "https://image.tmdb.org/t/p/original";

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         console.log("Fetching URL:", fetchUrl);
//         const request = await axios.get(fetchUrl);
//         setMovies(request.data.results || []);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchMovies();
//   }, [fetchUrl]);

//   const handleClick = async (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       try {
//         const url = await movieTrailer(
//           movie?.title || movie?.name || movie?.original_name || ""
//         );
//         if (url) {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get("v"));
//         } else {
//           console.error("No trailer found for this movie.");
//         }
//       } catch (error) {
//         console.error("Error fetching trailer:", error);
//       }
//     }
//   };

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className="row">
//       <h1>{title}</h1>
//       <div className="row__posters">
//         {movies.map((movie, index) => (
//           <img
//             key={index}
//             onClick={() => handleClick(movie)}
//             src={
//               movie.poster_path || movie.backdrop_path
//                 ? `${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`
//                 : "fallback_image_url" // Replace with a valid fallback image URL
//             }
//             alt={movie.name || "Movie"}
//             className={`row__poster ${isLargeRow && "row__posterLarge"}`}
//           />
//         ))}
//       </div>
//       <div style={{ padding: "40px" }}>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//     </div>
//   );
// };

// export default Row;
