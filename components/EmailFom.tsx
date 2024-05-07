"use client";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function EmailForm() {
  const [email, setEmail] = useState<string>();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("api/submit/route.ts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail("");
        toast.success("Obrigado por se inscrever! Vamos economizar 🚀");
      } else {
        setEmail("");
        toast.error("Oops! Algo deu errado!");
      }
    } catch (err) {
      setEmail("");
      console.error(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="POST" className="mt-2 max-w-sm">
        <div className="flex flex-col gap-2 lg:flex-row">
          <label className="sr-only" htmlFor="email-address">
            Seu e-mail:
          </label>
          <input
            autoComplete="email"
            className="text-accent-500 block h-12 w-full focus:invalid:border-red-400 focus:invalid:text-red-500 focus:invalid:ring-red-500 appearance-none rounded-lg border-2 border-slate-300 px-4 py-2 placeholder-zinc-400 duration-200 focus:outline-none focus:ring-zinc-300 sm:text-base"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            id="email-address"
            name="email"
            placeholder="johndoe@example.com"
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className="flex h-12 shrink-0 items-center justify-center gap-1 rounded-lg bg-[#059669] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-green-900"
            type="submit"
          >
            <span>Se inscrever na lista</span>
          </button>
        </div>
      </form>

      <div className="flex items-start gap-2 text-gray-500">
        <InfoCircledIcon />
        <p className="text-sm -mt-[0.5] max-w-sm">
          Não se preocupe! Seus dados estão seguros e não vamos ficar te contando desnecessariamente 💙
        </p>
      </div>
    </>
  );
}
