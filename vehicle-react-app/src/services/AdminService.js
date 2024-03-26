import { axiosInstance } from "./apiClient";
class AdminService{
    addCustomer(customer){
        return axiosInstance.post('http://localhost:8080/home/customer/add',customer);
    }   
    
    deleteCustomer(customerId) {
        return axiosInstance.delete(`http://localhost:8080/home/customer/delete/${customerId}`);
    }
}

export default new AdminService();