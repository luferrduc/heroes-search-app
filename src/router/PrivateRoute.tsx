import { useAuthContext } from "@/auth/hooks/useAuthContext"
import { useMemo } from "react";
import { Navigate, useLocation } from "react-router";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {

  const { authState: { logged: isLogged }} = useAuthContext();
  const { pathname, search } = useLocation()

  /*
    TODO: Verificar por qué al hacer login vuelve a colocar el lastPath en /
  */ 
  const lastPath = useMemo(() => pathname + search, [pathname, search])
  localStorage.setItem('lastPath', lastPath)
  
  return isLogged ? children : <Navigate to="/login" />
}