import { useAuthContext } from "@/auth/hooks/useAuthContext"
import { Navigate, useLocation } from "react-router";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {

  const { authState: { logged: isLogged }} = useAuthContext();
  const { pathname, search } = useLocation()

  /*
    TODO: Verificar por qué al hacer login vuelve a colocar el lastPath en /
  */ 
  if(isLogged){
    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath)
  }
  
  return isLogged ? children : <Navigate to="/login" />
}