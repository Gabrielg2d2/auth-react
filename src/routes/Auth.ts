interface IUser  {
  name: string;
  email: string;
  profile: string[];
}

export interface IAuth {
  authenticated: boolean;
  token: string;
  user: IUser;
}

class Auth {
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

    verifyAuth(auth: IAuth) {
      if(!auth.token) return this.logout();
      if(!auth.user.name) return this.logout();
      if(!auth.user.email) return this.logout();
      if(!auth.user.profile) return this.logout();
      return true;
    }

    persistAuth(auth: IAuth) {
      if(!this.verifyAuth(auth)) return;
      sessionStorage.setItem('auth-123', JSON.stringify(auth));
    }
  
    setAuth(auth: IAuth) {
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
  