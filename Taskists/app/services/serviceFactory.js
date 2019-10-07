import ProjectServices from './projectServices';
import UserServices from './userServices';

const SERVICES = {
    ProjectServices,
    UserServices
}

const instance = {};

export default class ServiceFactory {
    static getService(serviceName) {
        let ServiceClass = SERVICES[serviceName];
        let serviceInstance = instance[serviceName];
        if(!serviceInstance) {
            serviceInstance = new ServiceClass();
            instance[serviceName] = serviceInstance;
        }
        return serviceInstance;
    }
}