const API_KEY = "d5a780a7fa5bee7d46189f35d38c720f";

const requests = {
    fettchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    fettchNetflixOrginals: `discover/tv?api_key=${API_KEY}&language=en-US`,
    fettchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fettchActionMovies: `discover/movie?api_key=${API_KEY}&with_generes=28`,
    fettchComedyMovies: `discover/movie?api_key=${API_KEY}&with_generes=35`,
    fettchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_generes=27`,
    fettchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_generes=10749`,
    fettchDocumentaries: `discover/movie?api_key=${API_KEY}&with_generes=99`
}

export default requests