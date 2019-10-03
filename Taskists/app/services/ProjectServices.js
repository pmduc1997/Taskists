import BaseService from './index'
import {API_GET_PROJECTS,API_POST_PROJECTS} from './listEndpoints'
export default class ProjectServices extends BaseService{
    getProjects(){
        return this.get(API_GET_PROJECTS)
    }
    addProject(body){
        return this.post(API_POST_PROJECT,body)
    }
}