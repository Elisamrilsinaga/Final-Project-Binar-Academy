import axios from 'axios';

export default axios.create({
    baseURL: 'https://scnd-appr-beta.herokuapp.com/',
    headers:{'Content-Type': 'application/json'}
});