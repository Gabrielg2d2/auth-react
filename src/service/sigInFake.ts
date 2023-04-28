import { INewAuth } from "../entities/Auth/interface";
interface IResponse {
    data: INewAuth;
    status: number;
}

export function sigInFake(){

return new Promise<IResponse>(resolve => {
    setTimeout(() => {
        resolve({
            data: {
                authenticated: true,
                token: '123456789',
                user: {
                    name: 'John Doe',
                    email: 'john@gmail.com',
                    profile: ['ADMIN']
                },
            },
            status: 200,
        });
    }, 2000);
})
}