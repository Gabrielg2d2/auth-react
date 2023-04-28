import { INewAuth } from "../Auth/interface";
import { AdapterSessionStorage } from "./AdapterSessionStorage";
import { IPersistAuth } from "./interface";

export class PersistAuth extends AdapterSessionStorage implements IPersistAuth{

    getPersist() {
        return this.getSessionAuth();
    }

    setPersist(auth: INewAuth) {
        this.setSessionAuth(auth);
    }

    clearPersist() {
        this.clearSessionAuth();
    }
}