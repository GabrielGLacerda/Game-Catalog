import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getGames(req: NextApiRequest, res:NextApiResponse) {
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
          'X-RapidAPI-Key': 'e578d80337msh146dfa79bd3d07fp15b5b9jsn37a3357291bd',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      const response = await axios.request(options)
      return res.json(response.data)
} 



