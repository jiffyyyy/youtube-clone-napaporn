import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params:{
        maxResults: 50,
    },
   headers: {
       'X-RapidAPI-Key': 'faef6707a0msh58819e6b31e8b93p111347jsn66472c9b5256',
       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
   },
};

export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}