import { useAuthContext } from "@/auth/hooks/useAuthContext"
import { Navigate } from "react-router";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { authState: { logged: isLogged }} = useAuthContext();


  
  return isLogged ? children : <Navigate to="/login" />
}