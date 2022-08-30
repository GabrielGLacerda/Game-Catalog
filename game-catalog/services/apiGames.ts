import axios from "axios";

export const apiGames =  axios.create({
    baseURL: 'http://localhost:3000/api'
})