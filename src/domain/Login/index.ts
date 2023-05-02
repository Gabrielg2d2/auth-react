import Auth from "../../entities/Auth/auth"
import { IAuth } from "../../entities/Auth/interface";
import { PersistAuth } from "../../entities/PersistAuth";

type LoginType = {
    email: string
    password: string
  }

export class Login {
    private auth: IAuth;
    private persist = new PersistAuth();

    constructor() {
        this.auth = Auth;      
    }

    async signIn(props: LoginType) {
        console.log("login: ", props)
        // chamar a camada de infraestrutura
        // para fazer a requisição
        // e retornar o token e usuário
        const response = {
            token: '1234567890',
            user: {
                name: 'John Doe',
                email: "user@gmail.com",
                profile: ['admin']
            },
            authenticated: true
        }

        if(!this.auth.verifyAuth(response)) {
            this.auth.logout();
            throw new Error("Error response login")
        }
        this.auth.setAuth(response)
        this.persist.setPersist(response)

        return response;
    }

    async signOut() {
        this.auth.logout();
        this.persist.clearPersist();
    }
    

    persistLogin() {
        return this.persist.getPersist();
    }
}