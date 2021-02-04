import {get} from "axios";
import {API_KEY, MOVIE_API, ROUNDS} from "../config";
import {movies$} from "../data/movies";

function findRounding(nbr) {

    let result = nbr;

    ROUNDS.map((round) => {
        let x = Math.floor(nbr / round.one);
        if (0 < x) {
            result = `${x}${round.symbol}`;
        }
    });
    return result;
}

function findRatio(nbLikes, nbDislikes) {
    return (nbLikes / (nbDislikes + nbLikes)) * 100;
}

async function findImage(title) {
    const response = await get(`${MOVIE_API}?t=${title}&apikey=${API_KEY}`);
    return response.data.Title === title ? response.data.Poster : '';
}

async function getMovies() {
    const movies = await movies$;
    return {movies};
}

export {findRounding, findRatio, findImage, getMovies};
