"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      if (email && email.includes("@")) {
        setStatus("success")
        setMessage("Thank you for subscribing!")
        setEmail("")
      } else {
        setStatus("error")
        setMessage("Please enter a valid email address.")
      }
    }, 1000)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/70"
          disabled={status === "loading"}
        />
        <Button type="submit" disabled={status === "loading"} className="bg-white text-blue-600 hover:bg-gray-100">
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>

      {status === "success" && (
        <div className="flex items-center gap-2 mt-3 text-green-300">
          <CheckCircle className="h-4 w-4" />
          <span className="text-sm">{message}</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 mt-3 text-red-300">
          <AlertCircle className="h-4 w-4" />
          <span className="text-sm">{message}</span>
        </div>
      )}
    </div>
  )
}
