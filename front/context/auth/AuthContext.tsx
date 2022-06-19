import { createContext } from 'react';
import { IUser } from '../../interfaces';


interface ContextProps {
    isLoggedIn: boolean;
    user?: IUser;

<<<<<<< HEAD
    loginUser: (Username:string, email: string, password: string) => Promise<boolean>;
    registerUser: (name: string, surname:string, Username:string,  password: string, email: string, dni:number, age:number, address:string, phoneNumber:number) => Promise<{ hasError: boolean; message?: string; }>;
    logout: () => void;
}


export const AuthContext = createContext({} as ContextProps );

// {
//     "name": "pablo",
//     "surname": "gribaudo",
//     "Username": "pablo12",
//     "password": "123456",
//     "email": "lalicab012@gmail.com",
//     "dni": 42855423,
//     "age": 22,
//     "address": "merlo 2930",
//     "phoneNumber": 3518108063
//  }
=======
    loginUser: (email: string, password: string, user: string) => Promise<boolean>;
    registerUser: (name: string, email: string, password: string) => Promise<{ hasError: boolean; message?: string; }>;
}


export const AuthContext = createContext({} as ContextProps );
>>>>>>> 59de202ade18bb59c3d1c5ded45358eb75d498dc
