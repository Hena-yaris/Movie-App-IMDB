import { useEffect, useState } from "react";
import "./movieTrailer.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

import { useParams } from "react-router-dom";

const MovieTrailer = () => {
  const { id } = useParams();

  const [currentMovie, setMovie] = useState();

  const [trailerurl, setTrailerUrl] = useState("");
  const baseurl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1de4df672214418bab33ff3de8f85585&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  const youWant = (currentMovie) => {
    if (trailerurl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        currentMovie?.title || currentMovie?.name || currentMovie?.original_name
      ).then((url) => {
        // console.log(url);
        const urlParams = new URLSearchParams(new URL(url).search); 
        // console.log(urlParams);
        // console.log(urlParams.get("v"));
        setTrailerUrl(urlParams.get("v")); // keza wst yevideo idwn netlo bemawtat state tu lay yaskemtlnal
      });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="movie">
        <div className="movie__top">
          <img
            className="movie__backdrop"
            src={`${baseurl}${currentMovie ? currentMovie.backdrop_path : ""}`}
          />
          <button onClick={() => youWant(currentMovie)} className="yes">
            click me to see the trailer
          </button>
        </div>
        <div className="movie__bottom">
          <img
            className="movie__poster"
            src={`${baseurl}${currentMovie ? currentMovie.poster_path : ""}`}
          />
        </div>
      </div>
      <div style={{ padding: "45px" }}>
        {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
      </div>
    </>
  );
};

export default MovieTrailer;
