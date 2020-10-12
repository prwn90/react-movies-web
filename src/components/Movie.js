import React from "react";

//Images API movies
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if (vote >= 6) {
        return "green";
    } else if (vote >= 4) {
        return "yellow";
    } else {
        return "red";
    }
};

const Movie = ({ title, poster_path, overview, vote_average, vote_count }) => (

    <div className="movie">
        <img src= {
            poster_path ? IMG_API + poster_path : "https://cdn.pixabay.com/photo/2019/11/07/20/48/cinema-4609877_960_720.jpg"} alt={title} />
        <div className="movie-info">
            <h4>{title}</h4>
            <span className={`vot ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>

        <div className="movie-over">
            <h2>Movie Info</h2>
            <p>{overview}</p>
        </div>
    </div>
);

export default Movie; 