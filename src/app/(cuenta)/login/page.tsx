"use client"

import { useRouter } from "next/navigation"

const Login = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/')
  }
  return (
    <>
      <h1>Iniciar Sesión</h1>
      <button onClick={handleClick}>Regresar a Home</button>
    </>
  )
}

export default Login