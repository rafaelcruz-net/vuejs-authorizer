import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import Account from "../model/Account";

class AccountService {
    private axios: AxiosInstance;
    
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.VUE_APP_BASE_URL
        });
    }
    
    public createAccount(account: Account) : Promise<AxiosResponse<any>> {
        return this.axios.post("Authorizer/Account", account);
    }
}

const accountService = new AccountService();
export default accountService;