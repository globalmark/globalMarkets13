<<<<<<< HEAD
=======

>>>>>>> 59de202ade18bb59c3d1c5ded45358eb75d498dc
import { FC, useReducer, useEffect } from 'react';
import { AuthContext, authReducer } from './';
import Cookies from 'js-cookie';
import axios from 'axios';

import { tesloApi } from '../../api';
import { IUser } from '../../interfaces';
<<<<<<< HEAD
import { useRouter } from 'next/router'; 
=======
>>>>>>> 59de202ade18bb59c3d1c5ded45358eb75d498dc

export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser;
}


const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined,
}


export const AuthProvider:FC<any> = ({ children }) => {

    const [state, dispatch] = useReducer( authReducer, AUTH_INITIAL_STATE );
<<<<<<< HEAD
    const router = useRouter();
=======
>>>>>>> 59de202ade18bb59c3d1c5ded45358eb75d498dc

    useEffect(() => {
        checkToken();
    }, [])

    const checkToken = async() => {

        try {
            const { data } = await tesloApi.get('/user/validate-token');
            const { token, user } = data;
            Cookies.set('token', token );
            dispatch({ type: '[Auth] - Login', payload: user });
        } catch (error) {
            Cookies.remove('token');
        }
    }
    


<<<<<<< HEAD
    const loginUser = async(Username:string, email: string, password: string ): Promise<boolean> => {

        try {
            const { data } = await tesloApi.post('/users/users/login', {Username, email, password });
            console.log (data)
            const { token, user } = data;
            Cookies.set('token', token );
            dispatch({ type: '[Auth] - Login', payload: user });
=======
    const loginUser = async( email: string, password: string, user: string ): Promise<boolean> => {

        try {
            const { data } = await tesloApi.post('/login', { email, password, user }); 
            console.log(data)
            const { token, users } = data;
            Cookies.set('token', token );
            dispatch({ type: '[Auth] - Login', payload: users });
>>>>>>> 59de202ade18bb59c3d1c5ded45358eb75d498dc
            return true;
        } catch (error) {
            return false;
        }

    }


<<<<<<< HEAD
    const registerUser = async( name: string, surname:string, Username:string, password: string, email: string, dni:number, age:number, address:string, phoneNumber:number): Promise<{hasError: boolean; message?: string}> => {
        try {
            const { data } = await tesloApi.post('/users', { name, surname, Username, password, email, dni, age, address, phoneNumber});
=======
    const registerUser = async( name: string, email: string, password: string ): Promise<{hasError: boolean; message?: string}> => {
        try {
            const { data } = await tesloApi.post('/user/register', { name, email, password });
>>>>>>> 59de202ade18bb59c3d1c5ded45358eb75d498dc
            const { token, user } = data;
            Cookies.set('token', token );
            dispatch({ type: '[Auth] - Login', payload: user });
            return {
                hasError: false
            }

        } catch (error) {
            if ( axios.isAxiosError(error) ) {
                return {
                    hasError: true,
                    message: "error de axios"
                }
            }

            return {
                hasError: true,
                message: 'No se pudo crear el usuario - intente de nuevo'
            }
        }
    }

<<<<<<< HEAD
    const logout = () => {
        Cookies.remove('token');
        Cookies.remove('cart');
        router.reload()
    }
=======
>>>>>>> 59de202ade18bb59c3d1c5ded45358eb75d498dc


    return (
        <AuthContext.Provider value={{
            ...state,

            // Methods
            loginUser,
            registerUser,
<<<<<<< HEAD
            logout
=======
>>>>>>> 59de202ade18bb59c3d1c5ded45358eb75d498dc

        }}>
            { children }
        </AuthContext.Provider>
    )
};