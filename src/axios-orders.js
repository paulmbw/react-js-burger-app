import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-burger-ce160.firebaseio.com/'
});

export default instance;