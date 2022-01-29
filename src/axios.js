import axios from "axios";

const instance = axios.create({
    baseURL: '...' // the API URL (Cloud Function using NodeJS)
});

export default instance;