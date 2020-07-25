import axios from 'axios';

export const getDataService = async query => {
    const url = `http://localhost:3000/search?q=${query}`;
    return await axios.get(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}