import BaseService from './baseService'
import { API_USERS } from './listEndpoints'
export default class UserServices extends BaseService {
    getUsers() {
        return this.get(API_USERS)
    }
    addUsers(body) {
        return this.post(API_USERS,body)
    }
}