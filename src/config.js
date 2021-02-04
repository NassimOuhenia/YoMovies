const K = 1000;
const M = K * K;
const Md = K * M;

const ROUNDS = [{one: Md, symbol: 'Md'}, {one: M, symbol: 'M'}, {one: K, symbol: 'K'}]

const PER_PAGE = 4;

const MOVIE_API = 'http://www.omdbapi.com/';
const API_KEY = '21b019d7';
export {MOVIE_API, API_KEY, ROUNDS, PER_PAGE};
