import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID FXEOlvCljnVeZlxf1rU79-CDQQ7kC5Ut5edI3uSOE18',
  },
});
