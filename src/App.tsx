import { AuthProvider } from "./auth/context"
import { AppRouter } from "./router/AppRouter"

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}


