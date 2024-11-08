import Image from "next/image";
import FistIcon from "@/app/assets/images/explore/ph--hand-fist-fill.png";
import HeartIcon from "@/app/assets/images/explore/material-symbols--ecg-heart.png";
import RunningIcon from "@/app/assets/images/explore/fa6-solid--person-running.png";
import BasketIcon from "@/app/assets/images/explore/mage--basket-fill.png";
import { Icon } from "@iconify/react/dist/iconify.js";

// Declaração de uma array de objetos contendo as informações dos cards, como ícone, título e descrição
const exploreInfos = [
  {
    icon: FistIcon,
    title: "Strength",
    description:
      "Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.",
  },
  {
    icon: HeartIcon,
    title: "Physical Fitness",
    description:
      "It encompasses a range of activities that improve health, strength, flexibility, and overall well-being.",
  },
  {
    icon: RunningIcon,
    title: "Fat Lose",
    description:
      "Through a combination of workout routines and expert guidance, well empower you to reach your goals.",
  },
  {
    icon: BasketIcon,
    title: "Weight Gain",
    description:
      "Designed for individuais, our program offers an effective approach to gaining weight in a sustainable manner.",
  },
];

// Iniciando o componente Explore
export default function Explore() {
  return (
    <section className="mt-24">
      <div className="flex justify-between">
        <h1 className="font-semibold text-4xl max-sm:text-2xl">
          EXPLORE OUR PROGRAM
        </h1>
        <div className="flex gap-4 items-center">
          {/* <Image src={ArrowLeft} alt="Arrow left icon" width={45} />
          <Image src={ArrowRight} alt="Arrow right icon" width={45} /> */}
          <Icon
            icon="iconamoon:arrow-left-6-circle-thin"
            width="3rem"
            height="3rem"
            className="text-white hover:text-primary-orange cursor-pointer"
          />
          <Icon
            icon="iconamoon:arrow-right-6-circle-thin"
            width="3rem"
            height="3rem"
            className="text-white hover:text-primary-orange cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-16 max-xl:gap-y-12">
        {/* Aqui está mapeando cada elemento da array "exploreInfos" e criando um card para cada um contendo as informações */}
        {exploreInfos.map((e, i) => (
          <div
            className="flex flex-col border-2 border-white border-opacity-0 gap-4 bg-secondary-dark p-4 rounded-md w-[17.5rem] hover:bg-dark-gray hover:border-primary-orange duration-300"
            key={i}>
            <Image
              src={e.icon}
              alt={`Icon - ${e.title}`}
              width={50}
              className="bg-primary-orange p-2 rounded"
            />
            <h2 className="font-semibold">{e.title}</h2>
            <p className="text-light-gray">{e.description}</p>
            <a
              href="#"
              className="font-medium hover:text-primary-orange duration-200">
              Join now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
