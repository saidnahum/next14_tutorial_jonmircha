'use client'

/// Con layout.tsx se mantiene el estado en los children
/// Con template.tsx NO se comparte el estado

import { useState } from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {

  const [input, setInput] = useState("")

  return (
    <div>
      <h2>Rutas relativas a la cuenta de usuario</h2>
      {children}
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
    </div>
  )
}

export default Layout