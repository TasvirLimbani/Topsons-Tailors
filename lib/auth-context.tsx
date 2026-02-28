// "use client"

// import { createContext, useContext, useState } from "react"

// type User = {
//   id: number
//   name: string
//   email: string
// }

// type AuthContextType = {
//   user: User | null
//   loginOpen: boolean
//   signupOpen: boolean
//   openLogin: () => void
//   openSignup: () => void
//   closeAuth: () => void
//   login: (user: User) => void
//   logout: () => void
// }

// const AuthContext = createContext<AuthContextType | null>(null)

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null)
//   const [loginOpen, setLoginOpen] = useState(false)
//   const [signupOpen, setSignupOpen] = useState(false)

//   const openLogin = () => {
//     setSignupOpen(false)
//     setLoginOpen(true)
//   }

//   const openSignup = () => {
//     setLoginOpen(false)
//     setSignupOpen(true)
//   }

//   const closeAuth = () => {
//     setLoginOpen(false)
//     setSignupOpen(false)
//   }

//   const login = (userData: User) => {
//     setUser(userData)
//     closeAuth()
//   }

//   const logout = () => {
//     setUser(null)
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loginOpen,
//         signupOpen,
//         openLogin,
//         openSignup,
//         closeAuth,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => {
//   const ctx = useContext(AuthContext)
//   if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
//   return ctx
// }










"use client"

import { createContext, useContext, useEffect, useState } from "react"

type User = {
  user_id: number
  email: string
  first_name?: string
  last_name?: string
  phone?: string
}

type AuthContextType = {
  user: User | null
  loginOpen: boolean
  signupOpen: boolean
  openLogin: () => void
  openSignup: () => void
  closeAuth: () => void
  login: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)

  // 🔄 LOAD USER
  useEffect(() => {
    const stored = localStorage.getItem("user")
    if (stored) setUser(JSON.parse(stored))
  }, [])

  const login = (userData: User) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
    closeAuth()
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const openLogin = () => {
    setSignupOpen(false)
    setLoginOpen(true)
  }

  const openSignup = () => {
    setLoginOpen(false)
    setSignupOpen(true)
  }

  const closeAuth = () => {
    setLoginOpen(false)
    setSignupOpen(false)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loginOpen,
        signupOpen,
        openLogin,
        openSignup,
        closeAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
  return ctx
}