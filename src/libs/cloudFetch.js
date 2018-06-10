import axios from 'axios';
import env from "../config/env";

const cloudFetch = axios.create({
    baseURL: env === 'development' ? 'http://api.scdata.top/' : 'http://api.scdata.top/',
    timeout: 5000
});

export default cloudFetch;