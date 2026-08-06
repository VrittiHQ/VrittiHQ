"use client";

import { useState } from "react";
import { hero, closingCta } from "@/config/copy";

interface WaitlistFormProps {
  variant?: "hero" | "closing";
}

export function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const copy = variant === "hero" ? hero : closingCta;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state === "loading") return;
    setState("loading");
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: "", message: `Waitlist signup (${variant})`, company: "", phone: "", employees: "" }),
      });
      if (!res.ok) throw new Error();
      setState("done");
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 3000);
    }
  };

  if (state === "done") {
    return (
      <div className="v-form-success">
        <span className="v-form-success-text">You&apos;re in. We&apos;ll be in touch.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="v-form">
      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder={copy.ctaPlaceholder} className="v-input" />
      <button type="submit" disabled={state === "loading"}
        className="v-btn v-btn-primary"
        style={{ flexShrink: 0, opacity: state === "loading" ? 0.7 : 1 }}>
        {state === "loading" ? "Joining..." : copy.cta}
      </button>
      {state === "error" && <p className="v-form-error">Something went wrong. Try again.</p>}
    </form>
  );
}
