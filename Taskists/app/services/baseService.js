import axios from 'axios';
import { Config } from '../configApp';
var config = {
    headers: {'Authorization': "bearer " + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzA3NzE4NTIsImlhdCI6MTU3MDE3MTg1Miwic3ViIjoiNWQ5NmJkOTFjNDkwZmM0YWMwMDg2N2ZkIn0.0M0UOoPZdKkVCKBh1Adv2yQ1nKuS6ZVI8eP29rmq__M'}
};
export default class BaseService {
    get(apiName) {
        return axios.get(`${Config.baseUrl}${apiName}`,config);
    }

    post() {

    }
}