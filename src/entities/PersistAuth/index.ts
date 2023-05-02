import { INewAuth } from "../Auth/interface";
import { AdapterSessionStorage } from "./AdapterSessionStorage";
import { IPersistAuth } from "./interface";

export class PersistAuth implements IPersistAuth{

    private adapter: AdapterSessionStorage;

    constructor() {
        this.adapter = new AdapterSessionStorage();
    }

    getPersist() {
        return this.adapter.getSessionAuth();
    }

    setPersist(auth: INewAuth) {
        this.adapter.setSessionAuth(auth);
    }

    clearPersist() {
        this.adapter.clearSessionAuth();
    }
}