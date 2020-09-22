import axios from 'axios';

const api = axios.create({
  baseURL: 'https://s3.amazonaws.com/orama-media/json/fund_detail_full.json',
});

export default api;
