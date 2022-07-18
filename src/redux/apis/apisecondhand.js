import axios from 'axios';

export default axios.create({
    baseURL: 'https://scnd-appr-beta.herokuapp.com/',
    // baseURL: 'http://localhost:8000',
    headers:{'Content-Type': 'application/json'}
});