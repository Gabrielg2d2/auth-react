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

      this.initializeAuth();
    }

    initializeAuth() {
      const auth = JSON.parse(sessionStorage.getItem('auth-123') || 'null');
      if(auth) this.setAuth(auth);
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

    persistAuth(auth: INewAuth) {
      if(!this.verifyAuth(auth)) return;
      sessionStorage.setItem('auth-123', JSON.stringify(auth));
    }
  
    setAuth(auth: INewAuth) {
      if(!this.verifyAuth(auth)) return;   
      this.user = auth.user;
      this.token = auth.token;
      this.authenticated = auth.authenticated;
      this.persistAuth(auth);
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
  