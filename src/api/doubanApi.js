import * as axios from './api';

const baseUrl = 'https://api.douban.com/v2/movie';

const getTopMovies = (params = {
    start: 0,
    count: 10
}) => {
    return axios.get(`${baseUrl}/top250?start=${params.start}&count=${params.count}`)
}

const getTheatersMovies = (params = {
    city: '武汉',
    start: 0,
    count: 15
}) => {
    return axios.get(`${baseUrl}/in_theaters?city=${params.city}&start=${params.start}&count=${params.count}`)
}

const getSoonMovies = (params = {
    start: 0,
    count: 20
}) => {
    return axios.get(`${baseUrl}/coming_soon?start=${params.start}&count=${params.count}`)
}

const searchMovies = (params = {
    searchKey: '',
    tag: '喜剧',
    start: 0,
    count: 10
}) => {
    return axios.get(`${baseUrl}/search?q=${params.searchKey}&tag=${params.tag}&start=${params.start}&count=${params.count}`)
}

const getMovieDetail = (params = {
    id: '26942674'
}) => {
    return axios.get(`${baseUrl}/subject/${params.id}`)
}

export {
    getTopMovies,
    getTheatersMovies,
    getSoonMovies,
    searchMovies,
    getMovieDetail
}