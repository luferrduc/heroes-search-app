import { useNavigate } from "react-router"
import { useAuthContext } from "../hooks/useAuthContext"
import { useForm } from "@/hooks/useForm"
import { FormEvent } from "react"

export const LoginPage = () => {

  const navigate = useNavigate()
  const { login } = useAuthContext()

  const { onInputChange, name, email } = useForm({
    name: '',
    email: ''
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(name.length <= 3) return
    handleLogin(name)

  }

  const handleLogin = (name: string, email?: string) => {

    const lastPath = localStorage.getItem('lastPath') || '/'
    login(name, email)
    navigate(lastPath, {
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
      <form className="w-50 mx-auto d-flex flex-column gap-3" onSubmit={handleSubmit}>       
        <div className="d-flex flex-column gap-1">
          <label className="form-label fw-bold">Name</label>
          <input 
            className="form-control" 
            type="text" 
            name="name" 
            id="name" 
            onChange={onInputChange}
            value={name}
          />
        </div>
        <div className="d-flex flex-column gap-1">
          <label className="form-label fw-bold">Email</label>
          <input 
            className="form-control" 
            type="email" 
            name="email" 
            id="email" 
            onChange={onInputChange}
            value={email}
          />
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-primary px-4 text-center">
            Login
          </button>
        </div>
      </form>
    </>
  )
}