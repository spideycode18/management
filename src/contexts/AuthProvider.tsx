import {createContext, useContext, useState} from "react";
import { AuthContextType } from "../types/Auth";
import { fakeAuthProvider } from "../services/auth";
import { Navigate, useLocation } from "react-router-dom";

export let AuthContext = createContext<AuthContextType>(null!);

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useContext(AuthContext);
  let location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);
  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };
  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}