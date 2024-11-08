import FitclubLogo from "@/app/assets/images/logo.png";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

// Iniciando o componente Footer
export default function Footer() {
  return (
    <footer className="flex flex-wrap gap-4 justify-evenly max-w-[72rem] mx-auto mt-12 py-12 px-8 text-light-gray">
      <div className="radial-orange r1"></div>
      <div className="w-[20rem]">
        <Image src={FitclubLogo} alt="Fitclub logo" />
        <p className="my-10">
          Take the first Step towards a healthier, stronger you with our
          unbeatable pricing plans. {"Let's"} sweat, achieve, and conquer together!
        </p>
        <div className="flex gap-3">
          <a href="#">
            <Icon
              icon="ri:facebook-fill"
              width="3rem"
              height="3rem"
              className="border border-primary-orange rounded-full p-3 text-primary-orange hover:text-white hover:bg-primary-orange duration-200"
            />
          </a>
          <a href="#">
            <Icon
              icon="ri:instagram-fill"
              width="3rem"
              height="3rem"
              className="border border-primary-orange rounded-full p-3 text-primary-orange hover:text-white hover:bg-primary-orange duration-200"
            />
          </a>
          <a href="#">
            <Icon
              icon="ri:twitter-fill"
              width="3rem"
              height="3rem"
              className="border border-primary-orange rounded-full p-3 text-primary-orange hover:text-white hover:bg-primary-orange duration-200"
            />
          </a>
        </div>
      </div>

      <ul className="leading-10">
        <li className="font-semibold text-lg mb-5">Company</li>
        <li>
          <a href="#" className="hover:text-primary-orange duration-200">
            Business
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-orange duration-200">
            Franchise
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-orange duration-200">
            Partnership
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-orange duration-200">
            Network
          </a>
        </li>
      </ul>
      <ul className="leading-10">
        <li className="font-semibold text-lg mb-5">About Us</li>
        <li>
          <a href="#" className="hover:text-primary-orange duration-200">
            Blogs
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-orange duration-200">
            Security
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-orange duration-200">
            Partnership
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-orange duration-200">
            Careers
          </a>
        </li>
      </ul>
      <ul className="leading-10">
        <li className="font-semibold text-lg mb-5">Contact</li>
        <li>
          <a href="#" className="hover:text-primary-orange duration-200">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-orange duration-200">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-orange duration-200">
            Terms & Conditions
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-orange duration-200">
            BMI Calculator
          </a>
        </li>
      </ul>
    </footer>
  );
}
