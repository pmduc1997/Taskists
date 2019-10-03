import axios from 'axios';
import { Config } from '../configApp';

export default class BaseService {

    get(apiName) {
        return axios.get(`${Config.baseUrl}${apiName}`);
    }

    post() {

    }
}