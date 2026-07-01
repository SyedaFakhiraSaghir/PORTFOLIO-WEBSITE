"use client";

import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/data/resume";
import { sendContactEmail } from "@/lib/emailjs";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isValid =
    name.trim().length > 0 &&
    email.includes("@") &&
    message.trim().length > 10;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      await sendContactEmail({
        from_name: name.trim(),
        reply_to: email.trim(),
        message: message.trim(),
      });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again or email directly."
      );
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeader
          label="Contact"
          title="Let's connect"
          description={`Reach out for AI, environmental tech, open-source, or research collaborations. Or email me directly at ${siteConfig.email}.`}
        />

        <div className="mx-auto max-w-xl">
          <form
            onSubmit={handleSubmit}
            className="glass-panel space-y-5 rounded-2xl p-6 sm:p-8"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                disabled={status === "submitting"}
                autoComplete="name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                disabled={status === "submitting"}
                autoComplete="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                required
                disabled={status === "submitting"}
              />
            </div>

            {status === "success" ? (
              <div
                className="flex items-start gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400"
                role="status"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                <p>
                  Message sent successfully. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : null}

            {status === "error" ? (
              <div
                className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                role="alert"
              >
                <AlertCircle className="mt-0.5 size-4 shrink-0" />
                <p>{errorMessage}</p>
              </div>
            ) : null}

            <Button
              type="submit"
              disabled={!isValid || status === "submitting"}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 size-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
