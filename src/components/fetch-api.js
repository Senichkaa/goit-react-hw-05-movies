import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f178f7ce976ed1c53f42d6d8f6a9420b'

export async function trendingRequest() {
    const { data } = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`,)
    
    return data;
}

export async function searchMovieRequest(film) {
    const { data } = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&query=${film}`,)
    
    return data;
}

export async function movieDetailsRequest(movieId) {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,)
    
    return data;
}

export async function movieCastRequest(movieId) {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,)
    
    return data;
}

export async function movieReviewsRequest(movieId) {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,)
    
    return data
}


