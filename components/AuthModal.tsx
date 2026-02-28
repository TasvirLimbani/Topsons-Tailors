"use client"

import { X } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useState } from "react"

export function AuthModal() {
  const {
    loginOpen,
    signupOpen,
    closeAuth,
    openLogin,
    openSignup,
    login,
  } = useAuth()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  if (!loginOpen && !signupOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // 🟢 SIGNUP
      if (signupOpen) {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            password,
          }),
        });

        const data = await res.json();
        console.log("SIGNUP RESPONSE:", data);

        if (!data?.status) {
          alert(data?.message || "Signup failed");
          return;
        }

        // ✅ Signup succeeded, now switch to login modal
        alert("Signup successful! Please login to continue.");
        closeAuth();  // Close signup modal first
        openLogin();  // Open login modal
        setEmail("");
        setPassword("");
        setPhone("");
        setFirstName("");
        setLastName("");
        return;
      }
      // 🔐 LOGIN
      if (loginOpen) {
        const formData = new FormData()
        formData.append("email", email.trim())
        formData.append("password", password)

        const res = await fetch("/api/auth/login", {
          method: "POST",
          body: formData,
        })

        const data = await res.json()
        console.log("LOGIN RESPONSE:", data)


        if (!data.status) {
          alert(data.message || "Invalid email or password")
          return
        }

        const apiUser = data.data || data.user

        if (!apiUser) {
          alert("Invalid server response")
          return
        }

        login({
          user_id: Number(apiUser.user_id),
          email: apiUser.email,
          first_name: `${apiUser.first_name || ""}`,
          last_name: `${apiUser.last_name || ""}`,
          phone: apiUser.phone || "",
        })

        closeAuth()
        setEmail("")
        setPassword("")
      }

    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md rounded-xl bg-[#f7f2e9] p-8 shadow-2xl">
        <button onClick={closeAuth} className="absolute right-4 top-4">
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-center text-2xl mb-6">
          {loginOpen ? "Login" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {signupOpen && (
            <>
              <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" className="w-full border px-4 py-2" required />
              <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" className="w-full border px-4 py-2" required />
            </>
          )}

          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full border px-4 py-2" required />

          {signupOpen && (
            <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" className="w-full border px-4 py-2" required />
          )}

          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full border px-4 py-2" required />

          <button disabled={loading} className="w-full bg-[#1f3a2e] text-white py-2">
            {loading ? "Please wait..." : loginOpen ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-center text-sm mt-4">
          {loginOpen ? (
            <>Don’t have an account? <button type="button" onClick={openSignup} className="underline">Sign Up</button></>
          ) : (
            <>Already have one? <button type="button" onClick={openLogin} className="underline">Login</button></>
          )}
        </div>
      </div>
    </div>
  )
}



