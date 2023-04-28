import { INewAuth } from "../Auth/interface";
import { AdapterSessionStorage } from "./AdapterSessionStorage";

export class PersistAuth extends AdapterSessionStorage{

    getPersist() {
        return this.getSessionStorage();
    }

    setPersist(auth: INewAuth) {
        this.setSessionStorage(auth);
    }

    clearPersist() {
        this.clearSessionStorage();
    }
}