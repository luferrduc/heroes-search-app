import { useNavigate } from "react-router"
import { useAuthContext } from "../hooks/useAuthContext"
import { useForm } from "@/ui/hooks/useForm"
import { FormEvent } from "react"

export const LoginPage = () => {

  const navigate = useNavigate()
  const { login } = useAuthContext()

  const { onInputChange, name } = useForm({
    name: ''
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(name.length <= 3) return
    handleLogin(name)

  }

  const handleLogin = (name: string, email?: string) => {
    login(name, email)
    navigate('/', {
      replace: true
    })
  }

  return (
    <>
      <h1>Login</h1>
      <hr />
      {/* 
        // TODO: Agregar un mini formulario para crear el nombre  
      */}
      <form className="w-50 mx-auto w" onSubmit={handleSubmit}>
        <label className="form-label">Name</label>
        <input 
          className="form-control" 
          type="text" 
          name="name" 
          id="name" 
          onChange={onInputChange}
          value={name}
        />
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-primary px-4 text-center">
            Login
          </button>
        </div>
      </form>
    </>
  )
}