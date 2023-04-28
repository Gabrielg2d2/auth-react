import { INewAuth } from "../Auth/interface";
import { IAdapterAuth } from "./interface";

export class AdapterSessionStorage implements IAdapterAuth {

    private keyStorage: string;

    constructor() {
        this.keyStorage = 'auth-123';
    }

    getSessionAuth() {
        return JSON.parse(sessionStorage.getItem(this.keyStorage) || 'null');
    }

    setSessionAuth(auth: INewAuth) {
        sessionStorage.setItem(this.keyStorage, JSON.stringify(auth));
    }

    clearSessionAuth() {
        sessionStorage.removeItem(this.keyStorage);
    }
}