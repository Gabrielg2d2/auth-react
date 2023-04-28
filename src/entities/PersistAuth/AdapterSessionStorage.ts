import { INewAuth } from "../Auth/interface";

export class AdapterSessionStorage {

    private keyStorage: string;

    constructor() {
        this.keyStorage = 'auth-123';
    }

    getSessionStorage() {
        return JSON.parse(sessionStorage.getItem(this.keyStorage) || 'null');
    }

    setSessionStorage(auth: INewAuth) {
        sessionStorage.setItem(this.keyStorage, JSON.stringify(auth));
    }

    clearSessionStorage() {
        sessionStorage.removeItem(this.keyStorage);
    }
}