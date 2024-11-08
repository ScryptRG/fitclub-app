import Image from "next/image";
import FitclubLogo from "@/app/assets/images/logo.png";
import HeaderMan from "@/app/assets/images/header.png";
import { Icon } from "@iconify/react";

// Iniciando o componente Header
export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center py-8">
        <Image src={FitclubLogo} alt="Logo Fitclub" width={150} />
        <ul className="flex gap-10 max-[900px]:hidden">
          <li className="relative group">
            <a href="#" className="hover:text-primary-orange duration-200">Home</a>
            <hr className="absolute mt-2 w-0 h-[2px] border-none bg-primary-orange group-hover:!w-[50%] duration-200 ease-linear" />
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-primary-orange duration-200">Program</a>
            <hr className="absolute mt-2 w-0 h-[2px] border-none bg-primary-orange group-hover:!w-[50%] duration-200 ease-linear" />
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-primary-orange duration-200">Service</a>
            <hr className="absolute mt-2 w-0 h-[2px] border-none bg-primary-orange group-hover:!w-[50%] duration-200 ease-linear" />
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-primary-orange duration-200">About</a>
            <hr className="absolute mt-2 w-0 h-[2px] border-none bg-primary-orange group-hover:!w-[50%] duration-200 ease-linear" />
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-primary-orange duration-200">Community</a>
            <hr className="absolute mt-2 w-0 h-[2px] border-none bg-primary-orange group-hover:!w-[50%] duration-200 ease-linear" />
          </li>
        </ul>
        <button className="bg-primary-orange px-7 py-3 rounded hover:bg-secondary-orange max-[900px]:hidden duration-200">
          Join Now
        </button>
        <button className="hidden max-[900px]:block">
          <Icon
            icon="mingcute:menu-fill"
            width="2rem"
            height="2rem"
            className="text-primary-orange"
          />
        </button>
      </nav>
      <section className="relative mt-10 flex items-center justify-between max-lg:justify-center">
        <div className="w-[50%] max-lg:w-[80%] max-lg:mt-12">
          <p className="text-primary-orange font-semibold mb-5">
            BEST FITNESS IN THE TOWN
          </p>
          <h1 className="font-bold text-7xl leading-[5rem] max-md:text-5xl max-sm:text-4xl">
            <span className="stroke-primary-orange stroke-2" id="make-span">
              MAKE
            </span>{" "}
            YOUR BODY SHAPE
          </h1>
          <p className="text-light-gray my-6">
            Unleash your ptential and embark on a journey towards a stronger,
            fitter, and more confident you. Sign up for 'Make Your Body Shape'
            now and witness the incredible transformation your body is capable
            of!
          </p>
          <button className="bg-primary-orange px-7 py-3 rounded hover:bg-secondary-orange duration-200">
            Get Started
          </button>
        </div>

        {/* Textos escondidos na parte de trás do header */}
        <span className="absolute -bottom-16 right-16 opacity-10 -z-10 text-[35rem] font-medium text-primary-orange select-none max-lg:hidden">O</span>
        <span className="absolute -bottom-16 left-56 opacity-5 -z-10 text-[10rem] font-bold select-none max-lg:hidden">FITNESS</span>

        <Image
          src={HeaderMan}
          alt="A shirtless man holding two weights"
          width={350}
          className="mr-24 max-lg:hidden"
        />
      </section>
    </header>
  );
}
