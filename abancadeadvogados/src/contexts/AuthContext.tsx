import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import api from "../services/api";
import Notiflix from "notiflix";
import jwtDecode from "jwt-decode";

type User = {
  name: string;
  email: string;
  avatar_url: string;
  id: string;
}

type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user;

  const recoverUser = async () => {
    let { 'abancadeadvogados.token': token } = parseCookies()

    if (token) {
      const value = token.substring(6, token.length);
      const decoded: any = await jwtDecode(value);
      if (decoded) {
        setUser({
          name: decoded.name,
          email: decoded.email,
          avatar_url: '',
          id: decoded.id
        })
      }
    }
  }
  

  useEffect(() => {
    recoverUser()
  }, [])

  async function signIn({ email, password }: SignInData) {
    try {

      api.post('/api/auth', {email, password}, {
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
        }
      }).then(response => {
        
        const {token} = response.data;

        setCookie(undefined, 'abancadeadvogados.token', token, {
          maxAge: 60 * 60 * 1, // 1 hour
        })
        
        api.defaults.headers['Authorization'] = `${token}`;
        setUser(user)
        Router.push('/dashboard');

      })
      .catch(err => {
        Notiflix.Notify.failure('Ocorreu um erro desconhecido, tente novamente!');
      })

    }
    catch (error) {
      Notiflix.Notify.failure('Qui timide rogat docet negare');
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
