import Image from "next/image";
import PersonalTrainerIcon from "@/app/assets/images/join-benefits/mingcute--user-star-fill.png";
import CameraIcon from "@/app/assets/images/join-benefits/gridicons--video-camera.png";
import BuildingIcon from "@/app/assets/images/join-benefits/ri--building-line.png";
import { useEffect, useState } from "react";

// Iniciando o componente JoinBenefits
export default function JoinBenefits() {

  // Estado para mostrar o elemento (iniciando com falso)
  const [showElement, setShowElement] = useState(false);

  // O useEffect é usado para executar uma função quando o componente é montado.
  useEffect(() => {

    // O handleScroll é uma função que será executada quando o usuário rolar a página.
    const handleScroll = () => {

      // O setShowElement é usado para atualizar o estado quando "showElement" para verdadeiro quando o usuário rolar a página em 1500px.
      setShowElement(window.scrollY > 1500);
    };

    // O window.addEventListener é usado para ativar a função quando o usuário rolar a página.
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (

    <div className={`flex flex-wrap justify-center relative -top-16 gap-5 bg-secondary-dark rounded-xl p-8 w-[90%] mx-auto text-light-gray
    ${showElement && "animate-slideUpBenefits"}`}> { /* Quando o "showElement" for verdadeiro, será adicionado a classe "animate-slideUpBenefits" que animará o elemento */ }
      <div className="flex gap-5 w-[19rem]">
        <Image
          src={PersonalTrainerIcon}
          alt="Personal trainer icon"
          width={50}
          className="bg-primary-orange p-2 rounded self-center"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg text-white">Personal Trainer</h3>
          <p>Unlock your potential with our expert Personal Trainers.</p>
        </div>
      </div>
      <div className="flex gap-5 w-[19rem]">
        <Image
          src={CameraIcon}
          alt="Camera icon"
          width={50}
          className="bg-primary-orange p-2 rounded self-center"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg text-white">
            Practice Sessions
          </h3>
          <p>Elevate your fitness with practice sessions.</p>
        </div>
      </div>
      <div className="flex gap-5 w-[19rem]">
        <Image
          src={BuildingIcon}
          alt="Building icon"
          width={50}
          className="bg-primary-orange p-2 rounded self-center"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg text-white">Good Management</h3>
          <p>Supportive management, for your fitness success.</p>
        </div>
      </div>
    </div>
  );
}
