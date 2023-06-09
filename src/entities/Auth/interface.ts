export interface IUser  {
    name: string;
    email: string;
    profile: string[];
  }
  
export interface INewAuth {
    authenticated: boolean;
    token: string;
    user: IUser;
}
  
export interface IAuth {
    logout(): void;
    setAuth(auth: INewAuth): void;
  
    getToken(): string;
    getUser(): IUser;
    
    verifyAuth(auth: INewAuth): boolean;
    isAuthenticated(): boolean;
  }