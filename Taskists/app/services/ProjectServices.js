import BaseService from './baseService'
import { API_PROJECTS } from './listEndpoints'
export default class ProjectServices extends BaseService {
    getProjects() {
        return this.get(API_PROJECTS)
    }
    addProject(body) {
        return this.post(API_PROJECTS,body)
    }
}