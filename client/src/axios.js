import axios from 'axios';

const baseUrl = axios.create({
    // baseURL: 'http://localhost:3000/api/v1'
    baseURL: "https://forumapi.bekicodes.com/api/v1",
})

export default baseUrl;