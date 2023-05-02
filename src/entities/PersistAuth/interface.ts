import { INewAuth } from "../Auth/interface";
export interface IAdapterAuth {
    getSessionAuth(): INewAuth;
    setSessionAuth(auth: INewAuth): void;
    clearSessionAuth(): void;
}
export interface IPersistAuth {
    getPersist(): INewAuth;
    setPersist(auth: INewAuth): void;
    clearPersist(): void;
}