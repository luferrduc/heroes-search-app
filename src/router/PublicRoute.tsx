import { useAuthContext } from "@/auth/hooks/useAuthContext"
import { Navigate } from "react-router";

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { authState: { logged: isLogged }} = useAuthContext();
  const lastPath = localStorage.getItem('lastPath') || '/'

  
  return isLogged ?  <Navigate to={lastPath} /> : children
}