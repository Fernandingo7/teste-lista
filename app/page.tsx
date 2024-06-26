import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-100">
        <div className="md:h-full h-80 bg-[#A1CDFC] relative overflow-hidden">
          <Image
            src="/otimize.svg"
            alt="Mobile App Screenshots"
            fill
            className="object-contain mt-8 md:mt-24 px-14 object-bottom"
          />
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-xl">
            Quer ter acesso a passagens aéreas baratas de verdade? Conheça a <span className="text-blue-600"> MinhaPassagemBarata! </span>
          </h1>
          <p className="text-gray-500">
            Se inscreva na lista de espera e seja o primeiro a saber do nosso lançamento.
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
