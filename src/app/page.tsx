"use client";

// Importando componentes
import Explore from "@/app/components/explore";
import Header from "@/app/components/header";
import Plans from "@/app/components/plans";
import MemberReview from "@/app/components/member-review";
import Footer from "@/app/components/footer";
import JoinBenefits from "@/app/components/join-benefits";

// Importando o componente nativo de imagens do Next.js
import Image from "next/image";

// Importando imagens
import Class1 from "@/app/assets/images/class-1.jpg";
import Class2 from "@/app/assets/images/class-2.jpg";
import Join from "@/app/assets/images/join.jpg";
import { useEffect, useState } from "react";

export default function Home() {
  const [showImages, setShowImages] = useState(false);

  // O useEffect é usado para executar uma função quando o componente é montado.
  useEffect(() => {
    // O handleScroll é uma função que será executada quando o usuário rolar a página.
    const handleScroll = () => {
      // O setShowImages é usado para atualizar o estado quando "showElement" para verdadeiro quando o usuário rolar a página em 300px.
      setShowImages(window.scrollY > 300);
    };

    // O window.addEventListener é usado para ativar a função quando o usuário rolar a página.
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="max-w-[75rem] mx-auto px-6">
        <Header /> {/* Importando o componente Header */}
        <div className="radial-orange r1"></div>
        <Explore /> {/* Importando o componente Explore */}
        {/* Seção "THE CLASS YOU WILL GET HERE" */}
        <section className="flex justify-between flex-wrap mt-40 mb-12 max-xl:justify-center">
          {/* Duas imagens desta seção */}
          <div className={`max-w-[38rem]`}>
            <Image
              src={Class1}
              alt="A man holding two red ropes"
              className={`rounded-xl relative left-12 max-sm:w-[400px] max-sm:left-5 ${
                showImages && "animate-slideUp"
              }`}
              width={550}
            />{" "}
            {/* Quando o "showImages" for verdadeiro, será adicionado a classe "animate-slideUp" que animará a imagem */}
            <Image
              src={Class2}
              alt="A man holding two weights"
              className={`rounded-xl relative bottom-24 ${
                showImages && "animate-slideUp2"
              }`}
              width={300}
            />
          </div>

          <div className="radial-orange r2"></div>

          {/* Seção "THE CLASS YOU WILL GET HERE" */}
          <div className="flex flex-col gap-8 w-[45%] ml-5 max-xl:w-[70%]">
            <h2 className="font-semibold text-4xl">
              THE CLASS YOU WILL GET HERE
            </h2>
            <p className="text-light-gray">
              Led by our team of expert and motivational instructors, 'The Class
              You Will Get Here' is a high-energy, results-driven session that
              combines a perfect blend of cardio, strength training, and
              functional exercises. Each class is carefully curated to keep you
              engaged and challenged, ensuring you never hit a plateau in your
              fitness endeavors.
            </p>
            <button className="self-start bg-primary-orange px-7 py-3 rounded hover:bg-secondary-orange duration-200">
              Book A Class
            </button>
          </div>

          {/* Seção "WHY JOIN US?" */}
        </section>
        <section>
          <h2 className="font-semibold text-4xl text-center">WHY JOIN US?</h2>
          <p className="text-light-gray w-[80%] text-center mx-auto my-8">
            Our diverse membership base creates a friendly and supportive
            atmosphere, where you can make friends and stay motivated.
          </p>
          <div className="radial-orange r1"></div>
          <Image
            src={Join}
            alt="Two women and two men riding a exercise bike at the gym."
            className="rounded-xl"
          />
          <JoinBenefits /> {/* Importando o componente JoinBenefits */}
        </section>
        <div className="radial-orange r2"></div>
        <Plans /> {/* Importando o componente Plans */}
      </main>
      <MemberReview /> {/* Importando o componente MemberReview */}
      <Footer /> {/* Importando o componente Footer */}
    </>
  );
}
