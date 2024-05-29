import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <div className="max-w-screen-xl mt-20">
        <img src="https://educacao.ibpt.com.br/wp-content/uploads/2018/12/principios-do-direito-tributarios.png" alt="" />
      </div>
    </main>
  );
}
