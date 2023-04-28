import { IAuth, INewAuth, IUser } from "./interface";

class Auth implements IAuth {
    private authenticated: boolean;
    private token: string;
    private user: IUser

    constructor() {
      this.authenticated = false;
      this.token = '';
      this.user = {
        name: '',
        email: '',
        profile: []
      }
    }
  
    logout() {
      this.authenticated = false;
      this.token = '';
      this.user = {
        name: '',
        email: '',
        profile: []
      }
      sessionStorage.removeItem('auth-123');
    }

    verifyAuth(auth: INewAuth) {
      if(!auth.token) {
        this.logout();
        return false;
      }
      if(!auth.user.name) {
        this.logout();
        return false;
      }
      if(!auth.user.email) {
        this.logout();
        return false;
      }
      if(!auth.user.profile) {
        this.logout();
        return false;
      }
      return true;
    }
  
    setAuth(auth: INewAuth) {
      if(!this.verifyAuth(auth)) return;   
      this.user = auth.user;
      this.token = auth.token;
      this.authenticated = auth.authenticated;
    }

    isAuthenticated() {
      return this.authenticated;
    }

    getToken() {
      return this.token;
    }

    getUser() {
      return this.user;
    }
  }
  
  export default new Auth();
  